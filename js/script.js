// Step no 1 : use document.querySelectorAll============>
    const  productImageBase = "../images/" ;
const ringButtons = document.querySelectorAll(".ring-button");
for(let ringButton of ringButtons){
    ringButton.addEventListener('click', function(event) { 
        const color = event.target.id.replace("-color", "");
        for(let ringButton of ringButtons){
            ringButton.classList.remove("border-purple-600");
        }
        event.target.classList.add("border-purple-600");

        const productImage = document.getElementById('product-image');
        productImage.src = productImageBase +  color + ".png";
    })
}

// Step no 2 : ============>
function selectWristSize(size){
    const sizes = ["S", "M", "L", "XL"];
    for(let siz of sizes){
        const button = document.getElementById("size-" + siz);
        if(size === siz){
            button.classList.add("border-purple-600");
        }else{
            button.classList.remove("border-purple-600");
        }
    }
}

// Step no 3 :==========>
const quantityElements = document.querySelectorAll(".quantity-button");
for(let quantityElement of quantityElements){
    quantityElement.addEventListener("click", function(event){
        // This is ternary oparetor:----------> If else er alternative;
        const amount = event.target.innerText === "+" ? +1 : -1;
        const quantityElement2 = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement2.innerText);
        const newQuantity = Math.max(0, currentQuantity + amount);
        quantityElement2.innerText = newQuantity;
    })
}

// Step no 4 : =======>>
let cartCount = 0;
let cartItems = [];
document.getElementById("add-to-cart").addEventListener('click', function(){
    const quantity = parseInt(document.getElementById("quantity").innerText);
    if(quantity > 0){
        document.getElementById("checkout-container").classList.remove("hidden");
        cartCount = cartCount + quantity;
        document.getElementById("cart-count").innerText = cartCount;

        const selectedColorButton = document.querySelector("button.border-purple-600.w-6");
        const colorButton = selectedColorButton.id.split("-")[0];
        const selectedButtonBox = document.querySelector("button.border-purple-600:not(.w-6)");
        const selectedSize = selectedButtonBox.innerText.split(" ")[0];
        const selectedPrice = selectedButtonBox.innerText.split(" ")[1].split("$")[1];

        cartItems.push({
            image: colorButton + ".png",
            title: "Classy Modern Smart Watch",
            color: colorButton,
            size: selectedSize,
            quantity: quantity,
            price: quantity*parseInt(selectedPrice)
        })
        console.log(colorButton);
    }else{
        alert("Please select a quantity");
    }
})

// Step no 5 : --------------->>
document.getElementById("checkout-btn").addEventListener('click', function(){
    const cartModal = document.getElementById('cart-modal');
    const cartContainer = document.getElementById("cart-items");
    for(let item of cartItems){
        const element = item;
        const row = document.createElement("tr");
        row.classList.add("border-b");
        row.innerHTML = `
        <td>
        <div class="flex items-center space-x-2 ">
        <img class="w-12 h-12 object-cover rounded-md my-2" src="${productImageBase}${element.image}" alt="" />
        <span class="font-semibold">${element.title}</span>
        </div>
        </td>
        <td class="py-2 px-5">${element.color}</td>
        <td class="py-2 px-5">${element.size}</td>
        <td class="py-2 px-10">${element.quantity}</td>
        <td class="py-2 px-5">$${element.price}</td>
        `;
        cartContainer.appendChild(row);
    }
    cartModal.classList.remove("hidden");
})

document.getElementById("continue-shopping").addEventListener('click', function(){
    document.getElementById('cart-modal').classList.add("hidden");
})
document.getElementById("checkout").addEventListener('click', function(){
    alert("Proceeding to checkout...");
})