// scopes
let a =100;
var c=300;
{
    
let a=10;

const b=20;

var  c=30;
// console.log(a);
    
    // it is called a scope
}

// console.log(a);
// // console.log(b);
// console.log(c);



// function one(){

//     const userName="Hitesh";

//     function two(){
//         const website= "Youtube";
//         console.log(userName);
        
//     }
//     console.log(website);

//     two()
    
// }
// one()

// Arrow function 

// this keyword:it represnt the current context

// const user={

//     username:"Hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username} ,welcome to webiste`);
//         console.log(this);
        
        
//     }
// }
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     const name="Hitesh"
//     console.log(`this.name`);
    
// }
// chai()

//  function user(){

//  }
//  user()

//  let user=function(){
// const name="Hitesh"
//     console.log(this);
    

//  }
//  user()
//  const user=()=>{
//     const name="hitesh"
//     console.log(this);
    

//  }
//  user();


// Falsy value//

// false,0,"",-0,BigInt 0n,null,undefined,NaN


// Truthy value//

// [],"0","false"," ",{},function(){}Empty function

const  emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log(emptyObj)
}

const coding=["javascript","js","ruby","c++","swift"]
// coding.forEach(printMe)

// function printMe(item){
// console.log(item)
// }

// coding.forEach((item,index,array)=>{
// console.log(item,index,array);

// })

// const myCoding=[
//     {language:"javascript"}
// ]

const values=coding.forEach((item)=>{
    console.log(item);
    return item;
    
})
console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNums.filter((num)=>{
//     return num>4
// });
// console.log(newNums);

const newNums=[]

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);


