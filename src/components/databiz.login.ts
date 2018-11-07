
declare global {
  const gapi: any
}

export const event = (event :string, detail :object) => 
  new CustomEvent(event, { detail, bubbles: true });

export const signOut = () => {
  const auth2 = gapi.auth2.getAuthInstance();
  return auth2.signOut();
}

export default class DbzGoogleLogin extends HTMLElement {

  connectedCallback() {
    const client :string = this.getAttribute('client-id') || '';

    this.innerHTML = /*html*/`
      <div id="signin2"></div>
    `;

    this._addScript(client);
  }

  _addScript(client_id :string) {
    const tag :HTMLElement = Object.assign(
      document.createElement('script'), {
        src: 'https://apis.google.com/js/platform.js',
        onload: () => this._renderButton(client_id)
    });
    document.head.appendChild(tag);
  }

  _renderButton(client_id :string) {
    const GoogleLib = new Promise(resolve => 
      gapi.load('auth2', () => resolve()));

    GoogleLib
      .then(() => gapi.auth2.init({ 
        client_id,
      }));

    GoogleLib
      .then(() => gapi.signin2.render('signin2', {
        client_id,
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        // theme: 'dark',
        onsuccess: this._onSuccess.bind(this),
        onfailure: this._onFailure.bind(this),
        ux_mode: 'popup'
      }));
    
  }

  _onFailure(error :object) {
    const failure = new Promise(resolve => resolve());
    failure
      .then(() => ({ error }))
      .then(detail => event('signin-error', detail))
      .then(evt => this.dispatchEvent(evt));
  }

  _approve(googleUser :any) {   
    const approve = new Promise(resolve => resolve());
    approve
      .then(() => googleUser.getBasicProfile())
      .then(profile => ({ profile }))
      .then(profile => Object.assign(profile, {
        token: googleUser.getAuthResponse().id_token 
      }))
      .then(detail => event('signin-success', detail))
      .then(evt => this.dispatchEvent(evt));
  }

  _reject() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
      .then(() => 'Not a valid domain')
      .then(message => ({ message, domain: false }))
      .then(detail => event('signin-error', detail))
      .then(evt => this.dispatchEvent(evt));
  }

  _onSuccess(googleUser) {
    const domain :string = googleUser.getHostedDomain();
    const accept :Array<string> = ['bitrock.it', 'databiz.it', 'radicalbit.io'];
    const valid :number = accept.filter(e => domain === e).length;

    valid ? this._approve(googleUser) : this._reject();
  }

}

customElements.define('databiz-login', DbzGoogleLogin);