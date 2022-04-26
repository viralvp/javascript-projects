var btn = document.querySelector("button");
var body = document.querySelector("body");

btn.addEventListener("click", change);

const color = ["red", "orange", "blue"];
function change() {
  //   var bd = document.querySelector("body")[0];
  body.style.background = color[Math.floor(Math.random() * 3)];
}
