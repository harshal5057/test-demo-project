//########################## break stament ################################//
// let text;
// for(i=0;i<10;i++){
//     if(i===8){
//         break;//to break statment
//     }
//      text += i+"\n";
//     console.log(i)
// }

//####################### cotinue statement ####################################//
// let text;
// for(i=0;i<10;i++){
//     if(i===4){
//         continue;//to jump only one state
//     }
//      text += i+"\n";
//     console.log(i)
// }

// ##################### javscript label ##########################//

// const cars=["bmw","merdece","skoda","kia","suzuki"]
// let text="";
// let list;

// list: {
//  text += cars[0]+"\n";
//  text += cars[1]+"\n";
//  text += cars[2]+"\n";
//  break list;
//  text+=cars[3]+"\n";
//  text+=cars[4]+"\n";
// }
// console.log(text)

//######################### Iterating #################################//

// const na ="hello good morning";
// let text="";
// for(const x of na){
//     text += x +"\n";
// }
// console.log(text)

//################# Iterating over array #############################3//

// const na =["hello"," good ","morning"];
// let text="";
// for(const x of na){
//     text += x +"\n";
// }
// console.log(text)

//################333 Iterating over SET ##################################//


// const na =new Set(["hello","good ","morning"]);
// let text="";
// for(const x of na){
//     text += x +"\n";
// }
// console.log(text)

//##################### Iterating over Map ##############################//


// const na = new Map([["app",100],
//                     ["ban",90],
//                     ["pin",150]
//                    ]);
// let text="";
// for(const x of na){
//     text += x +"\n";
// }
// console.log(text)

//################################# SET #####################################//

// const s=new Set(["a","b","c","c"]);
// console.log(s.size)//to find length


// const s=new Set(["a","b","c","c"]);// one value not dispaly repted time
// console.log(s)//to find length


// const s=new Set([]);

// const a="x";
// const b="y";
// const c="z";
// s.add(a);
// s.add(b);
// s.add(c);
// console.log(s)//to add 


// const s=new Set(["a","b","c"]);
// const d = "d";
// const e= "e";
// s.add(d)
// s.add(e)
// console.log(s.size)//to find length


// const s=new Set(["a","b","c","c"]);
// let text="";
// s.forEach(function(value)
// {
//     text += value +"\n";

// })
// console.log(text)//to find using foreach function


// const s=new Set(["a","b","c","c"]);
// console.log(s.values())//to find values

// const s=new Set(["a","b","c","c"]);
// let text="";
// for (const x of s.values())
// {
//     text+=x +"\n";
// }
// console.log(text)//to find values

//##################### GET ##################################//

// const fr=new Map([["apple",100],
//                    ["graps",10],
//                     ["pin",100]]);
//                     console.log("frits"+fr.get("apple"))
                    
//####################### SET ##############################//          
// const fr=new Map([]);
//  fr.set("app",100);
//  fr.set("ban",200);
//  console.log("fr:",fr.get("app"))


const fr=new Map([["apple",100], ["graps",10], ["pin",100]]);

// fr.set("apple",200);
// console.log("frits"+fr.get("apple"))
// console.log("frits:"+fr.size)
// // fr.delete("apple");
// console.log("frits:"+fr.size)
// console.log("frits"+fr.has("apple"))
// let txt="";
// fr.forEach(function(value,key){
//     txt += key +"="+value +"\n";

// })
// console.log(txt)

//### entries ####/
let txt="";
for(let x of fr.entries()){
    txt += x +"\n";

}
console.log(txt)



