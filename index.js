const purchasePrice = document.querySelector(".purchase");
const quantity = document.querySelector(".unit");
const todayPrice = document.querySelector(".cost-price");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
let flag = "";

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
        flag=0;
        loss(pOrL,difference,costPrice);
    }
    else{
        flag=1;
        profit(pOrL,difference,costPrice);
    }
    changeTheme();
}
else{
    result.innerText = "Please enter a valid number."
}

}

function profit(profitValue,diff,CP){
    let profitPercentage = diff*100/CP;
    profitPercentage = profitPercentage.toFixed(2);
    result.innerText= `Your total profit is ₹${profitValue} which is ${profitPercentage}%`;
}
function loss(lossValue,diff,CP){
    diff = Math.abs(diff);
    let lossPercentage = diff*100/CP;
    lossValue = Math.abs(lossValue);
    lossPercentage = lossPercentage.toFixed(2);
    result.innerText= `Your total loss is ₹${lossValue} which is ${lossPercentage}%`;
}

//Change theme
