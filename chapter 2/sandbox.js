let age = 25;

let year = 2019;

console.log(age,year);

age = 30;
console.log(age);

const points = 100;

//points = 40;

console.log(points);
// const data turunun atandigi degiskene sadece bir kere veri atanabilir

var score = 75;
console.log(score);
// var data turu eskiden let data turunun yerine kullaniliyormus 


// strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Snaderson';

let fullName = firstName +' '+ lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

console.log(result); 

let index = email.indexOf('@');
console.log(index);






// common string methods
result = email.lastIndexOf('n');
console.log(result);

result = email.slice(0,5);
console.log(result);

result = email.substr(4,10);
console.log(result);

result = email.replace('m','w');
console.log(result);

result = email.replace('n','w');
console.log(result);







// numbers
let radius = 10;
const pi= 3.14;

console.log(radius,pi);

// math operators +, -, /, *, **(ussu),%(kalan)
console.log(10/2);

result = radius%3;
console.log(result);

result = pi*radius**2
console.log(result);

// order of operation - B(bracets) I(indices) D(division) M(multiples) A(addition) S(subtraction)

result = 5*(10-3)**2;
console.log(result);

let likes = 10;

//likes = likes+1;
likes++;

console.log(likes);

//likes = likes+10;
likes+=10;

console.log(likes);

likes-=5;
console.log(likes);

likes*=2;
console.log(likes);

likes/=2;
console.log(likes);

// NaN - not a number
console.log(5/'hello');


result = 'the blog has ' + likes + ' likes'
console.log(result);






// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes1 = 30;

// concatenation way
result = 'The blog called '+ title+' by '+ author+' has '+ likes1+' likes';
console.log(result);

// template string way
result = `The blog called ${title} by ${author} has ${likes1} likes`;
console.log(result);  

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes1} likes</span>
`;
console.log(html);  






// arrays
let ninjas = ['shaun','ryu','chun-li'];
console.log(ninjas[1]);  

// ninjas = ['shaun','ryu','chun-li'];
// ninjas[1]='ken'; // index 1 i yeni degerle degistirdi
// console.log(ninjas[1]);  

let ages = [20,25,30,35];
console.log(ages[2]);  

let random = ['shaun','crystal',30,20];
console.log(random);

console.log(ninjas.length);


// array methods
result = ninjas.join('-'); // array in icindeki butun degerleri parantez icideki string i aralarina koyarak birlestirir
console.log(result);

result = ninjas.indexOf('chun-li'); // degerin index ini getirir
console.log(result); 

result = ninjas.concat(['ken','crystal']) // array i parantez icine yazilan baska bir array ile birlestirir
console.log(result);

result = ninjas.push('ken'); // array e yeni deger ekleyip array in uzunlugunu dondurur , ayrica orjinal array de kalici degisiklik yapar(distractive)
console.log(result);

result = ninjas.pop() // son eklenen degeri array den cikarir ve cikardigi degeri dondurur, orjanal arrayi kalici olarak degistirir
console.log(result);
console.log(ninjas);


let age1;

console.log(age1, age1+3,`the age is ${age1}`);

