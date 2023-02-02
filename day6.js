//############################# MATH ###########################################//
// console.log("mathPI:",Math.PI)
// console.log("mathE:",Math.E)
// console.log("mathSQRT1_2:",Math.SQRT1_2)
// console.log("mathSQRT2:",Math.SQRT2)
// console.log("mathLN2:",Math.LN2)
// console.log("mathLN10:",Math.LN10)
// console.log("mathLOG10E:",Math.LOG10E)
// console.log("mathLOG2E:",Math.LOG2E)
// console.log("mathLN10:",Math.LN10)

// 333333333333333333333333333333 MATH METHOD 33333333333333333333333333333333333//
 //console.log(Math.round(-4.3))//-4
// console.log(Math.round(4.5))//round
 //@@CEIL
// console.log(Math.ceil(4.2))
//console.log(Math.ceil(-4.5))// upper show

 //@@@floor
 //console.log(Math.floor(-4.2))//-5
//console.log(Math.floor(-4.5))
// console.log(Math.floor(4.7))//lower show

//@@trunc
// console.log(Math.trunc(4.2))
// console.log(Math.trunc(-4.5))//-4
// console.log(Math.trunc(4.7))//int part of x return

// //@@sign
// console.log(Math.sign(4))//1
// console.log(Math.sign(-4))//-1

//@@pow
// console.log(Math.pow(-8,2))//power find

//@sqrt
// console.log(Math.sqrt(4))//8*8=64

// //@@abs
// console.log(Math.abs(-4.5))

//@@sin
// d=Math.sin(90 * Math.PI / 180);
// console.log(d)

//@@cos
// console.log(Math.cos(90 * Math.PI / 180));

//@@mathmin
// console.log(Math.min(10,-100,-1,9))
//@@max

// console.log(Math.max(10,-100,-1,9))

//@@random

//console.log(Math.random())

// //@@log

// console.log(Math.log(1))//0
// console.log(Math.log(3))//1.098
// console.log(Math.log(10))//E
// console.log(Math.log(1))//0
// console.log(Math.log2(8))//how many mutiply to 2

// console.log(Math.log10(1000))//how many 10 


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2 random @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//

// console.log(Math.random())
// console.log(Math.floor(Math.random()*10))//use with floor giv rand int
// console.log(Math.floor(Math.random()*11))//use with floor giv rand int
// console.log(Math.floor(Math.random()*100))
// console.log(Math.floor(Math.random()*101))
// console.log(Math.floor(Math.random()*10)+1)

// console.log(typeof Math)//obj
// console.log(typeof (Math.random))//fun

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
// console.log(getRndInteger(1,10))  //random function

//######################################### BOOLEAN #######################################################//

// console.log(Boolean(-100))
// console.log(Boolean(1.23))
// console.log(Boolean("false"))
// x=0;//false
//  x=1;
// x=-1;//true
// x= -0;//false
 // x="";//false
// let x;//false
// x="null";//true
//x=10/"hello";
// console.log(typeof x + typeof y)

//@@@@@@@@@@@@@@@@@@@@ comparision @@@@@@@@@@@@@@@@@@//
// x=10;
// y=new Object(x=10);
// console.log(x==y)

// console.log(x>5 && y>5)
// console.log(x>5 || y>5)
// console.log(!(x==10))

//ternary oprator

// function ter(){
// let age = 15;
//  x=(age < 18) ? "to yong to vote":"oder to vote";
//  console.log(x)

// }
// ter();

 //nullish oprator
// let x=null;
// let y="hello";
// let r=x ?? y;
// console.log(r)

//optional changing oprator

// const car = {type:"Fiat", model:"500", color:"white"};
// let nam = car?.name;
// console.log(nam)
//################# if statment ##########################//
// if (new Date().getHours() < 18) 
// {
//     console.log("good day")
// }
// ################ if else stament ######################//
// hour= new Date().getHours();
// if(hour > 18){

//     console.log("good day")
// }
// else{
//     console.log("not good day")
// }
//############################## else if stament ###########33333//
// hour= new Date().getHours();
// if(hour < 10){

//     console.log("good day")
// }
// else if(hour < 20)
// {
//     console.log("after good day")
// }
// else{
//     console.log("good evening")
// }
//####################### switch case ###############################//
// let day;
// switch (new Date().getDay()) {
//     case 1:
//         day="monday";
        
//         break;
//         case 2:
//         day="tuesday";
        
//         break;

//         case 3:
//         day="wednesday ";
        
//         break;

//         case 4:
//         day="Thursday";
        
//         break;

//         case 5:
//         day="friday";
        
//         break;

//         case 6:
//         day="saturday";
        
//         break;
//     default:
//          day="goodday"
//         break;
// }

// console.log(day)


// let text;
// switch (new Date().getDay()) {
//   default:
//     text = "Looking forward to the Weekend";
//     break;
//   case 6:
//     text = "Today is wednesday";
//     break;
//   case 0:
//     text = "Today is Sunday";
// }
// console.log(text)

// switch (new Date().getDay()) {
//     case 4:
//     case 5:
//       text = "Soon it is Weekend";
//       break;
//     case 0:
//     case 6:
//       text = "It is Weekend";
//       break;
//     default:
//       text = "Looking forward to the Weekend";
//   }
//   console.log(text)

// let x = 0;

// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text)


//######################## LOOPS ###############################################/

// const car=["mercdec","BMW","SWIFT","FORD","fortuner"];
// let text="";
// for(i=0;i<car.length;i++){
//     text+=car[i]+"\n";
// }
// console.log(text)


// let i = 5;
// for (let i = 0; i < 100; i++) {
//   // some statements
//   i++;
// }
// console.log(i)
// person =["xyz","abc","wer"]
// let txt ="";
// for(let x in person){
//     txt+=person[x]+" ";
// }
// console.log(txt)
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + "\n"; 
// }
// console.log(txt)

//#####################for each#####################################//

// const num=[45,56,78,98,12];
// let txt="";
// num.forEach(myFun);
// console.log(txt)
// function myFun(value,index,array){
//     txt += value +"\n";
// }

//#######3#####333 for-of loop #############/
// // let txt = "";
// const numbers=[45,56,78,98,12];
// let txt = "";
// for (let x of numbers) {
//   txt += numbers[x] + "\n"; 
// }
// console.log(txt)
// ####### while loop #######
// let i=0;
// let text="";
// while (i < 10) {
//     text += "The number is " + i+"\n";
//     i++;
//   }
//   console.log(text)

//####### dowhile loop ###########


let text = "";
let i = 0;

do {
  text += i+"\n";
  i++;
}
while (i < 10);  
console.log(text)



