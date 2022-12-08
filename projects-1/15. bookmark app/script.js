const saveBtn = document.querySelector(".saveBtn");
const showBtn = document.querySelector(".showBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const inputURLEl = document.querySelector("#input");
const resultsEl = document.querySelector(".results");

saveBtn.addEventListener("click", saveData);
showBtn.addEventListener("click", showData);

let i = 0;
function saveData() {
  localStorage.setItem(i++, inputURLEl.value);
  resultsEl.innerHTML = "";
  inputURLEl.value = "";
}

function showData() {
  for (let i = 0; i < Object.keys(localStorage).length; i++) {
    let url = localStorage.getItem(localStorage.key(i));
    const resultEl = `<div><span>${url}</span>
    <button class="deleteBtn">Delete bookmark</button></div>`;
    resultsEl.innerHTML += resultEl;
  }

  deleteBtn.addEventListener("click", deleteData);
function deleteData(){
    localStorage.removeItem(key);
}
}

