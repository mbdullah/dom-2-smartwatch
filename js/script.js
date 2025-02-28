// Step no 1 : use document.querySelectorAll============>
const ringButtons = document.querySelectorAll(".ring-button");
for(let ringButton of ringButtons){
    ringButton.addEventListener('click', function(event) { 
        const color = event.target.id.replace("-color", "");
        for(let ringButton of ringButtons){
            ringButton.classList.remove("border-purple-600");
        }
        event.target.classList.add("border-purple-600");

        const productImage = document.getElementById('product-image');
        productImage.src ="../images/" +  color + ".png";
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
        // if(event.target.innerText === "+"){
        //     return 1;
        // }else{
        //     -1;
        // }
        // This is ternary oparetor:----------> If else er alternative;
        const amount = event.target.innerText === "+" ? +1 : -1;
        const quantityElement2 = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement2.innerText);
        const newQuantity = Math.max(0, currentQuantity + amount);
        quantityElement2.innerText = newQuantity;
    })
}