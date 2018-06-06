chrome.storage.sync.get(['username'], function(data) {
  if(!data.username) {
    displayLoggedOut();
  } else {
    displayLoggedIn();
  }
});

function displayLoggedOut() {
  let form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'onSubmit');
  form.setAttribute('class', 'available');

  let nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'username');
  nameInput.setAttribute('class', 'text');
  nameInput.setAttribute('tabIndex', 1);
  nameInput.setAttribute('autocomplete', 'off');
  //nameInput.setAttribute('value', 'username');

  let passInput = document.createElement('input');
  passInput.setAttribute('type', 'password');
  passInput.setAttribute('name', 'password');
  passInput.setAttribute('class', 'text');
  passInput.setAttribute('tabIndex', 2);
  //passInput.setAttribute('value', 'password');

  let registerLink = document.createElement('a');
  registerLink.setAttribute('class', 'register');
  registerLink.setAttribute('tabIndex', 4);
  registerLink.textContent = 'sign up';

  let submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('name', 'submit');
  submitButton.setAttribute('value', 'login');
  submitButton.setAttribute('class', 'button');
  submitButton.setAttribute('tabIndex', 3);
  submitButton.onclick = login;

  form.appendChild(nameInput);
  form.appendChild(passInput);
  form.appendChild(registerLink);
  form.appendChild(submitButton);

  document.getElementsByTagName('body')[0].appendChild(form);
}

function displayLoggedIn() {
  let loggedInCont = document.createElement('div');
  loggedInCont.setAttribute('id', 'logged-in-cont');

  let logoutButton = document.createElement('button');
  logoutButton.setAttribute('class', 'logout-button');
  logoutButton.textContent = 'logout';
  logoutButton.onclick = logout;

  loggedInCont.appendChild(logoutButton);

  document.getElementsByTagName('body')[0].appendChild(loggedInCont);
}

function login() {
  let form = document.getElementsByTagName('form')[0];
  let body = document.getElementsByTagName('body')[0];
  body.removeChild(form);

  displayLoggedIn();
}

function logout() {
  let cont = document.getElementById('logged-in-cont');
  let body = document.getElementsByTagName('body')[0];
  body.removeChild(cont);

  displayLoggedOut();
}
