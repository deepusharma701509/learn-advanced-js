// console.log("Hello Web");
// 

// let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23);

// console.log(myCreatedDate.toDateString());

// let myTimeStamp=new Date();
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp.getTime()/1000));


// let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());

// console.log(newDate.toLocaleString("default",{
//     weekday:"long",
//     month:"2-digit"
// }));


// const  tinderUser=new Object();  its a singleton object

// const tinderUser={} // its not a singleton object

const tinderUser={};
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"sdfhsdfkjsd@dhasd./djo",
    fullname:{
        userFullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname)

let userDetails=regularUser.fullname.userFullname;

// let userName=userDetails.firstname
// console.log("Hello myself",userName);

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2};
// console.log(obj3);

const users=[{
    id:1,
    email:"gds@cgsg.com"
},
{
    id:3,
    email:"gds@cgsasdasffsafg.com"
},{
    id:3,
    email:"gds@cgsfsafsg.com"
}]


// console.log(users[0].email);

users.map((index)=>{
return index.email;
})

// console.log("Hello",users);
// console.log(tinderUser);




// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course={
    couseName:"JsHindi",
    price:"999",
    courseInstructor:"hitesh"
}


// console.log(course.courseInstructor);

const {courseInstructor:instructor}=course;
 
console.log(instructor);

// {
//     "name":"Hitesh",
// "course":"JsHindi",
// "price":"free"

// }





