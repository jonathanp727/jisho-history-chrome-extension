// Fix bux where popup doesn't show right on mac sometimes
setTimeout(function(){
  document.body.clientWidth = '400px';
},100);

chrome.storage.sync.get(['username'], function(data) {
  if(!data.username) {
    displayLoggedOut();
  } else {
    displayLoggedIn(data.username);
  }
});

function displayLoggedOut() {
  let form = document.createElement('form');
  form.setAttribute('method', 'post');
  //form.setAttribute('action', 'onSubmit');
  form.setAttribute('class', 'available');

  let nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'username');
  nameInput.setAttribute('class', 'text');
  nameInput.setAttribute('id', 'username');
  nameInput.setAttribute('tabIndex', 1);
  nameInput.setAttribute('autocomplete', 'off');
  //nameInput.setAttribute('value', 'username');

  let passInput = document.createElement('input');
  passInput.setAttribute('type', 'password');
  passInput.setAttribute('name', 'password');
  passInput.setAttribute('class', 'text');
  passInput.setAttribute('id', 'password');
  passInput.setAttribute('tabIndex', 2);
  //passInput.setAttribute('value', 'password');

  let registerLink = document.createElement('a');
  registerLink.setAttribute('class', 'register');
  registerLink.setAttribute('tabIndex', 4);
  registerLink.textContent = 'sign up';

  let submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'button');
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

function displayLoggedIn(username) {
  let loggedInCont = document.createElement('div');
  loggedInCont.setAttribute('id', 'logged-in-cont');

  let welcomeMessage = document.createElement('h6');
  welcomeMessage.textContent = 'Welcome, ' + username + '!';

  let logoutButton = document.createElement('button');
  logoutButton.setAttribute('class', 'logout-button');
  logoutButton.textContent = 'logout';
  logoutButton.onclick = logout;

  loggedInCont.appendChild(welcomeMessage);
  loggedInCont.appendChild(logoutButton);

  document.getElementsByTagName('body')[0].appendChild(loggedInCont);
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Handle request
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/api/login', true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({username: username, password: password}));


  xhr.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      // Store data
      chrome.storage.sync.set({username: username, token: this.response.token});

      // Remove html elements
      let form = document.getElementsByTagName('form')[0];
      let body = document.getElementsByTagName('body')[0];
      body.removeChild(form);

      displayLoggedIn(username);
    }
  }
}

function logout() {
  // Remove data from storage
  chrome.storage.sync.set({username: null, token: null});

  let cont = document.getElementById('logged-in-cont');
  let body = document.getElementsByTagName('body')[0];
  body.removeChild(cont);

  displayLoggedOut();
}
