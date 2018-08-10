# @databiz/google-login

[![Build Status](https://travis-ci.org/bitrockteam/databiz-login.svg?branch=master)](https://travis-ci.org/bitrockteam/databiz-login)

> Web Component to simplify authentication using Google oAuth for Databiz group domains.

### How to use

Install the package from NPM registry
```bash
$ npm install @databiz/google-login
--- or ---
$ yarn add @databiz/google-login
```

If you want to include the compiled version (no build-step neeed), just load the script tag:
```html
<script src="./node_modules/@bitrock-it/databiz-login/component.js" async defer></script>
```

Or if you are working with Webpack and ES modules:
```javascript
import '@bitrock-it/databiz-login';
```

then in your markup add

```html
<databiz-login
  client-id="YOUR-CLIENT-ID"
></databiz-login>
```

the `client-id` is a required parameter and you can obtain it from the Google Developer console.

This will render the Google login button, once clicked a popup will be prompted to user to choose an account and confirm.

To react to the login attempt the component fires two custom events: `signin-success` and `signin-error`.

A quick example:

```javascript
const $login = document.querySelector('databiz-login');

$login.addEventListener('signin-success', 
  evt => console.log(evt.detail));

$login.addEventListener('signin-error', 
  evt => console.log(evt.detail));
```

The `signin-success` event will return an object inside the detail with the following data:

* `token`: the token_id returned from Google authentication
* `profile`: the data exposed by the `googleUser.getBasicProfile()` in the SDK.

To trigger the logout from the current session you must import the `signOut` method from the main package:

```javascript
import { signOut } from '@bitrock-it/databiz-login';

// ...some code later...

signOut().then(() => {
  // code to execute after the logout is completed
});

```

### Browser compatibility
The component is built following the Custom Elements v1 and EcmaScript 2015 specifications.

| | Chrome | Firefox | Safari | Opera | Edge | IE11 |
|--|--|--|--|--|--|--|
| as-is | ☑️ | ☑️ | ☑️ | ☑️ |✖️| ✖️ |
| CE polyfill | ☑️ | ☑️ | ☑️ | ☑️ | ☑️ | ✖️ |

### Available NPM tasks
Start the demo page in development mode (live reload)
```bash
$ yarn start
```

Create a static build in the root folder
```bash
$ yarn build
```

<!-- Run the tests
```bash
$ yarn test
``` -->

Run the build action and deploy to GitHub pages 
```bash
$ yarn deploy
```


### License
Developed by Bitrock UI Engineering team, released under the [MIT license](LICENSE).
