let name = {
    firstname: 'Sona',
    lastname: 'Kar',
}

let name2 = {
    firstname:'Sid',
    lastname:'K',
    }

let printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state)
}

//function borrowing
printFullName.call(name2, "Pune", "Maharashtra");
printFullName.apply(name, ["Mumbai", "Mh"])

//bind method - gives copy and invoke later
let printFull = printFullName.bind(name2, "Lajapatnagar", "Delhi")
console.log(printFull)
printFull()