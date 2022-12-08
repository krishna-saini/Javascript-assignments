const containerEl = document.querySelector('.container');
const inputTextEl = document.querySelector('.input');
const addBtnEl = document.querySelector('.addButton');

// creating nodes for new tasks
const outputDivEl = document.createElement('div');
outputDivEl.classList.add('item');

inputTextEl.addEventListener('focus', ()=>inputTextEl.setAttribute('placeholder', ''))
inputTextEl.addEventListener('blur', ()=>inputTextEl.setAttribute('placeholder', 'Add your note...'))



addBtnEl.addEventListener('click', ()=>{ 
    // edge case
    if(!inputTextEl.value) {
        inputTextEl.setAttribute('placeholder', 'please write a note...');
        return;
    }
    containerEl.innerHTML += `
        <div class='item'>
            <input class='item_input' value=${inputTextEl.value} disabled>
            <button class='editButton'>EDIT</button>
            <button class='deleteButton'>DELETE</button>
        </div> `     
    inputTextEl.value = '';

    // task edit functionality
    let tasks = document.querySelectorAll('.item');
    for(let i=0;i<tasks.length;i++){
        tasks[i].addEventListener('click',function(event){
            // do not write arrow function in such cases
          console.log(event.target.tagName);
            const editBtnEl = document.querySelector('.editButton');
            console.log(event.target.closest('item'));
            if(event.target.closest('') === 'BUTTON') {
                const taskText = document.querySelector('')
            }
            Eg
            table.onclick = function(event) {
                let td = event.target.closest('td'); // (1)
              
                if (!td) return; // (2)
              
                if (!table.contains(td)) return; // (3)
              
                highlight(td); // (4)
              };
           

        } )
    }
})





