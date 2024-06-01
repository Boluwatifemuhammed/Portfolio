let Arrproducts = [
    {
        id: 1,
        name: "Nature Dark",
        image: "leey.png",
        price: "1000",
        rating: 5


    },

    {
        id: 2,
        name: "Logo Dark",
        image: "BOLU LOGO2.png",
        price: "2000",
        rating: 4,

    },

    {
        id: 3,
        name: "Blingz Dark",
        image: "BLINGZZ.png",
        price: "4000",
        rating: 5


    },

    {
        id: 4,
        name: "Nature Light",
        image: "leeya.png",
        price: "4000",
        rating: 5


    },

    {
        id: 5,
        name: "Logo Light",
        image: "BOLU LOGO.png",
        price: "4000",
        rating: 5


    },

    {
        id: 6,
        name: "Blingz Light",
        image: "BLINGZ2.png",
        price: "4000",
        rating: 5


    }
];

const body = document.querySelector("body");
products = document.querySelector(".products");
shoppingBasket = document.querySelector(".shoppingbasket");
closeCart = document.querySelector(".close");
productList = document.querySelector(".productlist");
quantity = document.querySelector(".quantity")
total = document.querySelector(".total");
let checkOutList = [];
shoppingBasket.onclick = () => {
    body.classList.add("active");
}
closeCart.onclick = () => {
    body.classList.remove("active");
}
function onInit() {
    Arrproducts.forEach((item, key) => {
        let div = document.createElement("div");
        div.classList.add("item");

        let star = "";
        for (i = 0; i < item.rating; i++) {
            star += `<i class = "fas fa-star"></i>`

        }

        div.innerHTML = `<img src="${item.image}" />
        <div class= "name">${item.name}</div>
        <div>${star}</div>
        <div class= "price"> <small>₦</small> ${item.price}</div>
        <button onclick="addToCart(${key})"><i class="fas fa-cart-plus"></i>Add To Cart</button>
   
`;
        products.appendChild(div);
    });
}

onInit();

function addToCart(Id) {
    console.log(Arrproducts[Id]);
    if (checkOutList[Id] == null) {
        checkOutList[Id] = Arrproducts[Id];
        checkOutList[Id].quantity = 1;
    } else {
        checkOutList[Id].quantity += 1;
    }
    reloadCart();
}

function reloadCart() {

    productList.innerHTML = "";
    let count = 0;
    let totalPrice = 0;


    checkOutList.forEach((item, key) => {
        totalPrice += parseInt(item.price * item.quantity)
        count += item.quantity
        let li = document.createElement("li");
        li.innerHTML = ` <img src ="${item.image}">
        <div>${item.name}</div>
        <div>${item.price}</div>

        <div>
        <button onclick ="changeQuantity(${key},${item.quantity - 1})">-</button>
        <div class="count">${item.quantity}</div>
        <button onclick ="changeQuantity(${key},${item.quantity + 1})">+</button>
        </div>

        `;

        productList.appendChild(li);
    });
    total.innerHTML = `<small>Subtotal (${count} items) ₦</small>` + totalPrice;
    quantity.innerHTML = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete checkOutList[key]
    } else {
        checkOutList[key].quantity = quantity;
    }
    reloadCart();
}