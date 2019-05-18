console.log('Hello world');


let x = 5;
console.log(typeof x);

let y =6.45;
console.log(typeof y);

let name = 'Jan';
console.log(typeof name);

let obj = {
    firstName:'Jan',
    lastName:'Kowalski'
};
console.log(typeof obj);

let isTrue = false
console.log(typeof isTrue);
isTrue = true
console.log(isTrue);

let lastName
console.log(typeof lastName);

if (x > 3 || y < 9.22) {
    console.log('x>3')
} else if (x<3) {
    console.log('x<3')
} else {
    console.log('x=3')
}

switch (x) {
    case 5:
        console.log(5);
        break;
    default:
        console.log('NAN')
        break;
}
// asdasd
/*

 */


for(let i =0 ;i<100;i++) {
    console.log(i);
}
x = 0;
while(x<5) {
    console.log(x);
    x++;
}

let array = [1,2,3,6.56,'imie',{name:'Jan',lastName:'Kowalski'}];
for (let i = 0;i<array.length;i++) {
    console.log(array[i]);
}
array[6] = true
array.push(false);
//array.pop(); //pop usuwa ostatni element
//array.shift(); //shift

//array.slice(3,1)
console.log('--------------')
for (let i = 0;i<array.length;i++) {
    console.log(array[i]);
}

let numbers = [1,2,3,4,5,6];
numbers.splice(3,1)
for (let i = 0;i<numbers.length;i++) {
    console.log(numbers[i]);
}
sum(2,3); // zwraca 5
function sum(a,b) {
    console.log(a+b);
}

const sumConst = function sum(a,b) {
    console.log(a+b);
};
sumConst(1,1);















