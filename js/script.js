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