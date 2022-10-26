// const addition = (a, b) => {
//     document.write(a+b);
// };

// addition(9 ,5);

// // arrow function

// const add = (a,b) => document.write(a+b);

// add(9,8);




const myButton = document.querySelector('#myButton');

const shop = {
    
    price: 100,

    buy: function () {

        // const self = this;
                                       //function
        myButton.addEventListener('click',() => {

            document.write('I Spend' + this.price);
        });
    },
};
shop.buy();



// Tamplates literals AKA Backticks

// const name = 'Nagesh';

// const message = `hello ${name}
// how are you
// `;
// document.write(message);


// Enhanced object literals

// computed property key

// const product = {
//     name
// }





