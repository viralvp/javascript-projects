// variables

const btn = {
  one: document.querySelectorAll(".number")[6],
  two: document.querySelectorAll(".number")[7],
  three: document.querySelectorAll(".number")[8],
  four: document.querySelectorAll(".number")[3],
  five: document.querySelectorAll(".number")[4],
  six: document.querySelectorAll(".number")[5],
  seven: document.querySelectorAll(".number")[0],
  eight: document.querySelectorAll(".number")[1],
  nine: document.querySelectorAll(".number")[2],
  zero: document.querySelectorAll(".number")[9],
  plus: document.querySelector(".plus"),
  minus: document.querySelector(".sub"),
  divide: document.querySelector(".divide"),
  mul: document.querySelector(".mul"),
  equal: document.querySelector(".equal"),
  point: document.querySelector(".point"),
};

let input = document.querySelector("input");
// let num;
// btn["one"].addEventListener("click", fun);
// btn["two"].addEventListener("click", two);
// btn["two"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "/", "*", "=", "."];
const arr = Object.keys(btn);

function str(strg) {
  for (i = 0; i < arr.length; i++)
    if (strg === arr[i]) {
      return num[i];
    }
}

let numb,
  num1,
  num2,
  numb1,
  numb2,
  opt = "";

//   let string1;

btn["zero"].addEventListener("click", function () {
  numb = str("zero");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});
btn["one"].addEventListener("click", function () {
  numb = str("one");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});

btn["two"].addEventListener("click", function () {
  numb = str("two");

  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});
btn["three"].addEventListener("click", function () {
  numb = str("three");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});
btn["four"].addEventListener("click", function () {
  numb = str("four");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});
btn["five"].addEventListener("click", function () {
  numb = str("five");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});
btn["six"].addEventListener("click", function () {
  numb = str("six");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});
btn["seven"].addEventListener("click", function () {
  numb = str("seven");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});
btn["eight"].addEventListener("click", function () {
  numb = str("eight");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});
btn["nine"].addEventListener("click", function () {
  numb = str("nine");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});

// point

btn["point"].addEventListener("click", function () {
  numb = str("point");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
});

// operations

btn["plus"].addEventListener("click", function () {
  numb = str("plus");
  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }

  opt = "+";
});

btn["minus"].addEventListener("click", function () {
  numb = str("minus");

  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
  opt = "-";
});

btn["divide"].addEventListener("click", function () {
  numb = str("divide");

  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
  opt = "/";
});

btn["mul"].addEventListener("click", function () {
  numb = str("mul");

  if (num1 === undefined) {
    num1 = String(numb);
    input.value = num1;
  } else {
    if (opt != "=") {
      num1 = num1 + String(numb);
      input.value = num1;
    }
  }
  opt = "*";
});

btn["equal"].addEventListener("click", answer);

function answer() {
  (n1 = ""), (n2 = "");

  if (opt === "+") {
    for (let i = 0; i < num1.indexOf("+"); i++) {
      n1 += num1[i];
    }
    for (let j = num1.indexOf("+") + 1; j < num1.length; j++) {
      n2 += num1[j];
    }
    input.value = parseInt(n1) + parseInt(n2);
  } else if (opt === "-") {
    for (let i = 0; i < num1.indexOf("-"); i++) {
      n1 += num1[i];
    }
    for (let j = num1.indexOf("-") + 1; j < num1.length; j++) {
      n2 += num1[j];
    }
    input.value = parseInt(n1) - parseInt(n2);
  } else if (opt === "*") {
    for (let i = 0; i < num1.indexOf("*"); i++) {
      n1 += num1[i];
    }
    for (let j = num1.indexOf("*") + 1; j < num1.length; j++) {
      n2 += num1[j];
    }
    input.value = parseInt(n1) * parseInt(n2);
  } else if (opt === "/") {
    for (let i = 0; i < num1.indexOf("/"); i++) {
      n1 += num1[i];
    }
    for (let j = num1.indexOf("/") + 1; j < num1.length; j++) {
      n2 += num1[j];
    }
    input.value = parseInt(n1) / parseInt(n2);
  }
  num1 = "";
}
