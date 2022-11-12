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

const productsEl = document.querySelector('.products');



products.forEach((product) =>{
    const productEl = document.createElement('div');
    productEl.classList.add('product');
    productEl.innerHTML = `<p class='title'>${product.name}</p>
    <div>Price =  <span class='price'>${product.price}</span></div>
    <button class='incBtn btn'>+</button>
    <button class='decBtn btn'>-</button>`
    productsEl.appendChild(productEl);
})
let incCount = 0;

const cartItems = products.map(product => {
    product.count = 0;
    return product;
})

productsEl.addEventListener('click', function(e) {
    let target = e.target.closest('.btn'); 
    // console.log(target);
    if(!target) return;
    const  product =  target.parentNode.children[0].innerText;
        
    if(target.classList.contains('incBtn')) {
       
        // update cartitems list
        cartItems.forEach(item=>{
            if(item.name === product) {
                item.count++;
                return;
            }
        })
        console.log(cartItems);
        updateCart(cartItems)
    } 
    if(target.classList.contains('decBtn')) {
          // update cartitems list
        cartItems.forEach(item=>{
            if(item.name === product) {
                item.count--;
                return;
            }
        })
        
        updateCart(cartItems)
    }
})

const showCartEl = document.querySelector('.showCart');


function updateCart(items){
    const showItems = items.filter(item=>item.count>0);
    console.log(showItems);
    showCartEl.innerHTML = '';
    showItems.forEach(item => {
        const html = `<div>
        ${item.name} * <span>${item.count}</span></div>`
        // showCartEl.insertAdjacentHTML('beforeend', html);
        showCartEl.innerHTML += html;
        
    })
   


}
