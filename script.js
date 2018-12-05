const api = 'https://192.168.1.115:3000';
let entries = document.getElementsByClassName("concept_light-readings");

// Add css file
var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", chrome.runtime.getURL("style.css"));
document.getElementsByTagName("head")[0].appendChild(fileref);

let btn = document.createElement("BUTTON");
let text = document.createTextNode("+");
btn.appendChild(text);

for (let i = 0; i < entries.length; i++) {
  // If is main entry
  if(entries[i].children[0]) {
    let content = entries[i].children[0].children[1].textContent;
    let btn = document.createElement("BUTTON");

    btn.classList.add("tracker-btn");
    // Style
    // btn.style.backgroundColor = "rgb(249, 209, 147)";
    // btn.style.borderRadius = "3px";
    // btn.style.width = "90px";

    btn.addEventListener("click", onClick.bind(null, content));
    let text = document.createTextNode("+");
    btn.appendChild(text);
    entries[i].appendChild(btn);
  }
}

function onClick(content) {
  chrome.storage.sync.get(['token'], function(data) {
    if(!data.token) {
      alert('Login to use increment feature');
    } else {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', `${api}/api/word`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('x-access-token', data.token);
      xhr.send(JSON.stringify({word: content.trim()}));

      xhr.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        }
      }
    }
  });
}
