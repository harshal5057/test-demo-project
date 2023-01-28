// let a,b,c;
// a=10;
// b=20;
//
// const a=10;
// const b=20;
// const total=a+b;
// console.log("total",total)

//**string concat */
// const pi=3.14;
// a="hello";
// b="good";
// c=a+b;
// console.log("string is: ",c)

// let x="1"+2+3;
// console.log(x)

// let $=2;
// let $$=8;
// console.log("enter:",$+$$)

let $a=2;
// let _b=3;
// console.log("enter:",_a+_b)

// var w = "John Doe";

// var w;

// const a=10;
// {
//     let a=2;
// }
// console.log(a)
// let carName;
// try {
//      carName = "Saab";
//     var carName = "Volvo";
//   }
//   catch(err) {
//   console.log(carName)  
//   }

// var a;
// a=10;
// console.log(a)

// const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
// cars[1] = "Toyota";

// Add an element:
// cars.push("tata");
// console.log(typeof cars)


// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car)
// var x = 2;     // Allowed

// {
//   var x = 10;   // Allowed
// }
// console.log(x)
// let text1 = "John";
// let text2  = "Doe";
// let text3 = text1 + text2;
// console.log(text1+" "+text2+" "+text3)

//logical oprator:

// let a,b;
// a=10;b=5;
// if(a==3 || b==4)
// {
//     console.log(true)
// }
// else{
//     console.log(false)
// } 
// let x = 100;

// let x=6;
// x ||= 89;
// console.log(x)

// let x = 5;
// x ??= 100;
// console.log(x)

//let x = 16 + 4 + "Volvo";

//console.log(x)

//datatypes****

// let x;         // Now x is undefined
// x = 5;         // Now x is a Number
// x = "John"; 
// x = "hello"   // Now x is a String
// console.log(x);

//**string */

// p1="hello";
// p2="how";
// console.log(p1 + " " +p2)

// let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";
// let answer3 = 'He is called "Johnny"';

// console.log(answer1+ "\n" +answer2+" \n"+answer3)

//**boolean */

// let x = 5;
// let y = 5;
// let z = 6;
// console.log((x==y) +"\n"+(y==z))

// const cars=["xyz","red","trd"];
// console.log(cars)
// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };

//   console.log(person.firstName +" "+person.lastName)
  
// var x=3;
//  x=5;
// console.log(x)  
var MainObj = {

    prop1: "prop1MainObj",
    
    Obj1: {
      prop1: "prop1Obj1",
      prop2: "prop2Obj1",    
      Obj2: {
        prop1: "hey you",
        prop2: "prop2Obj2"
      }
    },
      
    Obj3: {
      prop1: "prop1Obj3",
      prop2: "prop2Obj3"
    },
    
    Obj4: {
      prop1: true,
      prop2: 3
    }  
  };
  
  console.log(MainObj.Obj1.Obj2.prop1);












  
