var body = document.querySelector("body");
var btn = document.querySelector("button");

function rand_num() {
  var str = "0123456789ABCDEF";
  return str[Math.floor(Math.random() * str.length)];
}

function hex_num() {
  var hex_str = "";
  for (let i = 0; i < 6; i++) {
    hex_str += rand_num();
  }
  return "#" + hex_str;
}
var h1 = document.createElement("h1");
var textH1 = document.createTextNode("HEX value:");

h1.appendChild(textH1);
body.insertBefore(h1, btn);

h1.style.textAlign = "center";
var texth12 = document.createTextNode("0");
h1.appendChild(texth12);

function change() {
  var clr = hex_num();
  texth12.textContent = clr;
  body.style.background = clr;
}

btn.addEventListener("click", change);
