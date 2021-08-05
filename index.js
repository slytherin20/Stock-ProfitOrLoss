const purchasePrice = document.querySelector(".purchase");
const quantity = document.querySelector(".unit");
const todayPrice = document.querySelector(".cost-price");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const desciptionBox= document.querySelector(".description");
const imageBox = document.querySelector(".image-box");
const img = document.querySelector(".img");
const inputField = document.querySelectorAll("input");
const container = document.querySelector(".container");
const body = document.querySelector("body");

button.addEventListener("click",profitOrLoss);

//Calculate Profit or Loss.
function profitOrLoss(e){
e.preventDefault()
let costPrice = Number(purchasePrice.value).toFixed(2);
let qty = Number(quantity.value).toFixed(2);
let sellingPrice = Number(todayPrice.value).toFixed(2);
if(costPrice>0 && sellingPrice>0){
    let difference = sellingPrice - costPrice;
    let pOrL = (difference*qty).toFixed(2);
    if(pOrL<0){
        loss(pOrL,difference,costPrice);
    }
    else{
        profit(pOrL,difference,costPrice);
    }
}
else{
    result.innerText = "Please enter a valid number."
}

}

function profit(profitValue,diff,CP){
    let profitPercentage = diff*100/CP;
    changeHappyTheme();
    profitPercentage = profitPercentage.toFixed(2);
    result.innerText= `Your total profit is ₹${profitValue} which is ${profitPercentage}%`;
}
function loss(lossValue,diff,CP){
    diff = Math.abs(diff);
    let lossPercentage = diff*100/CP;
    if(lossPercentage>50){
        superSadTheme()
    }
    else{
        sadTheme()
    }
    lossValue = Math.abs(lossValue);
    lossPercentage = lossPercentage.toFixed(2);
    result.innerText= `Your total loss is ₹${lossValue} which is ${lossPercentage}%`;
}

//Change theme
function changeHappyTheme(){
    desciptionBox.style.backgroundColor = "green";
    button.style.backgroundColor = "green";
    result.style.color="green";
    inputField[0].style.borderBottom = "solid 2px green";
    inputField[1].style.borderBottom = "solid 2px green";
    inputField[2].style.borderBottom = "solid 2px green";
    body.style.backgroundColor = "white";
    container.style.boxShadow = "5px 5px 10px 5px gainsboro";
    
    img.removeAttribute("src");
    img.setAttribute("src","https://media.giphy.com/media/5fBH6zoAQg9dHK2ttsc/giphy.gif")
    
}

function sadTheme(){
    desciptionBox.style.backgroundColor = "brown";
    button.style.backgroundColor = "brown";
    result.style.color="brown";
    inputField[0].style.borderBottom = "solid 2px brown";
    inputField[1].style.borderBottom = "solid 2px brown";
    inputField[2].style.borderBottom = "solid 2px brown";
    body.style.backgroundColor = "white";
    container.style.boxShadow = "5px 5px 10px 5px gainsboro";
    
    img.removeAttribute("src");
    img.setAttribute("src","https://media.giphy.com/media/3orifdO6eKr9YBdOBq/giphy.gif")
    
}

function superSadTheme(){
    desciptionBox.style.backgroundColor = "#1f2021";
    button.style.backgroundColor = "#1f2021";
    result.style.color="#1f2021";
    inputField[0].style.borderBottom = "solid 2px black";
    inputField[1].style.borderBottom = "solid 2px black";
    inputField[2].style.borderBottom = "solid 2px black";
    body.style.backgroundColor = "black";
    container.style.boxShadow = "none";
    
    img.removeAttribute("src");
    img.setAttribute("src","https://media.giphy.com/media/ujZtlj1Y7wXyE/giphy.gif")
    
}
