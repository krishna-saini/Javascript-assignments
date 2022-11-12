// 23. Autocomplete Search:
//           When a user searches anything in the search bar, suggestions must be shown in the dropdown(Don't use any frameworks).

const url = `https://gist.github.com/bradtraversy/20dee7787486d10db3bd1f55fae5fdf4`;

const searchEl = document.querySelector('#input');
const outputList = document.querySelector('.output-container');

const searchState = async searchText =>{
    const res = await fetch('./data/states.json');
    const states = await res.json();
    
    // get matches to current text input
    let matches = states.filter(state=>{
        const regex = new RegExp(`^${searchText}`, 'gi')
        return state.name.match(regex) || state.abbr.match(regex);
    })
        console.log(searchText);

    // edge case for empty search bar
    if(searchText.length === 0){
        matches = [];
        outputList.innerHTML = '';
    }
    
    outputHTML(matches);
}

// show results in HTML
const outputHTML = matches => {
    if(matches.length > 0){
       const html = matches.map(match => `
            <div>
                <h4>${match.name} (${match.abbr}) <span>${match.capital}</span> </h4>
            </div>
       `).join('');
       
        outputList.innerHTML = html;
    } 
}


searchEl.addEventListener('input', ()=>searchState(searchEl.value))

