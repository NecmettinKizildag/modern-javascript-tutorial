// object literals
const blogs = [
    {title:'why mac & cheese rules',likes:30},
    {title:'10 things to make whit marmite',likes:50}
];

console.log(blogs);

let user = {
    name : 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [{title:'why mac & cheese rules',likes:30},
            {title:'10 things to make whit marmite',likes:50}
           ],
    login(){
        console.log('the user logged in');
    },
    logout:function(){
        console.log('the user logged out');
    },
    logBlogs:function(){
        console.log('this user has written the folowing blogs');
        this.blogs.forEach(each =>{
            console.log(each.title,each.likes);
        });
    }
};

console.log(user); 
console.log(user.name); 

user.age = 35;
console.log(user.age);   

console.log(user['email']);

user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);

user.login();
user.logout();

user.logBlogs();





// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area)); // normal yuvarliyor
console.log(Math.floor(area)); // asagiya yuvarliyor
console.log(Math.ceil(area)); // yukariya yuvarliyor
console.log(Math.trunc(area)); // . dadan sonrasini silip int donduruyor 

// random numbers

const random = Math.random();

console.log(random); // 0 ve 1 arasinda rastgele sayi donduruyor
console.log(Math.round(random*100));


 

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// referance values

const userOne = {name:'ryu', age: 30};
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = 40;
console.log(userOne,userTwo);
