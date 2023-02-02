//##############################  ARRAY #######################################//
//const car=["TATA","skoda","BMW"];

//line by line#
//const car=[
    "TATA",
    "skoda",
    "BMW"
//]

// //index vise#
// let car=[];
// car[0]="BMW";
// car[1]="mercedice"
// car[2]="TATA";

// by new object#

//let car=new Array("bmw","TATA","NANO");

//call index vise#

// const car=["TATA","skoda","BMW"];
// console.log(car[0])//step1
// cars=car[0]//step2
// console.log(cars)

// const car=["TATA","skoda","BMW"];
// car[0]="Ford";
//  console.log(car)

//# acces Element Array#

// const car=["TATA","skoda",46];
// cars=car[2];
// console.log(cars)

//# acces Element obj#

// let car={firstName:"xyz",LastName:"cvr"};
// console.log("acces  obj:",car.firstName)

//# method to find length


// const car=["TATA","skoda",46];
//  console.log(car.length)

 // acc Lat Element of Aray#
 
// const car=["TATA","skoda",46];
// console.log(car[car.length-1])

//accaes loop in array##


// const car=["TATA","skoda"];
// let fLen=car.length;
// let text;
// for(let i=0; i<fLen ;i++){
//   text += car[i]+"\n";
// }
// console.log(text)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text;
// for (let i = 0; i < fLen; i++) {
//   text +=  fruits[i] + "\n";
// }
// console.log(text)

//#foreach loop#
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text;
// fruits.forEach(myFunction);
// console.log(text)
// function myFunction(value)
// {
//     text+=value+"\n";
// }

//adding new element in array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("kiwi");//add element in array
// fruits[fruits.length]="lemon";
// console.log(fruits)

// adding highest value making hol in array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[6]="pinapple";
// let fLen = fruits.length;

// let text;
// for (let i = 0; i < fLen; i++) {
  
//   text +=  fruits[i] + "\n";
// }
// console.log(text)

//Accociative array in js alaways support  num index#
// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46; 
// console.log(person[0]+"\n"+ person.length)

 //The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

//const points = new Array(40, 100, 1, 5, 25, 10);
//const points1 = [40, 100, 1, 5, 25, 10];

//How to recognize#

// var points = new Array(40);

// console.log(Array.isArray( points))

// console.log( points instanceof Array)

//###############################Array method##########################################

//const points1 = [40, 100, 1, 5, 25, 10];
// point=points1.toString();
//point=points1.join("*");
// console.log(points1)
// console.log("pop 10:",points1.pop())
// points1.pop();
// console.log(points1)
//  points1.push(10);
// console.log("push 10",points1.push(10))
// console.log(points1)
// points1.shift(); // to first element remove
// console.log(points1)
// points1.unshift(20); // to add new element in first
// console.log(points1)
// delete points1[0];//to delete elemment

// console.log(points1)

// £££££££ concate """"""""""

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const mygroup = ["Emil", "Tobias", "Linus"];
// const group=myGirls.concat(myBoys,mygroup);
// console.log(group)

// """""""""""""""""""array conacte"""""""""""""""""""""""
// const myArray = ["Emil", "Tobias", "Linus"];
// const myChildren = myArray.concat("Peter"); 
// console.log(myChildren)


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);//1 - 1remove  & 2 -2 remove
// const citrus1 = fruits.slice(1,3);
// console.log(citrus1)

// f1=fruits.toString()
// console.log(f1)

//£££££££££££££££££££££££££££££££££££ ARRAY SHORTING £££££££££££££££££££££££££££££££//

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits)//[ 'Apple', 'Banana', 'Lemon', 'Mango', 'Orange' ]

//@@@@@@@@@@@@@@@@@@@@@@@@@@@ NUMERIC SHORT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points)

// points.sort(function(a, b)
// {
//     return a - b
// });
// console.log(points)

//DECEDING ORDER IN SHORTING

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points)

