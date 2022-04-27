let input = document.querySelector("input");
let add_btn = document.querySelector(".button1");
let clear_btn = document.querySelector(".button2");

add_btn.addEventListener("click", add);

clear_btn.addEventListener("click", clear);

function add() {
  let re_input,
    f = "false";
  let div = document.createElement("div");
  let p = document.createElement("p");
  let done = document.createElement("button");
  let rename = document.createElement("button");
  let remove = document.createElement("button");
  div.setAttribute("class", "items");
  let div2 = document.createElement("div");
  done.setAttribute("class", "bun");
  rename.setAttribute("class", "bun");
  remove.setAttribute("class", "bun");
  done.innerHTML = '<span class="fa-solid fa-check"></span>';
  rename.innerHTML = '<span class="fa-solid fa-notes-medical"></span>';
  remove.innerHTML = '<span class="fa-solid fa-xmark"></span>';
  if (input.value === "") {
    // var w = window.open("", "", "width=100", "height=100");
    // w.document.write("please,enter the something");
    // w.focus();
    // setTimeout(function () {
    //   w.close();
    // }, 5000);
    alert("please,enter some value!!");
  } else {
    p.innerHTML = input.value;
    div.appendChild(p);
    div2.appendChild(done);
    div2.appendChild(remove);
    // rename.insertAdjacentElement("beforebegin", remove);
    div2.appendChild(rename);
    div.appendChild(div2);
    clear_btn.insertAdjacentElement("beforebegin", div);

    done.addEventListener("click", complete);
    function complete() {
      if (f == "false") {
        div2.remove();
        div.style.borderColor = "grey";
        p.setAttribute("class", "remove");
      } else {
        if (re_input.value != "") {
          p.innerHTML = re_input.value;
          //   rename.insertAdjacentElement("beforebegin", remove);
          div2.appendChild(rename);
          f = "false";
        } else {
          alert("please,enter something.");
        }
      }
    }

    remove.addEventListener("click", del);
    function del() {
      if (f == "false") {
        div.remove();
      } else {
        p.innerHTML = input.value;
        div2.appendChild(rename);
        f = "false";
      }
    }

    rename.addEventListener("click", rn);
    function rn() {
      rename.remove();
      p.innerHTML = '<input type=text class="rename"/>';
      re_input = document.querySelector(".rename");

      f = "true";
    }
  }

  clear_btn.addEventListener("click", function () {
    div.remove();
  });
}
