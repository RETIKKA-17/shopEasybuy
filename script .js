
const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", function () {

    alert("Welcome to ShopEasyBuy!");

});


let cartCount = 0;


const cartCounter = document.getElementById("cartCount");


const cartButtons = document.querySelectorAll(".cartBtn");



cartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        

        cartCount++;

     

        cartCounter.innerHTML = cartCount;

        

        alert("Product Added Successfully!");

    });

});