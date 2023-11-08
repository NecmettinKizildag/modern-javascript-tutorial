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


const password = 'pass';
if(password.length>=8){
    console.log("the pasword is long enough!");
} else{
    console.log("the password is too short");
}