const inputEl = document.querySelector('#inputText');
console.log(inputEl);
const resultEl = document.querySelector('.result');
inputEl.addEventListener('input', function(){
    resultEl.textContent = this.value.length;
    resultEl.style.color = 'green';
})


