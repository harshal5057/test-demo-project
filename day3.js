//@@@@string@@@

//#1

// txt1="xyz";
// txt2="abc"

// console.log(txt1+txt2)

//#2

// txt1="xyz is 'green'";
// txt2='abc is "abc"'

// console.log(txt1+"\n"+txt2)

//#3

// let txt1="xyzab";
// let length=txt1.length;
//console.log(length)

//#4

// txt1="xyz";
// console.log(txt1.length)


// let text = "The character \' is \' called backslash.";
// let text1 = "The character \"is \" called backslash.";

// let text2 = "The character \t is \t called backslash.";
// let text3 = "The character \b is \b called backslash.";
// let text4 = "The character \v is \v called backslash.";

// console.log(text)
// console.log(text1)
// console.log(text2)
// console.log(text3)
// console.log(text4)

// let x="abc";
// let y="abc"
// let z= new String("abc")
// let a=new String("abc")
// console.log(x===y)//string - string is same true
// console.log(z===a)//object cannot compared
// console.log(x===z)//string-obj different false
// console.log(z==a)//beacuse object cannot compared.false 

//slice$$$$$

txt=" harshal sonvane "
// // console.log(txt.length)?

// console.log(txt.slice(3,3))
// console.log(txt.slice(7))
// console.log(txt.slice(6))
// console.log(txt.slice(-8,-4))

//substring$$$

// console.log(txt.substring(7,13))
// console.log(txt.replace("harshal","sonvane"))
// console.log(txt.trim())
// text="5";
// console.log(text.padStart(4,"x"))
// console.log(text)

//charAt$$$$

//console.log(txt.charAt(1))

// a="hello"
// a[0]=a;
// console.log(a)

//split//$$$


//  let word="hello world"
//  const myArr=word.split("");
//  word="";
//  for(let i=0;i<=myArr.length;i++)
//  {
//     word+=myArr[i]+"\n";
//  }
//  console.log(word)

//split$$$$$$$

// let text = "a,b,c,d,e,f";
// const myArray = text.
// split(",")
// console.log(myArray[2])

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*string search*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

//let str="hello hii";

//seach,indexof,lastindexoff $$4

// console.log(str.indexOf("hii"))
// console.log(str.lastIndexOf("hii"))
// console.log(str.search("ll"))
//console.log(str.search(/ll/))

//$$$$$$match all$$$$$$$$$


//let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.match(/ain/gi);
// const myArr1 = text.match(/AIN/gi);
// console.log(myArr.length+" ,"+myArr1.length)
 //let x = text.matchAll(/ain/gi)
//console.log(Array.from(x))

// console.log(text.includes("rain"))
// console.log(text.includes("rain",5))
// console.log(text.startsWith("The",0))
//console.log(text.endsWith("rain",8))


//$$$$$$$$$$$$$$$$$$$$$$$$$$templet literrals$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

// let text=`hello`;
// let text1=`'hello'`;
// let text2=`'fhghin ,m.kjui ,m,.jj
// // ,lodp`;
// let f_name=`xyz`
// let l_name=`cve`
// let text3=`'hello ${f_name} ${l_name}'`;
// console.log(text3)


// let price = 10;
// let VAT = 2;
// let total = `Total: ${(price * (1 + VAT)).toFixed(5)}`;
// console.log(total)

let header=`hello good morning`
let tags=["literals",'abc','vrt'];
let html=`<h1>${header}</h1>`;
for(const  x of tags){
    html+=`<cbccbcbc>${x}</cbccbcbc>`;

}
html+=`</ul>`;
console.log(html)









