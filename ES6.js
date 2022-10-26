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

        myButton.addEventListener('click', () => {

            document.write('I Spend' + this.price);
        });
    },
};
shop.buy();





