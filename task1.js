alert("welcome to js2-external")
var a="hello world"
console.log(a)
let b="ball"
console.log(b)
const c="cat"
console.log(c)
//Data types
// number,string,boolean,null,undefined,array,objects,function


//Number
var d=35;
console.log(d)
console.log("Type of d - " , typeof(d))


//String

var e = "JavaScript often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript.";
console.log(e)
console.log("Type of e - " , typeof(e))


//Boolean
var f = true;
console.log(f)
console.log("Type of f - " , typeof(f))


//Boolean
var g = false;
console.log(g)
console.log("Type of g - " , typeof(g))


//Undefined

var h;
console.log(h)
console.log("Type of h - " , typeof(h))


//Null

var i = null;
console.log(i)
console.log("Type of i - " , typeof(i))


//Objects

var j ={
    id:20,
    age:30,
    name:"Bharath"

}
console.log(j)
console.log(j.id)
console.log(j.age)
console.log(j.name)
console.log("Type of j - " , typeof(j))


//arrays

var k = ["jaisley","joe","john","ram"]
console.log(k)
console.log("Type of k - " , typeof(k))


var l = [23,44,55,66,76]
console.log(l)
console.log("Type of l - " , typeof(l))


var m = ["john",45,67,"sony"]
console.log(m)
console.log("Type of m - " , typeof(m))


//functions

function newFunc(a,b){
    return a*b;

}

let res = newFunc(4,5);
console.log(res)
console.log("Type of newFunc - " , typeof(newFunc()))
