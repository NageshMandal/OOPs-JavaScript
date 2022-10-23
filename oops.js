// 1 // class object method

// class hello{
//     messege(){
//         alert("hello");
//     }
//     welcome(){
//         alert("welcome")
//     }
// }

// let a = new hello();
// a.messege();
// a.welcome();


// 2 // constructer function

// class student{
//     constructor(){
//         let name;
//         alert("nagesh mandal");
//     }
// }
// let a = new student();


// 3 property function

// class student{
//     constructor(name,age){
//         this.sname= name;
//         this.sage= age;
//     }
//     hello(){
//         document.write(`hello ${this.sname} your age is ${this.sage}`);
//     }     
//     static staticMethod(){
//         document.write("static method")
//     }  
// }
// let a = new student("Nagesh mandal",20);
// let b = new student("ram kumar",25);

// a.hello();
// b.hello();
// student.staticMethod();


// INHERITANCE METHOD //

// class employee{
//     constructor(name){
//         this.name = name;
//         document.write("Hello");
//     }

// }
// class manager extends employee{
//     constructor(name){
//         super();
//         document.write("my name is" + name);
//     }
// }

// let a = new manager("Nagesh Mandal");

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
