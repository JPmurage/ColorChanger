let age =23
console.log("age");


if(age<18){

    console.log("You are being looked for by God")



}


function title(){


console.log("The name is Collins")


}

title()


let  fruits=["Mangoes","Guavaas","Pineapples","Apples"];

// To use splice in a code 

fruits.splice(2,0,"Kiwi","Watermelon");

console.log(fruits)







const arr= [1, 2, 3];
const newArr = [...arr.slice(0, 1), 99, ...arr.slice(2)];
console.log(newArr); // [1, 99, 3]

