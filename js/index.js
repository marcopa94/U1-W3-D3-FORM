const inputbtn = document.getElementById("inputbtn");

const newbtn = document.getElementById("btn");
newbtn.onclick = function () {
  const lista = document.getElementById("elenco");
  const li = document.createElement("li");
  li.innerText = inputbtn.value;
  console.log(li);
  lista.appendChild(li);
};

const pulisci = document.getElementById("clearbtn");
pulisci.onclick = function () {
  pulisci.removeEventListener("li");
};
