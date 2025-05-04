var OriginalTilte=document.title;

//this is a function for changint the title
function changeTitle(newTitle){
    document.title=newTitle;
}
let newTitle="This is the GYM";
changeTitle(newTitle);

var navBar=document.getElementById("myNav");
var myElement=document.createElement("h1");
var myText=document.createTextNode("This is Harambee Morning Course");

//adding the content i careated to my html document
myElement.appendChild(myText);
navBar.appendChild(myElement);

//styling the image by using JavaSript
document.getElementById("welcome").style.fontSize="2em";

//creating the function for changing the backgaound
function changeBackgroundColor(color){
    let section=document.getElementById("codding-journey");
    section.style.backgroundColor="color";
}
document.getElementById("intro").addEventListener('click', () => backgroundColor("#2CA02C"));
document.getElementById("react").addEventListener('click', () => backgroundColor("#f4f4f4"));
document.getElementById("bacend").addEventListener('click', () => backgroundColor("rgb(0, 0, 228)"));
