// for loops

for(let i = 0; i<5; i++){
    console.log('in loop: ',i);
}

console.log('log finished');

const names = ['shaun','mario','luigi'];

for(i = 0; i<names.length; i++){
   // console.log(names[i]);
   let html = `<div>${names[i]}</div>`;
   console.log(html);
}




// while loops
i = 0;
while(i<5){
    console.log('in loop: ',i);
    i++;
}


i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
}


// do while loops
i=5;
do{
    console.log('val o fi is: ',i);
    i++;
}while(i<5)







console.log('-------------------')

// if statements
let age = 25;
if(age>20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun','ryu','chun-li','yoshi'];

if(ninjas.length>3){
    console.log("that's a lo tof ninjas");
} 

// logical operators - OR || and AND &&

const password = 'p@ss1';
if(password.length >=12 && password.includes("@")){
    console.log("that password is might strong")
} else if(password.length>=8 || password.includes("@") && password.length>=5){
    console.log("the pasword is long enough!");
} else{
    console.log("the password is too short");
}

// logical NOT !

let user = false;

if(!user){
    console.log("you mut be logged in to continue")
}

console.log(!true);
console.log(!false);



// break and continue

const scores = [50,25,0,30,100,20,10];

for(i = 0; i<scores.length; i++){

    if(scores[i]===0){
        continue; // loop un bu turundaki kodlarin geri kalaninin calismasini durdurur
    }

    console.log('your score : ', scores[i]);

    if(scores[i] === 100){
        console.log("congrats, you got the top score!");
        break; // loop u tamamen bitirir
    }
}



// switch statements
const grade = 'D';

switch(grade){
    case 'A':
        console.log("you got an A!");
        break;
    case 'B':
         console.log("you got a B!");
         break;
    case 'C':
        console.log("you got a C!");
        break;
    case 'D':
        console.log("you got a D!");
        break;
    case 'E':
        console.log("you got an E!");
        break;
    default:
        console.log("not a valid grade!")
}

// using if statements
if(grade === 'A'){

} else if(grade === 'B'){

} else if(grade === 'C'){

} else if(grade === 'D'){

} else if(grade === 'E'){

} else {

}






// variables & block scope
age = 30;

if(true){
    let age = 40;
    let name = 'shaun';
    console.log('inside 1st code block: ',age,name);

    if(true){
        let age = 50;
        console.log('inside 2nd code block: ',age,name);
        var test = 'hello'
    }
}

console.log('outside code block: ',age,name,test);




