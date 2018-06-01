let entries = document.getElementsByClassName("concept_light-readings");

let lol = document.createTextNode("Greetings from Apple World!");

for (let i = 0; i < entries.length; i++) {
  entries[i].appendChild(lol);
}
