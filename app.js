var totalAmtRef = document.querySelector("#total-amt");

var btnDecBagRef = document.querySelector("#btnDecBag");
var btnIncBagRef = document.querySelector("#btnIncBag");
var bagQuantityRef = document.querySelector("#bagQuantity");

btnIncBagRef.addEventListener("click",incrementBagQuantity);

btnDecBagRef.addEventListener("click",decrementBagQuantity);

var btnDecShoesRef = document.querySelector("#btnDecShoes");
var btnIncShoesRef = document.querySelector("#btnIncShoes");
var shoesQuantityRef = document.querySelector("#shoesQuantity");

btnIncShoesRef.addEventListener("click",incrementShoesQuantity);

// btnDecShoesRef.addEventListener("click",decrementShoesQuantity);


function incrementBagQuantity(){
    var currentBagQuantity=document.getElementById('bagQuantity').innerText;
    //console.log(currentBagQuantity);
    var finalBagQuantity=Number(currentBagQuantity)+1;
    bagQuantityRef.innerHTML=Number(finalBagQuantity);
    var currentShoesQuantity=document.getElementById('shoesQuantity').innerText;
    updateTotalPrice(currentShoesQuantity,finalBagQuantity);

}


function incrementShoesQuantity(){
    var currentShoesQuantity=document.getElementById('shoesQuantity').innerText;
    // console.log(currentShoesQuantity);
    var finalShoesQuantity=Number(currentShoesQuantity)+1;
    shoesQuantityRef.innerHTML=Number(finalShoesQuantity);
    var currentBagQuantity=document.getElementById('bagQuantity').innerText;
    updateTotalPrice(finalShoesQuantity,currentBagQuantity);
}


function decrementBagQuantity(){
    var currentBagQuantity=document.getElementById('bagQuantity').innerText;
    var finalBagQuantity = Number(currentBagQuantity)-1;
    if(finalBagQuantity<0){
        finalBagQuantity=0;
    }
    bagQuantityRef.innerHTML=Number(finalBagQuantity);
    var currentShoesQuantity=document.getElementById('shoesQuantity').innerText;
    updateTotalPrice(currentShoesQuantity,finalBagQuantity);
}


function updateTotalPrice(quantityOfShoes,quantityOfBags){
    var totalAmount = 19+54.99*Number(quantityOfBags)+74.99*Number(quantityOfShoes);
   totalAmtRef.innerHTML=totalAmount.toFixed(2);
}