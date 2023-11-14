const para = document.querySelector('div.error');

console.log(para);


const para1 = document.querySelector('body > h1');

console.log(para1);


const paras = document.querySelectorAll('p');

console.log(paras);
console.log(paras[2]);

paras.forEach(each =>{
    console.log(each);
});


//const errors = document.querySelectorAll('.error');

//console.log(errors);




// get an element by ID 
const title = document.getElementById('page-title');
console.log(title);


// get elements by their class name
const title1 = document.getElementsByClassName('error');
console.log(title1);


// get elements by their tag name
const title2 = document.getElementsByTagName('p');
console.log(title2);




//const para2 = document.querySelector('p');

//console.log(para2.innerText);

//para2.innerText = 'ninjas are awesome!';
//console.log(para2.innerText);

//const paras1 = document.querySelectorAll('p');

/*paras1.forEach(each=>{
    console.log(each.innerText);
    each.innerText += ' new text';
});*/


const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML += '<h2>this is a new h2</h2>';


const people = ['luigi','mario','yoshi'];

//people.forEach(each=>{
//    content.innerHTML+=`<p>${each}</p>`;
//});





const link = document.querySelector('a');

//console.log(link.getAttribute('href'));

//link.setAttribute('href','https://www.netninja.co.uk');
//link.innerText = 'TheNet Ninja Website';

const mssg = document.querySelector('body > p.error');

//console.log(mssg.getAttribute('class'));
//mssg.setAttribute('class','success') 

//mssg.setAttribute('style','color:green;');


const title3 = document.querySelector('h1');

//title3.setAttribute('style', 'margin:50px;');

console.log(title3.style.color);

title3.style.margin = '50px';
title3.style.color = 'crimson';

title3.style.fontSize = '60px';

title3.style.margin = '';  






//const content1 = document.querySelector('body > p.error');

//console.log(content1.classList);
//content1.classList.add('error');
//content1.classList.remove('error');

//content1.classList.add('success')


const paras2 = document.querySelectorAll('p');

paras2.forEach(p=>{
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }

    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});

const title4 = document.querySelector('.title');
title4.classList.toggle('test'); // toggle class degeri yoksa ekler , varsa cikarir
title4.classList.toggle('test');

