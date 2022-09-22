let toDo = [];
const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("add-btn");
const ulEl = document.getElementById("div-el");
const checkBtn = document.getElementById("check-btn");
const crossBtn = document.getElementById("cross-btn");

checkBtn.onclick = () => {
  alert("hello!");
};

function render(chores) {
  let listItems = "";
  for (let i = 0; i < chores.length; i++) {
    listItems += `
        <div class="list-item-column">
            <li class="item-name">${chores[i]}</li>
          <div>
            <img id="check-btn" class="icon" src="check.png" alt="">
            <img id="cross-btn" class="icon" src="cross.png" alt="">
          </div>
        </div>
    `;
  }
  ulEl.innerHTML = listItems;
}

addBtn.addEventListener("click", function () {
  toDo.push(inputEl.value);
  inputEl.value = "";
  render(toDo);
  console.log(toDo);
});
