let x = document.getElementById("btn");
let names = document.getElementById("myName");
console.log(x);
console.log(names);
btn.addEventListener('click',(e) => {
    e.preventDefault();
    alert(`Hello ${names.value}`)
})