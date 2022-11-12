const saveBtn = document.querySelector('.saveBtn');
const showBtn = document.querySelector('.showBtn');
const inputURLEl = document.querySelector('#input');
const resultsEl = document.querySelector('.results');

saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);
let i = 0;
function saveData(){
    localStorage.setItem(i++, inputURLEl.value);
    resultsEl.innerHTML = '';
    inputURL.value = '';
}

function showData(){
    for(let i=0;i<Object.keys(localStorage).length;i++){
        let url = localStorage.getItem(localStorage.key(i));
        const resultEl = `<div>${url}</div>`;
        resultsEl.innerHTML += resultEl;
    }

}

