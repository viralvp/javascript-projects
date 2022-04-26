var qoutes = {
  text: [
    "We grow fearless when we do the things we fear",
    "And, when you want something, all the universe conspires in helping you to achieve it.",
    "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
    "You can't be great if you don't feel great. Make exceptional health your number one priority.",
  ],
  auther: [
    "-Robin Sharma",
    "-Paulo Coelho",
    "-Mark Twain",
    "-Paulo Coelho",
    "-Walt Disney",
    "-anonumus",
  ],
};

// selectors
var btn = document.querySelector("button");
var body = document.querySelector("body");
var div = document.querySelector("div");
var p = document.querySelector("p");

// create
// var span = document.createElement("span");
var quote = document.createTextNode(qoutes["text"][0]);
var div2 = document.createElement("div");
var auth = document.createTextNode(qoutes["auther"][0]);

div2.classList.add("inner");
// append

p.appendChild(quote);
div2.appendChild(auth);
// div.appendChild(span);
div.appendChild(div2);

function change() {
  var ran_num = Math.floor(Math.random() * qoutes["auther"].length);
  quote.textContent = qoutes["text"][ran_num];
  auth.textContent = qoutes["auther"][ran_num];
}

btn.addEventListener("click", change);
