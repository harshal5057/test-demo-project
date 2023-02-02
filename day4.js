// let x=3.14;
// let y=30;
// let x=123e5;
// let y=123e-5;
// let x=99999999999;
// let y=9999999999999999; //more than 15 digits thamn1000000000000;
// let x=0.2+0.10;//floating value sum is not always accurate
// let y=((0.2*10)+(0.1*10)/10)
// console.log(y)

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ adition $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// function f(x,y)
// {
    
//    return (x+y && x*y && x-y && x/y);
// }
 //let z=x*y;
// console.log(f(100,10))

// let x="100";
// let y="10";
// z=+x+y;
// c=x-y;
// v=x/y;
// b=x*y;
// console.log(z+"\n "+c+"\n "+v+"\n "+b)

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   NAN   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
// X = 100/"HELLO";
// console.log(X)//NAN


// y=100/"10";
// console.log(y) // return 10

// X = 100/"HELLO";
// console.log(isNaN(X))//NAN

// X = NaN;
// y = 100;
// z=X+y;
// console.log(z)//NAN

// let myNumber = 2; 
// let txt = "";
// while (myNumber != Infinity) {
//    myNumber = myNumber * myNumber;
//    txt = txt + myNumber + "\n";
// }
// console.log(txt)

// let x=2/0;
// console.log(typeof(x))
// console.log(typeof(Infinity))
// let u=0xFA;
// console.log(u)

//$$$$$$$$$$$$$$$$$$$$$$$$$    hexadecimal     $$$$$$$$$$$$$$$$$$$$$$4$$$$$//
//  mynum=32;
//  console.log(mynum.toString(36))
//  console.log(mynum.toString(32))
//  console.log(mynum.toString(16))
//  console.log(mynum.toString(12))
//  console.log(mynum.toString(10))
//  console.log(mynum.toString(2))

//$$$$$$$$$$$$$$$$$$$$$$$$$$$   BIGINT   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

// let x = 9999999999999999;
// let y = BigInt("9999999999999999");
//console.log(x+"\n"+y)



// let x = 123456789012345678901234567890;
// let y = BigInt("123456789012345678901234567890");
// console.log(x+"\n"+y)
// //x=BigInt(1000);
// x= 5n;
// y= Number(x)/2;
// console.log(y)

// console.log(typeof(x))


// let hex = 0x20000000000003n;
// let oct = 0o400000000000000003n;
// let bin = 0b100000000000000000000000000000000000000000000000000011n;
// console.log(hex+"\n"+oct+"\n"+bin)


//let x = 9007199254740992 == 9007199254740993;
// let  x = Number.MAX_SAFE_INTEGER;
// let  y = Number.MIN_SAFE_INTEGER;
// console.log(y)

//console.log(Number.isInteger(10))
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ NUMBER METHOD $$$$$$$$$$$$$$$$$$$$$$$$$$$$4//

//$$$$$$$$$$$$$$$$$$$$$$$$$4 toString  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

// let x=123;
// console.log(x.toString()+"\n"+(123).toString()+"\n"+(100+23).toString)

//$$$$$$$$$$$$$$$$$$$$$$$$$$   toExpontial $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
// let x=1.0;
// console.log(x.toExponential())
// console.log(x.toExponential(2))
// console.log(x.toExponential(3))
// console.log(x.toExponential(4))
// console.log(x.toExponential(5))
// console.log(x.toExponential(6))
//########################  TO Fixed ########################################//
// let x=9.35;
// console.log(x.toFixed())
// console.log(x.toFixed(2))
// console.log(x.toFixed(3))

//$$$$$$$$$$$$$$$$$$$$$$   toPreccision $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

// let x=9.655;
// console.log(x.toPrecision())
// console.log(x.toPrecision(2))
// console.log(x.toPrecision(3))
// console.log(x.toPrecision(4))

//###################  valu of ######################################//
// let x=123;
// console.log(x.valueOf())
// console.log((123).valueOf())
// console.log((100+23).valueOf())





