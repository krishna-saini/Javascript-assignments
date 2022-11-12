const addNewBtn = document.querySelector('.addNewBtn');
const resultsEl = document.querySelector('.results');
const showFormBtn = document.querySelector('.showEntryForm');
const formEl = document.querySelector('.entryForm');
const nameEl = document.querySelector('#name');
const amountEl = document.querySelector('#amount');
const outputName =  document.querySelector('#outputName');
const outputAmount =  document.querySelector('#outputAmount');


// entries data
const entries = [];

// show form functionality
showFormBtn.addEventListener('click', ()=>{
    formEl.classList.remove('hidden');
    showFormBtn.classList.add('hidden');
})


addNewBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    entries.push({
        name: nameEl.value,
        amount: amountEl.value
    })

    formEl.classList.add('hidden');
    showFormBtn.classList.remove('hidden');

    // empty the text fields
    nameEl.value = '';
    amountEl.value = '';

   //show results
   showResults(entries);
    
})



// Display results functionality
function showResults(entries){
   
    const html = entries.map(entry => 
        `<div class="result">
            <input type="text" name="" id="outputName" value=${entry.name} disabled/>
            <input type="number" name="" id="outputAmount" value=${entry.amount} disabled/>
            <button class='editBtn' >Edit</button>
            <button class='deleteBtn' >Delete</button>
        </div>`
    ).join('');
    resultsEl.innerHTML = html;;
}

resultsEl.addEventListener('click', (e)=>{
    
    // Edit entry functionality
    if(e.target.className === 'editBtn'){
       outputName.setAttribute('disabled', false);
       outputAmount.setAttribute('disabled', false);
       // prevent editing once out of focus
       outputName.setAttribute('disabled', true));
       outputName.addEventListener('blur', ()=> 
         outputAmount.addEventListener('blur', ()=> outputAmount.setAttribute('disabled', true));
    }
    // Delete entry functionality
    if(e.target.className === 'deleteBtn'){
        e.target.parentNode.remove();
    }
})



