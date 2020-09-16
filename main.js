//
alert('hello world');
console.error('this is error');
console.warn('this is warning')

//let ,const
let number=30;
console.log(number);

const score =10;
console.log(score);

//string , number , boolean ,null,undefined

const name = 'kishan';
const age =20;
const iscool = 'true';
const rating = 5.5;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof iscool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//conscatenation

console.log('my name is '+ name + 'and im ' + age);

//temlate string
const hellow = 'my name is  ${name} and im ${age}';
console.log(hellow);

//string property 
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0, 5). toUpperCase());
console.log(s.split(''));

//arrays -variable that hold multiple values

 const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apple','orange','pears'];
fruits[3]='grapes';
fruits.push('mango');
fruits.unshift('strawberries');
fruits.pop();

//console.log(array.isarray(fruits));
//console.log(array.indexof('orange'));
console.log(fruits);

//objact

const person = {
	fristname:'kishan',
	lastname:'sarvaiya',
	age:20,
	hobbies:['music','gamong'],
	address:{
		city:'palitana',
		state:'gujrat'

	}
}

person.email = 'sarvaiyakishank@gmail.com';

console.log(person);
console.log(person.fristname,person.lastname);


const todos = [
{
	id:1,
	text:'take out trash',
	iscompleted:true
},
{
	id:2,
	text:'meeting with boss',
	iscompleted:true
},{
	id:1,
	text:'dentist appt',
	iscompleted:false
},
];

console.log(todos);
console.log(todos[1].text);

for(let i=0; i< todos.length; i++){
	console.log(todos[i].text);
}

for(let t of todos)
{
	console.log(t.id);
}

//forEach, map , filter
 todos.forEach(function(t)
{
	console.log(t.text);
});

const ttext = todos.map( t =>  t.text );
	console.log(ttext); 

	const tcompleted = todos.filter(t => t.iscompleted == true );
	console.log(tcompleted);

//for 

for(let i=0; i<=10; i++){
		console.log(i)
}

//while
let i=0;
while(i<10)
{
	console.log(i);
	i++;
}

//if, else, elseif, switch case 
const a = 10;
const b = 20;

	if(a > 10 || b > 10 ){
		console.log('x is mprw than 5 or b is more than 10');
	}
	

const c = 10;
const color = c > 10 ? 'red' : 'blue';

console.log(color);

switch(color){
	case 'red':
	 console.log('color is red');
	 break;

	 case 'blue':
		 console.log('color is blue');
	default:
		console.log('color is NOt red or blue');

}


function addnum(n1 ,n2)
{
	console.log(n1+n2);
}
	addnum(5,4);

const addnums = num1 => num1 + 5;

console.log(addnums(5));


//constructor function

function person1(fristname, lastname, dob){
	this.fristname = fristname ;
	this.lastname = lastname ;
	this.dob = new Date(dob);
	this.getBirthYear = function() {
		 this.dob.getFullYear();
	}
	this.getFullName = function() {
		return '${this.firstname} ${this.lastname}';
	}
}

//class
	class person00{
		constructor(fristname, lastname, dob){
			this.fristname = fristname ;
			this.lastname = lastname ;
			this.dob = new Date(dob);
		}
		getFullYear(){
			return this.dob.getFullYear;
		}
		getFullName(){
		return '${this.firstname} ${this.lastname}';
		
		}
	}

//instantiate object

const person0 = new person1('kishan','sarvaiya', '20-01-2000')

console.log(person0);
console.log(person0.getBirthYear());
console.log(person0.getFullName());



console.log(window);


//single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//multiple element

console.log(document.querySelector('.item'));
console.log(document.getElementsByClassName('item'));


const items = document.querySelectorAll('item'); 
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'hello';
//ul.children[1].innerText = 'brad';
//ul.lastElementChild.innerHTML = '<h4>Hello</h4>';


const btn = document.querySelector('.btn');

//btn.style.background = 'red'; 	
btn.addEventListener('click', (e) => {
	e.preventDefault();
	 document.querySelector('#my-form').style.background = '#ccc';
	console.log('click');

	//document.querySelector('body').classlist.add('bg-dark');
	//document.querySelector('.items').lastElementChild.innerHTML =  '<h1>hello</h1>';
});





const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
	e.preventDefault();

	
	if(nameInput.value === '' || emailInput.value === '')
	{
		msg.classList.add('error');
		msg.innerHTML = 'please enter all field';

		setTimeout(() => msg.remove(), 3000);
		alert('please entert fields');
	} else {
		const li =document.createElement('li');
		li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}'));
		userList.appendChild(li);


		//clear feild

		nameInput.value = '';
		emailInput.value = '';
		
	}
}