export {}
//data types
let message:string = "hello world";
console.log(message)
let test : boolean = true;
console.log(test)
let id:number =5;

//Array
let list1: number[] =[1,2,3]
let list2 : Array<number>= [4,5,6]

//tuple
let person1:[string,number] = ['viswa',6] //it should match with types entered and same order
console.log(id,list1,list2,person1)

//enum
enum color{Red=5,Green,Blue}
let c:color = color.Green
console.log(c)

//any type
let unknown:any= true;
unknown='jhgfgh'
unknown=8
console.log(unknown)