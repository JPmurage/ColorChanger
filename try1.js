function randomCOl(){

let r= Math.round(Math.random()*256);
let g=Math.round(Math.random()*256);
let b=Math.round(Math.random()*256);

document.body.style.backgroundColor=` rgb(${r},${g},${b})`

}