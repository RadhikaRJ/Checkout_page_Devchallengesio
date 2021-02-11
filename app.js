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

btnDecShoesRef.addEventListener("click",decrementShoesQuantity);


var btnContinueRef = document.querySelector(".btn-continue");
btnContinueRef.addEventListener("click",verifyInput);


function verifyInput(){
    var email=document.getElementById('email').value.toString();
    // console.log(email);
    var phone=document.getElementById('tel').value.toString();
    // console.log(phone);
    var name=document.getElementById('name').value.toString();
    // console.log(name);
    var address= document.getElementById('address').value.toString();
    // console.log(address);
    var city=document.getElementById('city').value.toString();
    // console.log(city);
    var postalCode=document.getElementById('postalCode').value.toString();
    // console.log(postalCode);
    var country=document.getElementById('country').value.toString();
    // console.log(country);

    if(email==""||phone==""|name==""|address==""|city==""|postalCode==""|country==""){
        alert("The fields are either invalid or empty!\nCheck details & enter again!");
    }
    else{
        alert("Details Submitted Successfully!");
    }
}





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


function decrementShoesQuantity(){
    var currentShoesQuantity=document.getElementById('shoesQuantity').innerText;
    var finalShoesQuantity=Number(currentShoesQuantity)-1;
    if(finalShoesQuantity<0){
        finalShoesQuantity=0;
    }
    shoesQuantityRef.innerHTML=Number(finalShoesQuantity);
    var currentBagQuantity=document.getElementById('bagQuantity').innerText;
    updateTotalPrice(finalShoesQuantity,currentBagQuantity);
}

function updateTotalPrice(quantityOfShoes,quantityOfBags){    
    var totalAmount = 19+54.99*Number(quantityOfBags)+74.99*Number(quantityOfShoes);
    if(quantityOfShoes==0 && quantityOfBags==0){
        totalAmount=0;
        totalAmtRef.innerHTML=totalAmount.toFixed(2);
    }
    else{
        totalAmtRef.innerHTML=totalAmount.toFixed(2);
    }
   
}