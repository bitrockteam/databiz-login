
import { html, render } from 'lit-html/lib/lit-extended';
import pkg from './../package.json';
import { signOut } from './components/databiz.login';

const root = document.querySelector('#root');
console.log(process.env.CLIENT_ID)

const state = {
  empty: true
};

const display = evt => {
  state.data = evt.detail;
  state.empty = false;
  render(markup(state), root);
}

const logout = evt => {
  signOut().then(() => {
    state.data = undefined;
    state.empty = true;
    render(markup(state), root);
  });
}

const result = state => state.empty ? '' : html`
  <section id="result">
    <pre>${JSON.stringify(state.data, null, 2)}</pre>
    <button
      on-click="${e => logout(e)}"
    >Logout</button>
  </section>
`;

const markup = (state) => html`
  <main class="container">
    <h1>${pkg.name}</h1>
    <section>
      <p>Test it now!</p>
      <databiz-login
        on-signin-success="${e => display(e)}"
        on-signin-error="${e => display(e)}"
        client-id$=${process.env.CLIENT_ID}
      ></databiz-login>
    </section>
    ${result(state)}
  </main>
`;

render(markup(state), root);