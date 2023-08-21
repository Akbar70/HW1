const welcom = ('Привет')
alert(welcom)
const firstName = prompt('Введите ваше имя','Имя пользователя')
const lastName = prompt('Введите вашу фамилию','Фамилия пользователя')
const hello = `Привет, ${firstName} ${lastName}!`
alert(hello)


// 2 exercise
var firstNumber, secondNumber;
firstNumber = +prompt('Ведите число: ');
secondNumber = parseInt(prompt ('Ведите число: '));
if(firstNumber > secondNumber ){
    alert(firstNumber + ' Больше');
}else{
    alert(secondNumber + ' Больше');
}


// 3 exercise
const color = prompt('Введите цвет:');

switch (color) {
    case 'red':
        alert('Стоп');
        break;
    case 'yellow':
        alert('Ожидание');
        break;
    case 'green':
        alert('Двигаться');
        break;
    default:
        alert('Неверный цвет');
        break;
}
//////////////////////////////////////

// доп задание

console.log('Hello world');
var num = 5

// var firstName, lastName;

// firstName = 'Akbar'
// lastName = "Sulaimankulov"
// console.log(firstName, lastName);

// let b = 5
// b = 2
// console.log(b); 

// const c = 5
// c = 3
// console.log(c) 

// let test = 'test'
// let $ = 'test'
// let $test = 'test'
// let test$v= 'test'

// let _ = 32
// let _test = 32
// let test_ = 32
// let test_first = 32
// let test_First = 32
// let num23 = 32

// const num = 10
// console.log(typeof num);

// const str = 'hello' //string-text
// console.log(typeof str);

// const boolFalse = false
// const boolTrue = true
// console.log(typeof boolFalse);

// let d 
// console.log(d);

// const array = [[1,2,3],4, 'friend', 'text', true]
// console.log(array[4]);
// console.log(array.length);

// const obj = {
//     name: 'Baisal',
//     age: 17
// }
// console.log(obj.name);

// const user = {
//     login: 'Alex',
//     password: 'password',
//     UserName: 'Alex',
//     followers:[
//         {
//             UserName:'Diana'
//         },
//         {
//             UserName:'Diana'
//         }
//     ],
//     follows:[
//         {
//             UserName:'Diana'
//         },
//         {
//             UserName:'Diana',
//         }
//     ],
//     avatar:'img'
// }
// console.log(user);
// console.log('username:' + user.UserName);
// console.log('followers' + user.followers.length);
// console.log('follows' + user.follows.length);


// const firstName = 'Baisal'
// const lastName = "Shailoobekov"
// const fullName = firstName + " " + lastName
// console.log(fullName);

// let message = `hello, ${firstName}`
// console.log(message);



// let a = 12
// let v = 5
// let p = 30

// p = p + a 
// let k = a + v
// let k = a - v
// let k = a * v
// let k = a / v
// let k = a % v

// let nan = firstName / a
// let e = 32
// console.log(typeof e);

// const fullage = 14 
// const birthYear = 2008
// const currentYear = 2023

// const isFullage = currentYear - birthYear < fullage
// console.log(isFullage);

// const num1 = 40
// const num2 = 43
// console.log(num2 == num1);

// const time = prompt('enter the number')
// if(time < 12) {
//     alert('Good morning')
// } else if (time <18){
//     alert('Good afternoon')
// }else if (time < 24){
//     alert('Good evening')
// }

// const age = 15
// switch (age) {
//     case 15:
//         console.log('you are teenger');
//         break;
//     case 18:
//         console.log('you are perfect age');
//     default:
//         console.log('please enter your valid age');
// }
// console.log(age);

// let isFD = confirm('you are frontend developer')
// alert(isFD)

// const firstName = prompt('Your name ')
// const age = prompt('Your age')
// const answer = `Name: ${firstName} \n Age: ${age}`
// alert(answer)