// points.sort(function(a, b)
// {
//     return b - a
// });
// console.log(points)

//RANDOM ORDER SHORTING


// const points = [40, 100, 1, 5, 25, 10];
// console.log(points)

// points.sort(function(a, b)
// {
//     return 0.5-Math.random()
// });
// console.log(points)

//Max####

// const points = [40, 100, 1, 5, 25, 10];
// console.log (myArrayMax(points))

// function myArrayMax(arr) {
//   return Math.min.apply(null, arr);
// }

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];
  
//   displayCars();
  
//   cars.sort(function(a, b){return a.year - b.year});
//   displayCars();
  
//   function displayCars() {
//     console.log(
//         cars[0].type + " " + cars[0].year + "<br>" +
//         cars[1].type + " " + cars[1].year + "<br>" +
//         cars[2].type + " " + cars[2].year)
//   }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);
// console.log(txt)

// function myFunction(value, index, array) {
//   txt += value + "\n"; 
// }

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// console.log(numbers2)

// function myFunction(value, index, array) {
//   return value * 2;
// }

// const a=[2,3,4]
// const b=a.map(myFunction1);
// console.log(b)

// function myFunction1(value,index,array){
//     return value * 2;
// }

// const num=[2,31,40]
// const b=num.filter(myFunction1);
// console.log(b)

// function myFunction1(value,index,array){
//     return value > 18;// with map only give status but with filter it give accurate ans
// }

//#########3333 reduce ########33333//
// const num=[2,31,40]
// const b=num.reduce(myFunction1);
// console.log(b)

// function myFunction1(total,value,index,array){
//     return total+value;// with reduce perform fun on every element and give single value
// }

// const num=[2,31,40]
// const b=num.reduceRight(myFunction1);
// console.log(b)

// function myFunction1(total,value,index,array){
//     return total+value;// with reduce perform fun on every element and give single value
// }

//## every ##
// const num=[2,31,40]
// const b=num.every(myFunction1);
// console.log(b)

// function myFunction1(value,index,array){
//     return value > 18;// with every give true /fasle staus value
// }

//some
// const num=[2,31,40]
// const b=num.some(myFunction1);
// console.log(b)

// function myFunction1(value,index,array){
//     return value > 18;// with every give true /fasle staus value
// }
//index of ££££££££

// const num=[2,31,40]
// const b=num.indexOf(31)+1;
// console.log(b)
//£ keys £

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// let text = "";
// for (let x of keys) {
//   text += x ;
// }
// console.log(text)

//entries


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// let text = "";
// for (let x of f ) {
//     console.log(x)
// }


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("kiwi"))


//########## DATE #######################//

//const d =new Date();
// const d = new Date("October 13, 2014 11:13:00");

//const d = new Date("2022-03-25");

// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// const d = new Date(2018, 15, 24, 10, 33, 30, 0);
// const d = new Date(2019);
// const d = new Date(9, 11, 24);
// const d = new Date(100000000000);
// const d = new Date("03/25/2015");//short dae
// const d = new Date("Mar 25 2015");//long date
// const d = new Date("25 Mar 2015");// date and month is random order is allowed
// const d = Date.parse("january 12 2015");
// const date1=new Date(d)

//############################## GET DATE#####################################//

// console.log(date1)

// const d=new Date("nov 11 2017")

// const d=new Date()
// console.log(d.getFullYear())//GETFULL YEAR

// const d=new Date("nov 11 2017")
// console.log(d.getMonth()+1);//GETMONTH

// const d=new Date()
// console.log(d.getMonth()+1);//GETMONTH



// const d = new Date("2021-03-25");
// let month = d.getMonth()+1;
// console.log(month)


// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const d =new Date ("2021-03-25");
// let month=months[d.getMonth()];
// console.log(month)// month display in string


// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const d =new Date ();
// let month=months[d.getMonth()];
// console.log(month)// month display in string cuurent date



