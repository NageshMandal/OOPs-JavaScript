 // class object method

class hello{
    messege(){
        alert("hello");
    }
    welcome(){
        alert("welcome")
    }
}

let a = new hello();
a.messege();
a.welcome();


// constructer function

class student{
    constructor(){
        let name;
        alert("nagesh mandal");
    }
}
let a = new student();


// 3 property function

class student{
    constructor(name,age){
        this.sname= name;
        this.sage= age;
    }
    hello(){
        document.write(`hello ${this.sname} your age is ${this.sage}`);
    }     
    static staticMethod(){
        document.write("static method")
    }  
}
let a = new student("Nagesh mandal",20);
let b = new student("ram kumar",25);

a.hello();
b.hello();
student.staticMethod();


// INHERITANCE METHOD 

class employee{
    constructor(name){
        this.name = name;
        document.write("Hello");
    }

}
class manager extends employee{
    constructor(name){
        super();
        document.write("my name is" + name);
    }
}

let a = new manager("Nagesh Mandal");

class employee{
    constructor(name,age,salery){
        this.empname = name;
        this.empage = age;
        this.empsalery = salery;
    }
    info(){
        document.write(`<h3>Employee Class</h3>
                        Name : ${this.empname}<br>
                        Age : ${this.empage}<br>
                        Salery : ${this.empsalery}<br>`)
    }
}

class manager extends employee{
    
    info(){
        let ta = 1000;
        let pa = 300;
        let total = this.empsalery + ta + pa;

        document.write(`<h3>Manager Class</h3>
                        Name : ${this.empname}<br>
                        Age : ${this.empage}<br>
                        Salery : ${total}<br>`)
    }
}
let a = new manager("nagesh", 20, 50000);
let b = new employee("ram", 25, 30000);

a.info();
b.info();



// COMPUTED PROPERY KEYS //

const keyName = 'Name';
const product = {
    [keyName]: 'Mobile',
    price: 100,
};

document.write(product);


// METHOD DEFINATION SHORTHAND //

const keyName = 'Name';
const product = {
    buy() {
        document.write('Bought');
    },
};

product.buy();

// PROPERTY SHORTHAND //

const accessToken = 'retuyewr655rew';
const refreshToken = 'iyoiy76756547g';

const user = {
    accessToken,
    refreshToken,
};

console.log(user);


// DESTRUCTURING

const user = {
    name: 'Nagesh Mandal',
    age: 19,
};

const {name:fullname,age} = user;

console.log(name);
console.log(age);


const data = ['Nagesh',30,'CSE'];

const [name, age ,profession] = data;

console.log(name);
 

// DEFAULT PARAMETERS //

const register = (name, password, image = 'test.png') => {

    console.log(name, password, image);

};

 register('Nagesh', '7633fds555', 'photo.png');



// SPREAD //

const lang = ['c', 'c++', 'javascript'];

const newLang = [...lang];

console.log(newLang);


const settings = {
    volume: 10,
    brightness: 80,
    address: {
        street: 'xyz',
    },
};

const newSettings = {...settings, contrast: 50};

console.log(newSettings);



// REST //

const addItems = (...items) => {

    console.log(items);
};

addItems(3,42,5,6);



// FOR OF LOOP //

const number = [2, 4, 5, 7];

for (const num of number) {
    console.log(num);
}



// ARRAY STRING OBJECT SET MAP //

const language = 'Javascript';

for (const char of language) {
    console.log(char);
}

const person = {
    name: 'Nagesh',
    city: 'India',
    brand: 'Android',
};

for (const [key , value] of Object.entries(person)) {
    console.log(key, value);
}





