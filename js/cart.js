const product = [
    {
        productName: 'iPhone 13 Pro',
        img: './../assets/iphone-13-pro.jpg',
        productInfo: '128 GB',
        productPrice: 12290,
        priceCurrency: 'NOK',
        productId: '.iphone-13-pro',
        productInCart: false
    },

    {
        productName: 'iPhone 13',
        img: './../assets/iphone-13.jpg',
        productInfo: '16 GB',
        productPrice: 8490,
        priceCurrency: 'NOK',
        productId: '.iphone-13',
        productInCart: false
    },

    {
        productName: 'iPhone 12',
        img: './../assets/iphone-12.jpg',
        productInfo: '16 GB',
        productPrice: 6990,
        priceCurrency: 'NOK',
        productId: '.iphone-12',
        productInCart: false
    },

    {
        productName: 'iPhone 11',
        img: './../assets/iphone-11.jpg',
        productInfo: '16 GB',
        productPrice: 6290,
        priceCurrency: 'NOK',
        productId: '.iphone-11',
        productInCart: false
    },

    {
        productName: 'iPhone SE',
        img: './../assets/iphone-se.jpg',
        productInfo: '16 GB',
        productPrice: 4990,
        priceCurrency: 'NOK',
        productId: 'iphone-se',
        productInCart: false
    },

    {
        productName: 'iPhone X',
        img: './../assets/iphone-x.jpg',
        productInfo: '16 GB',
        productPrice: 5990,
        priceCurrency: 'NOK',
        productId: '.iphone-x',
        productInCart: false
    }
]


function addElement() {

    product.forEach(product => {
        const allProducts = document.querySelector('.shop');

        const container = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const infoContainer = document.createElement('div');
        const info = document.createElement('p');
        const price = document.createElement('p');
        const addToCart = document.createElement('button');
        const hrBreak = document.createElement('hr');


        container.className = 'container';
        image.className = 'product-image';
        name.className = 'product-name';
        infoContainer.className = 'info';
        info.className = 'product-info';
        price.className = 'product-price';
        addToCart.className = 'add-to-cart';
        container.id = product.productId

        image.src = product.img;
        name.innerText = product.productName;
        info.innerText = product.productInfo;
        price.innerText = product.productPrice;
        addToCart.innerText = 'Legg til i handlekurv';

        allProducts.appendChild(container)
        container.appendChild(image)
        container.appendChild(hrBreak)
        container.appendChild(name)
        container.appendChild(addToCart)
        container.appendChild(infoContainer)
        infoContainer.appendChild(info)
        infoContainer.appendChild(price)
    })
}

addElement();


/*let cart = {
    items: [],
    totalPrice: 0
}

function renderAllProducts() {
    const productTable = document.getElementsByClassName('container')
    productTable.innerHTML = ''
    products.forEach((product, index) => {
        productTable.innerHTML += ``
    })
}*/


let carts = document.querySelectorAll('.add-to-cart');


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', cartNumbers)
}

function cartNumbers(event) {
    console.log(event.target)
    console.log(event.target.closest("div").id)
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    localStorage.setItem('cartNumbers', 1);
}


/*const cart = []

function addToCart(products) {
    cart.products.push({ productName })
}

function removeFromCart(products) {

    cart.products.slice({})
};

function clear() {

}

function totalBasket() {

}*/