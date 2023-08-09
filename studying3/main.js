// var userName = "Ahmed" 
// var age = 22
// var output = `my name is ${userName} and my age is ${age}`
// console.log(output);


// funtion scope : var, let 
// local scope : let
// reassign : var, let
// redeclare : var
// Hoisting : var


// console.log(x)
// let x = 5


/* Arrow Function*/


// function getName(name){
//     console.log(name);
// }
// console.log(getName("name"));


// const getName = x =>console.log(x);
// getName("waleed")

// const evenNo = x =>{
//     for(i = 0; i<x; i++){
//         if(i % 2 == 0){
//             console.log(`${i} Even`)
//         }
//         else{
//             console.log(`${i} Odd`);
//         }
//     }
// }

// evenNo(10)


// const number1 = [1,2,3,4,5]
// const number2 = [...number1] //=> Spread Operator

// number2.push(15)
// console.log(number1);
// console.log(number2);




/* Array Destruction */

// const names = ["Ali", "Ahmed", "Mohammed", "khalid", "Yahya"];

// const [name1,name2,name3] = names;

// const [n1,n2,...n3] = names; //=> to give the n3 all the other indexes

// const [q1, ,q3,...qall] = names; //=> to assin the index 2 with out the inde x

// console.log(name3);

// console.log(n3);



// const user = {
//     userName: "Ahmed",
//     age: 30,
//     Address: ''
// }

// const {userName, age , Address}= user

// console.log(userName)
// console.log(age)
// console.log(Address)


// const user = [
//     {
//         userName: "Ahmed",
//         age: 50,
//         Mobile: ["010155124845", "02501564512"]
//     }
// ]

// const [{Mobile}] = user;
// const [df, po] = Mobile;
// console.log(po) => Another way

// const [Mob] = user
// const { q , Mobile} = Mob
// const [m, gg] = Mobile
// console.log(gg);

// const names = ["Alwaleed","Ahmed","Yahya","You"]

// names.forEach(el=> console.log(el));


// for(let i = 0;  i< numbers.length; i++)
// {
    //     console.log(numbers[i]);
    // }
    
    
    
    // const user = [{
    
    //     userName: "Ahmed",
    //     Age : 20,
    //     Mobile: "1"
    // },{
    //     userName: "Ahmed",
    //     Age : 20,
    //     Mobile: "2"
    // },{
    //     userName: "Ahmed",
    //     Age : 20,
    //     Mobile: "3"
    // },]


// const x = [1,2,3,4,5,6,7,8,9,10]
    // user.map((ele)=>{
    //     console.log(ele);
    // })

// const newX = x.map((ele)=> ele > 5)
// console.log(newX);

// const newX = x.filter((ele)=> ele > 5)
// console.log(newX);



// const MinMax = (n1,n2,n3)=>
// {
//     if (n1 > n2 && n1 > n3)
//     {
//         if (n2 > n3)
//         {
//             console.log(n1 +" "+ n3  )
//         }
//         else
//         {
//             console.log(n1 + " " + n2  )
//         }
//     }
//     else if (n2 > n1 && n2 > n3)
//     {
//         if (n1 > n3)
//         {
//             console.log(n2 + " " + n3  )
//         }
//         else
//         {
//             console.log(n2 + " " + n1  )
//         }
//     }
//     else
//     {
//         if (n1 > n2)
//         {
//             console.log(n3 + " " + n2  )
//         }
//         else
//         {
//             console.log(n3 + " " + n1  )
//         }
//     }
// }


// MinMax(202,201,203); 


// console.log(Math.max(1,2,3));
// console.log(Math.min(1,2,3));



// const stdCalc = (m1,m2,m3,m4,m5)=>{
//     const total = m1+m2+m3+m4+m5;
//     console.log(`Total Marks is ${total}`);
//     const ave = total / 5; 
//     console.log(`Average is ${ave}`);
//     const percent = total * 0.8 
//     console.log(`Percentage is ${percent}`);


// }

// stdCalc(95,76,58,90,89);



// const Month = (no)=>{
//     switch(no){
//         case 1:
//         console.log("31");
//         break;

//         case 2:
//         console.log("28");
//         break;

//         case 3:
//             console.log("31");
//         break;

//         case 4:
//             console.log("30");
//         break;

//         case 5:
//             console.log("31");
//         break;

//         case 6:
//             console.log("30");
//         break;

//         case 7:
//             console.log("31");
//         break;

//         case 8:
//             console.log("31");
//         break;

//         case 9:
//             console.log("30");
//         break;

//         case 10:
//             console.log("31");
//         break;

//         case 11:
//             console.log("30");
//         break;

//         case 12:
//             console.log("31");
//         break;

//         default:
//             console.log("Wrong Input")
//     }
    
// }

// Month(0)
