const containerEl = document.querySelector('.container')
const url = 'https://api.quotable.io/random'
const quoteEl = document.querySelector('.quote');
const authorEl = document.querySelector('.author');

document.querySelector('.btn').addEventListener('click', quoteGenFn);
window.addEventListener('load', quoteGenFn)

// async function quoteGenFn(){
//   fetch(url).then(data => data.json()).then(item => {
//     quoteEl.innerText  = item.content;
//     authorEl.innerText = item.author
//   })
// }

async function quoteGenFn(){
    const data = await fetch(url);
   console.log(data);
    const response = await data.json();
    console.log(response.content);
    quoteEl.innerText  = response.content;
    authorEl.innerText = response.author
}