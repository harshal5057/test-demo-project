// let p1;
// let p2;
// // let p3;
////#1#****

//  function myfunction(p1, p2,p3,p4) {
//     console.log("p1*p2*p3*P4:",p1,p2,p3,p4)
//     return p1*p2*p3*p4;

// }
// console.log("total:",myfunction(4,3,7,4))

////#2*****
// let x= myf(4,3)
// {
//     console.log("ans:",x)
// }
//  function  myf(a,b)
// {
//    return a+b;
// }

// //#3****

// function tocelcius(f)
// {
//    return (5/7) * (f-32)
// }
// console.log("temprature is ",tocelcius(77) + " celcius")

////#4*** global variable
// var car="TATA";
// function d3() {
//   var car = "TATA";
//   console.log("carname", typeof car + " " + car);
//   }
// d3();
// console.log(typeof car);
// console.log(car);

////#5*** local varibale

// function d3() {
//   let car = "TATA";
//   console.log("carname", typeof car + " " + car);
//   }
// d3();
// console.log(typeof car);
// console.log(car); // ans not defind

////#6 avg

// function avg(x,y)
// {
//    return (x+y)/2 
// }
// let a=1;
// let b=2;
// let c=3;
//  console.log("avg:",avg(a,b))
//  console.log("avg:",avg(b,c))
//  console.log("avg:",avg(a,c))


////# 7 avg condyition 

// function fun(x,y)
// {
//     if(a && b)
//     {
//         return (x+y)/2
//     }
//     else {
//       console.log("undefined")
//     }
//  }
// let a=1;
// let b=4;
// let c=5;
//  console.log("avg:",fun(a,b))
//  console.log("avg:",fun(b,c))
//  console.log("avg:",fun(a,c))

//#7 sum with let var
// const sum = (a,b)=>{
//    return a+b
// }
//  console.log(sum(2,4))r

// function myFunc(p1,p2)
// {

//     console.log(m)
// }
// object******
//#1***
// car={type:"fieat",color:"yellow"}
// console.log(car.type +" "+car.color)

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
    
//       return this.firstName + " " + this.lastName+" "+this.id;
//     }

//   };
  
//   console.log(person.fullName())

// //#2**** 
// function emp(id,name,salary){  
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  
//     }  
//     e=new emp(103,"Vimal Jaiswal",30000);  

//     console.log(e.id+" "+e.name+" "+e.salary);
// function but()
// {
// console.log(this.Date())
// }
// but()
const t1={
   id:10,
   Name:"xyz",
   sal:20000,
   ddd: {
      name : 'ehh',
      age: 3,
      add: {
         adnam: 'as',
         ff: {
            fffkkka: 'adadda',
            llsfsls: 'asad'
         }
      }
   },
   detail:function(){
      console.log(this.id+this.Name)
   }
};
console.log(t1)

// let txt = "";
// for (let x in t1) {
//   txt += t1[x] + " ";
// };
// console.log("OBJECT CONSOLE~~>>>>>", t1.ddd)

// console.log(t1.ddd.add.ff)

//  let keys = Object.keys(t1.ddd.add.ff)
//  console.log(keys)

//  let values = Object.values(t1)
//  console.log(values)


// let entries = Object.entries(t1)
//  console.log(entries)
      


    

  
  