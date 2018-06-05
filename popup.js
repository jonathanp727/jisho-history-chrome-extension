chrome.storage.sync.get(['username'], function(data) {
  // display login form
  if(!data.username) {
    let form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'onSubmit');

    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'username');

    let passInput = document.createElement('input');
    passInput.setAttribute('type', 'text');
    passInput.setAttribute('name', 'password');

    let submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('name', 'submit');

    form.appendChild(nameInput);
    form.appendChild(passInput);
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