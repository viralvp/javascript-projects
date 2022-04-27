let inputs = document.querySelectorAll("input");
let bill = inputs[0];
let people = inputs[1];
let service = document.querySelector("select");

let btn = document.querySelector("button");

btn.addEventListener("click", show);

function show() {
  let f = "true";
  let h1 = document.querySelector("h1");
  let div = document.createElement("div");
  div.setAttribute("class", "warning");
  if (bill.value == "") {
    let p1 = document.createElement("p");
    p1.innerHTML = "Bill Amount Cannot Be Blank";
    div.appendChild(p1);
    f = "false";
  }
  if (people.value == "") {
    let p2 = document.createElement("p");
    p2.innerHTML = "Number Of Users Must Be Greater Than Zero";
    div.appendChild(p2);
    f = "false";
  }
  if (service.value == "choose") {
    let p3 = document.createElement("p");
    p3.innerHTML = "You Must Select A Service";
    div.appendChild(p3);
    f = "false";
  }
  h1.insertAdjacentElement("afterend", div);

  if (f === "true") {
    cal();
  }
}

function cal() {
  let div = document.createElement("div");
  div.setAttribute("class", "center");
  let tip, total, owe;
  tip = (bill.value * service.value) / 100;
  total = tip + parseInt(bill.value);

  owe = total / parseInt(people.value);
  let h21 = document.createElement("h2");
  h21.innerHTML = "tip amount $" + tip;
  div.appendChild(h21);
  let h22 = document.createElement("h2");
  h22.innerHTML = "total amount $" + total;
  div.appendChild(h22);
  let h23 = document.createElement("h2");
  h23.innerHTML = "Each people owes $" + owe;
  div.appendChild(h23);

  btn.insertAdjacentElement("beforebegin", div);
}
