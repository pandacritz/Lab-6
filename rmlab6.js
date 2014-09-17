

alert("JavaScript works!");

//array function

function arrayFunctions() {


var heroes = ["Thrall","Vol'jin","Proudmoore", "Windrunner"];
var Warsong = ["Garrosh" , "Nazgrim"];
heroes[heroes.length] = "Defenders of Azeroth";
console.log(heroes);
var pandacritzVar = heroes.pop();
console.log(heroes);
console.log("We removed " + pandacritzVar);
heroes.push("Varyn", pandacritzVar, Warsong [0], Warsong[1]);
console.log(heroes);
heroes.sort().reverse();
console.log(heroes);
console.log(heroes.sort());
}

arrayFunctions();