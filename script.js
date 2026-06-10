const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

const texts = [
"Backend Developer",
"Web Developer",
"Python Developer",
"Engineering Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === texts.length){
count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{
setTimeout(type,100);
}

})();