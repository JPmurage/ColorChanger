(function (){

console.log("Hello world")

})();

(function (num1,num2){


product=num1*num2

console.log(`The product is,${product}`)


})(15,40)

console.log("........................")



function randomNumber(){

let num=Math.floor(Math.random()*255)+1;

console.log(num)

}


randomNumber()


function randomcolor(){

let r=Math.floor(Math.random()*255)+1;
let g=Math.floor(Math.random()*255)+1;
let b=Math.floor(Math.random()*255)+1;  

console.log(`rgb(${r},${g},${b})`)

}

randomcolor()
function randomColor(){

let r=Math.floor(Math.random()*256);
let g=Math.floor(Math.random()*256);
let b=Math.floor(Math.random()*256);  

document.body.style.backgroundColor=`rgb(${r},${g},${b})`;

}