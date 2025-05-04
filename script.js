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