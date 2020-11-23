// 출력, 변수
// alert('Message ');
console.log("logger");

a = 123;
console.log(a);

let b = 333;
console.log("b value : ", b);


a = 22;
b = "11";

console.log(a, b);

const w = 33;
console.log(a, b, w, a + b + w);

// const = 상수
//w = 222;
var q = 222;
console.log(q);
q = "ff";
console.log(q);


// String "", 
// boolean true/false, 
// char '', 
// int, float, double

// 배열
const daysOfWeek = ["월", "화", "수", "목", "금"];

console.log(daysOfWeek)
console.log(daysOfWeek[3])
console.log(daysOfWeek[2])
console.log(daysOfWeek[1])


for (let index = 0; index < daysOfWeek.length; index++) {
    const element = daysOfWeek[index];
    console.log(element);
    
}

// 딕셔너리
// 오브젝트(키) : 값
const dic = {mon:"월", the:"화", wed:"수", thu:"목", fri:"금"};
console.log(dic);
console.log(dic.mon);



const info = {
    name:"jagehoon",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies:["if only", "Notebook"],
    favFood:[
        {
            name:"소고기",
            fatty: true
        },
        {
            name:"햄버거",
            fatty:true
        }
    ]
};

console.log(info);
console.log(info.isHandsome);
console.log(info.favFood[0].name);

console.log(console)

// 함수(function) 만들기
function hello(){
    console.log("");
    console.log("hello");
    console.log("hello");
    console.log("");
}

// 함수 사용하기
hello();

// 함수 리턴 형태
console.log(hello());

// 리턴 함수 만들기
function returnHello(value){
    let result = "";

    for (let index = 0; index < 5; index++) {
        result += value + " ";
    }

    return result;
}

console.log(returnHello("JaeHoon", "test"));
// string format
console.log(`이름 : ${info.name} 나이 : ${info.age} 성별 : ${info.gender}`);


// 형태(타입) 보기
console.log(typeof(info));
console.log(typeof(b));
console.log(typeof(w));

// 상수 딕셔너리 변수에 함수 입력하여 사용하기.
const calculator = {
    plus: function(a, b){
        return a + b;
    }

}

const plus = calculator.plus(3,4);
console.log(plus);

// dom functions
// id 불러온거
const title = document.getElementById("title");
console.log(title);
title.style.backgroundColor = "blue";
title.innerText = "QQQ";
// 에러 출력
console.error("ex");


// CSS class 불러온거
const cc = document.getElementsByClassName("cc");
cc[0].innerText = "RR";
cc[0].style.backgroundColor = "pink";
cc[1].innerHTML = "WW";
// getElementsByClassName 함수는 배열로 설정됨.

// 속성
console.dir(title);
console.dir(cc);

console.dir(document);

const classTitle = document.querySelector(".cc");
classTitle.style.color = "white";

function handleResize(event){
    console.log("resize handle", event, event.innerText)
}


// js Events and event handlers
window.addEventListener("resize", handleResize)
// handleResize() 이렇게 입력하면 그 해당함수를 호출한다.

function handleClick(){
    classTitle.style.backgroundColor = "Red";
    //alert("Hello");
}

classTitle.addEventListener("click", handleClick);


// if
// && : and, || or
const BASE_COLOR = "rgb(0, 255, 255)";
const CHANGE_COLOR = "red";

const mouseClick = document.querySelector(".idid");
const mouseEnter = document.querySelector("#mouse-enter");


function mouseHandleClick(){
    const currentColor = mouseClick.style.backgroundColor;

    if(currentColor === BASE_COLOR){
        mouseClick.style.backgroundColor = CHANGE_COLOR;
    }else{
        mouseClick.style.backgroundColor = BASE_COLOR;
    }
}

function mouseHandleEnter(){

    const currentColor = mouseEnter.style.backgroundColor;

    if(currentColor === BASE_COLOR){
        mouseEnter.style.backgroundColor = CHANGE_COLOR;
    }else{
        mouseEnter.style.backgroundColor = BASE_COLOR;
    }
}

mouseClick.style.backgroundColor = BASE_COLOR;
mouseClick.addEventListener("click", mouseHandleClick);

mouseEnter.style.backgroundColor = BASE_COLOR;
mouseEnter.addEventListener("mouseenter", mouseHandleEnter);
// 이벤트들 javaScript dom event MDN
// https://developer.mozilla.org/ko/docs/Web/Events

// 위 방식대로 자바스크립트로 스타일을 하나하나 변경하는 것보다. 아래의 방법이 좋다.

cssChangeh1Tag = document.querySelector("#test");


BASE_CSS_COLOR = "base-color";
CHANGE_CSS_COLOR = "change-color";

// // 이렇게 하는 방법은 기초.
// function cssChangeHandleClick(){
//     const currentClass = cssChangeh1Tag.className;
//     console.log(currentClass);

//     if(currentClass !== CHANGE_CSS_COLOR){
//         cssChangeh1Tag.className = CHANGE_CSS_COLOR;
//     }else{
//         cssChangeh1Tag.className = BASE_CSS_COLOR;
//     }
// }

// function init(){
//     cssChangeh1Tag.addEventListener("click", cssChangeHandleClick);
// }

// init();
// 이와 같이 아이디 추가하여 아이디 고정에 클래스만 변경해도 되고,
// 클래스로 잡은 뒤에 클래스를 변경해도 된다.

// 이유는 클래스를 ""로 비우고 다시 입력하는 방식은
// 클래스를 자체를 전체 다 지우고 다시 입력하는 방식이다.
// 여러 클래스가 겹쳐있을 경우 위와같은 방식으로 하게된다면
// 기존의 클래스가 다 지워져버릴 수 있다.
// 그래서 classList를 사용하여 add, remove해주는 것이 좋다.
function cssChangeHandleClick(){
    // 아래 코드와 동일 toggle 함수로 해결.
    cssChangeh1Tag.classList.toggle(CHANGE_CSS_COLOR);

    // const hasClass = cssChangeh1Tag.classList.contains(CHANGE_CSS_COLOR);
    // console.log(hasClass);
    // if(hasClass){
    //     cssChangeh1Tag.classList.remove(CHANGE_CSS_COLOR);
    // }else{
    //     cssChangeh1Tag.classList.add(CHANGE_CSS_COLOR);
    // }
}

function init(){
    cssChangeh1Tag.addEventListener("click", cssChangeHandleClick);
}

init();



// 오래됨 잘 안씀.
// prompt("gg");


// if

// for



