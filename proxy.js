'use strict'

let person = {
    firstname: 'Nagesh',
    lastname: 'Mandal',
    age: 25
};

console.log(person);
console.log(person.firstname);
console.log('---------------------------------------------------');

let goodPerson = new Proxy(person , {
    get: function(target, prop, receiver) {
        console.log(prop + ' is being accessed');
        return target[prop];
    }
})

console.log(goodPerson);
console.log(goodPerson.firstname);
console.log(goodPerson.lastname);
console.log(goodPerson.age);







