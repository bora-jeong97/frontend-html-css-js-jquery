 /*https://www.youtube.com/watch?v=KF6t61yuPCY 코딩앙마 자바스크립트 기초 강좌 : 100분완성
 자바스크립트는 항상""로 감싸주고 예약어는 사용할 수 없다*/

 //  변수

    p = "puple";
    age = 17;
   alert(p, age);
   console.log(age);

// 기존에 이미 다른 사람이 사용중인 지 확인하려면
// let name = "f"; 라고 하면 오류가 뜨면서 이미 사용중인지 알 수 있다
// 또한 아래에서 grade = "a";로 let으로 지정된 것은 재지정이 가능하다
// 오류글 : Identifier 'name' has already been declared    

let name = "mike";
name = "love";

console.log(name);

// const 절대로 바뀌지 않는 상수를 선언할 때 
// 즉, 변수는 let 상수는 const

// 첫째, 변수는 문자와 숫자, $와 _만 사용
// 둘째, 첫글자는 숫자가 될 수 없다
// 셋째, 예약어는 사용할 수 없다
// 넷째, 가급적 상수는 대문자로 알려주세요
// 다섯째, 변수명은 읽기 쉽고 이해할 수 있게 선언



// 문자형 String
const name = "Mike"; 
const age = 30;

const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy";
const message2 = 'I\'m a boy';

const message3 = `My name is ${name}`;
const massage4 = `나는 ${30+1}살 입니다`;
console.log(message3);
console.log(massage4);



// 숫자형 Number
const age = 30; 
const PI = 3.14;

console.log(3 * 2) // 곱하기 *
console.log(6 / 3) // 나누기 /
console.log(6 % 4) // 나머지 %



// 오류 형식
// 1. 끊없이 연산되는 수
const x = 1/0;
console.log(x); // Infinity 무한대 
// 문자형을 숫자로 나눌 때
const age = 30; 
const x = "Mike";
console.log(x/age); // NaN = Not a number



// Boolean형
const a = true;
const b = false;

const name = "Mike";
const age = 30;

console.log(name == 'Mike')
console.log(age > 40)



// null(비어있음) 과 undefined (값이 할당 되지 않음)
let age;
console.log(age) // 변수는 존재하지만 값을 할당 하지 않음

let user = null; // 유저는 존재하지 않음



// typeof 연산자

const name = "Mike";

console.log(typeof 3); // number
console.log(typeof name); // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
console.log(typeof null); //object
console.log(typeof undefined); //undefined