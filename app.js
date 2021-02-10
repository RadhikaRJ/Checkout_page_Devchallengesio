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

