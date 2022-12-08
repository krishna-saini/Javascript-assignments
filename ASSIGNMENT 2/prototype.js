let x = 5;
let myHeroes = ["thor", "spidey"];
let heroPower = {
    thor: "hammer",
    spidey: "sling",
    getSpideyPower(){
        console.log(`spidey power is ${this.spidey}`);
    }
}

// creating our own functions
// since object is present at topmost layer of protoype chain

Object.prototype.krishna = function(){
    console.log("I am newly created function");
}

// this newly added methods is directly accessible to all the childs
myHeroes.krishna();

// add a mehtod in arrray heyArray and gives length of total elemenet
// heyArray -> Total elements are ...

Array.prototype.heyArray = function(){
    console.log(this);
    console.log(`Total elements are ${this.length}`);
}
myHeroes.heyArray();

// challenge -> build a SAAS produt, 
// it has a user Object
const User = {
    name: "top name",
    email: "example@gmail.com"
}

const Teacher = {
    makeVideos: true
}

// make user properties accessible to Teacher
// it is known as inheritance 
// Teacher.__proto__ = User;
// console.log(Teacher);

// another way to do above functionality
// Teacher.prototype = User;
// console.log(Teacher);

// most modern way to do this
Object.setPrototypeOf(Teacher, User)

// challenge--> find trueLength of a string without spaces
String.prototype.trueLength =function(){
    return this.trim().length;
}
console.log("hitesh   ".trueLength());