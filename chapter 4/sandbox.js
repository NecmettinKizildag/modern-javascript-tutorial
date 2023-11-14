// function decleration (bu sekilde olsuturulan methodlarin hangi satirda oldugu fark etmez her zaman calisis)
function greet(){
    console.log('hello there');
}

// function expression (bu sekilde olusturulan methodlarin cagirilmadan once kullanilmasi lazim yoksa calismaz)
const speak = function() {
    console.log('good day');
};

greet();

speak();


// arguments & parameters
const speak1 = function(name= 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
};

speak1('afternoon','necmettin');
speak1();
console.log("hi!");


// returning values

const calcArea = function(radius){
    let area = 3.14*radius**2;
    return area;
};

let area = calcArea(5);
console.log(area);


//arrow function
const calcArea1 = (radius) =>{return 3.14*radius**2;};

console.log(calcArea1(5));


const greet1 = () => 'hi!';

console.log(greet1());


const greet2 = greet => {return 'hi!';};

console.log(greet2());


const bill = (products,tax) =>{
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i]+products[i]*tax;
    }
    return total;
};


console.log(bill([10,15,30],0.2)); 






const name1 = 'shaun';
// functions

const greet3 = () => 'hello';

console.log(greet3());


// methods

console.log(name1.toUpperCase());





// callbacks $ foreach

const myFunc = (callbackFunc) =>{
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value =>{
    // do something
    console.log(value);
});



let people = ['mario','luigi','ryu','shaun','chun-li'];

 const logPerson = (person,index) =>{
    console.log(`${index} - hello ${person}`);
};


people.forEach (logPerson);


 



// get a refence to the 'ul'
const ul  = document.querySelector('.people');

const people1 = ['mario','luigi','ryu','shaun','chun-li']; 

let html = ``;

people1.forEach(person => {
    // create html template
    html+=`<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
