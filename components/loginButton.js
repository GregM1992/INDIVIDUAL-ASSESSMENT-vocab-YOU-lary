import { signIn } from '../utils/auth';
// import renderToDom from '../utils/renderToDom';

// GOOGLE LOGIN BUTTON
const loginButton = (user) => {
  let domString = '';
  if (user) {
    document.querySelector('#login-form-container').innerHTML = domString;
  } else if (!user) {
    domString = '<button id="google-auth" class="btn btn-outline-secondary">GOOGLE LOGIN</button>';
    document.querySelector('#login-form-container').innerHTML = domString;
    document.querySelector('#google-auth').addEventListener('click', signIn);
  }
};

export default loginButton;
