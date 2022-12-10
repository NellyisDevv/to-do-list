let toDo = [];
const inputEl = document.getElementById("input-el");
const inputSearch = document.getElementById("input-search");
const addBtn = document.getElementById("add-btn");
const ulEl = document.getElementById("div-el");
const checkBtn = document.getElementById("check-btn");
const crossBtn = document.getElementById("cross-btn");
let toDoFromLocalStorage = JSON.parse(localStorage.getItem("toDo"));

if (toDoFromLocalStorage) {
  toDo = toDoFromLocalStorage;
  render(toDo);
}

addBtn.addEventListener("click", function () {
  toDo.push(inputEl.value);
  localStorage.setItem("toDo", JSON.stringify(toDo));
  inputEl.value = "";
  render(toDo);
});

function render(chores) {
  let listItems = "";
  for (let i = 0; i < chores.length; i++) {
    listItems += `
        <div class="list-item-column">
            <li class="item-name">${chores[i]}</li>
          <div>
            <img onclick="crossOutItem()" id="check-btn" class="icon" src="check.png" alt="">
            <img onclick="deleteItem()" id="cross-btn" class="icon" src="cross.png" alt="">
          </div>
        </div>
    `;
  }
  ulEl.innerHTML = listItems;
}

function deleteItem() {
  document.getElementById("chores").style.display = "none";
}
