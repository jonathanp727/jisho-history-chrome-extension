chrome.storage.sync.get(['username'], function(data) {
  // display login form
  if(!data.username) {
    let form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'onSubmit');

    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'username');
    nameInput.setAttribute('class', 'text');
    nameInput.setAttribute('tabIndex', 1);
    //nameInput.setAttribute('value', 'username');

    let passInput = document.createElement('input');
    passInput.setAttribute('type', 'text');
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

    form.appendChild(nameInput);
    form.appendChild(passInput);
    form.appendChild(registerLink);
    form.appendChild(submitButton);

    document.getElementsByTagName('body')[0].appendChild(form);

  // display logout button
  } else {
    let logoutButton = document.createElement('button');
    logoutButton.onClick = func;
    document.getElementsByTagName('body')[0].appendChild(logoutButton);
  }
});

function func() {
  console.log('hi');
}
