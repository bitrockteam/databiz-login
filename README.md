# @databiz/login

[![Build Status](https://travis-ci.org/bitrockteam/databiz-login.svg?branch=master)](https://travis-ci.org/bitrockteam/databiz-login)

> Web Component to simplify authentication using Google oAuth for Databiz group domains, it wraps the [Google Sign-in for Websites SDK](https://developers.google.com/identity/sign-in/web/) and expose custom events for its functionalities.

### How to use

Install the package from NPM registry
```bash
$ npm install @databiz/login
--- or ---
$ yarn add @databiz/login
```

If you want to include the compiled version (no build-step needed), just load the script tag:
```html
<script src="./node_modules/@databiz/login/component.js" async defer></script>
```

Or if you are working with Webpack and ES modules:
```javascript
import '@databiz/login';
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
import { signOut } from '@databiz/login';

// ...some code later...

signOut().then(() => {
  // code to execute after the logout is completed
});

```

### Browser compatibility
The component is built following the Custom Elements v1 and EcmaScript 2015 specifications.

| | Chrome | Firefox | Safari | Opera | Edge | IE11 |
|--|--|--|--|--|--|--|
| as-is | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |:x:|:x:|
| CE polyfill | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |

### Available NPM tasks
Start the demo page in development mode (live reload)
```bash
$ yarn start
```

Create a static build of the main component in the `root` folder
```bash
$ yarn build
```

Create a static build of the demo page in the `./dist` folder
```bash
$ yarn demo
```

Run the `demo` action and deploy to GitHub pages 
```bash
$ yarn deploy
```

### Local development
In order to have a local development environment, you must create a `.env` file in the project root and add your Google application's client id:

```
CLIENT_ID=123fake123client123id
```

### License
Developed by Bitrock UI Engineering team, released under the [MIT license](LICENSE).
