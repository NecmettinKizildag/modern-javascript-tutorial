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
const speak1 = function(name) {
    console.log(`good day ${name}`);
};

speak1('necmettin');