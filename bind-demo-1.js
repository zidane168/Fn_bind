// const $ = document.querySelector
// const $$ = document.querySelectorAll

// console.log(document.querySelector('#heading').innerText); // ok

// but
// console.log($('#heading').innerText); //  Uncaught TypeError: Illegal invocation

// solved? 
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

console.log($('#heading').innerText); 
// document.querySelector dang su dung this nen phải bind(document) moi co the su dung dc


