const newlist = [];

const inputbtn = document.getElementById("inputbtn");
const newbtn = document.getElementById("btn");
newbtn.onclick = function () {
  if (inputbtn.value !== "") {
    const lista = document.getElementById("elenco");
    const li = document.createElement("li");
    li.innerText = inputbtn.value;
    inputbtn.value = "";
    const cancel = document.createElement("button");
    //cancel.classList.add(btncancel)

    cancel.onclick = function () {
      li.remove();
    };
    li.appendChild(cancel);
    console.log(li);
    lista.appendChild(li);
  }
};
