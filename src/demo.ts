
import { html, render } from 'lit-html';
import pkg from './../package.json';
import { signOut } from './components/databiz.login';

const root :HTMLElement = document.querySelector('#root');
console.log(process.env.CLIENT_ID);

interface State {
  empty: boolean,
  data: object
};

const state :State = {
  data: undefined,
  empty: true
};

const display = (evt :CustomEvent) => {
  state.data = evt.detail;
  state.empty = false;
  render(markup(state), root);
}

const logout = (evt :CustomEvent) => {
  signOut().then(() => {
    state.data = undefined;
    state.empty = true;
    render(markup(state), root);
  });
}

const result = (state :State) => state.empty ? '' : html`
  <section id="result">
    <pre>${JSON.stringify(state.data, null, 2)}</pre>
    <button
      @click=${(e :CustomEvent) => logout(e)}
    >Logout</button>
  </section>
`;

const markup = (state :State) => html`
  <main class="container">
    <h1>${pkg.name}</h1>
    <section>
      <p>Test it now!</p>
      <databiz-login
        @signin-success=${(e :CustomEvent) => display(e)}
        @signin-error=${(e :CustomEvent) => display(e)}
        client-id=${process.env.CLIENT_ID}
      ></databiz-login>
    </section>
    ${result(state)}
  </main>
`;

render(markup(state), root);