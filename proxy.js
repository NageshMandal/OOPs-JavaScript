// 'use strict'

// let person = {
//     firstname: 'Nagesh',
//     lastname: 'Mandal',
//     age: 25
// };

// console.log(person);
// console.log(person.firstname);
// console.log('---------------------------------------------------');

// // person.age = 300;
// // console.log(person)



// let goodPerson = new Proxy(person , {
//     get: function(target, prop, receiver) {
//         console.log(prop + ' is being accessed');
//         return target[prop];
//     },

//     set: function(target, prop, value) {
//         if(prop === 'age' && value > 200) {
//             throw new Error('Age is not valid');
//         }
//         target[prop] = value;
//         return true;

//     }
// });

// console.log(goodPerson);
// console.log(goodPerson.firstname);
// console.log(goodPerson.lastname);
// console.log(goodPerson.age);


// goodPerson.age = 20;

// console.log(goodPerson);