// const d =new Date ();
// let date1=d.getDate();

// console.log(date1)// month display in string cuurent date

// const d =new Date ("nov 07 2003");
// let month=d.getDate();
// console.log(month)// month display in string date


// const d =new Date ();
// let h=d.getHours();
// console.log(h)// month display in string cuurent houurs


// const d =new Date ("2010-03-25");
// let h=d.getHours();
// console.log(h)// month display in string  houurs


// const d =new Date ("2010-03-25");
// let h=d.getMinutes();
// console.log(h)// month display in string  min


// const d =new Date ();
// let m=d.getMinutes();
// console.log(m)// month display in string  min


// const d =new Date ("2010-03-25");
// let s=d.getSeconds();
// console.log(s)// month display in string second


// const d =new Date ();
// let s=d.getSeconds();
// console.log(s)// month display in string second


// const d =new Date ();
// let Ms=d.getMilliseconds();
// console.log(Ms)// month display in string MILIsecond

// const d =new Date ("2016-03-21");
// let Ms=d.getMilliseconds();
// console.log(Ms)// month display in string MILIsecond

// const d =new Date ();
// let gd=d.getDay();
// console.log(gd)// month display in string day

// const d =new Date ("2015-09-12");
// let Ms=d.getDay();
// console.log(Ms)// month display in string day

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const d =new Date ("2015-09-12");
// let Ms=days[d.getDay()];
// console.log(Ms)// month display in string day

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const d =new Date ();
// let Ms=days[d.getDay()];
// console.log(Ms)// month display in string day


// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const d =new Date ();
// let t=d.getTime();
// console.log(t)// month display in string time

// const d =new Date ("2019-03-19");
// let t=d.getTime();
// console.log(t)// month display in string time

// const d =Date.now ();
// console.log(d)// month display in string date


// const minute=1000*60;
// const hour=minute*60;
// const day=hour*24;
// const year=day*365;

// let years=Math.round(Date.now()/year);
// console.log(years)


// const date = new Date()
// d=date.getTimezoneOffset();
// console.log(d) 

//############################## SET DATE ##########################################/



// const d=new Date()
// d.setFullYear(2020);
// console.log(d)//setFULL YEAR

// const d=new Date()
// d.setMonth(10)+1;
// console.log(d);//sETMONTH

// const d=new Date()
// d.setDate(d.getDate()+50);
// console.log(d);//sETdate


// const d =new Date ();
// d.setHours(22);
// console.log(d)// month display in string cuurent houurs



// const d =new Date ();
// d.setMinutes(30);
// console.log(d)// month display in string  min


// const d =new Date ();
// d.setSeconds(30);
// console.log(d)//second
let text;
const today = new Date();
console.log(today)
const someday = new Date();
console.log(someday)
someday.setFullYear(2100, 0, 14);
if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text)


// const d =new Date ();
// let s=d.getSeconds();
// console.log(s)// month display in string second


// const d =new Date ();
// let Ms=d.getMilliseconds();
// console.log(Ms)// month display in string MILIsecond

// const d =new Date ("2016-03-21");
// let Ms=d.getMilliseconds();
// console.log(Ms)// month display in string MILIsecond

// const d =new Date ();
// let gd=d.getDay();
// console.log(gd)// month display in string day

// const d =new Date ("2015-09-12");
// let Ms=d.getDay();
// console.log(Ms)// month display in string day

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const d =new Date ("2015-09-12");
// let Ms=days[d.getDay()];
// console.log(Ms)// month display in string day

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const d =new Date ();
// let Ms=days[d.getDay()];
// console.log(Ms)// month display in string day


// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const d =new Date ();
// let t=d.getTime();
// console.log(t)// month display in string time

// const d =new Date ("2019-03-19");
// let t=d.getTime();
// console.log(t)// month display in string time

// const d =Date.now ();
// console.log(d)// month display in string date



















