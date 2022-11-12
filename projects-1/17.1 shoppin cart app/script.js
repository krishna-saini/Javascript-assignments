const mainEl = document.querySelector('.main');
const headerEl = document.querySelector('.header')

const products = [
    {
        name:'Coffee',
        price: 10
    },
    {
        name:'Sushi',
        price: 10
    },
    {
        name:'Juice',
        price: 10
    },
    {
        name:'Tea',
        price: 10
    },

]

products.forEach(product => {
    const html = `<div class='product'>
        <p>${product.name}</p>
        <p>price = <span>${product.price}</span></p>
        <button class='incBtn'>+</button> 
        <button class='decBtn'>-</button>    
    </div>`
    mainEl.innerHTML += html;
    
})

// event delegation
// parent = mainEl\
mainEl.addEventListener('click', (event)=>{
    console.log(event.target.className); // which is clicekd
    const target = event.target;

})



function updateCart(item){
    headerEl.innerHTML = '';
    const html = `
        <div>
            ${item.name} * <span> ${item.count}</span>
    </div>`
    headerEl.innerHTML += html;


}