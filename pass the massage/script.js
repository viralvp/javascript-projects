var input = document.querySelector("[type=text]");
var btn = document.querySelector("[type=submit]");
var h4 = document.querySelector("h4");

btn.addEventListener("click", take);

function take() {
  var x = input.value;
  if (x === "") {
    setTimeout(time, 1000);
    function time() {
      alert("enter something, dude!!");
    }
  } else {
    h4.innerText = x;
  }
}
