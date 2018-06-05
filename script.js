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
  console.log("request increment(" + content.trim() + ")");
}