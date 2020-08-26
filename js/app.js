//querySelector()
var firstPTag = document.querySelector("div p");
firstPTag.style.color = "indigo";

//querySelectorAll()
var allPTags = document.querySelectorAll("body p");
for (var i = 0; i < allPTags.length; i++) {
    allPTags[i].style.fontSize = "large";
    allPTags[i].style.fontWeight = "bold";
}

//getElementById()
var pTag = document.getElementById("ptag-two");
pTag.style.fontSize = "x-large";
pTag.style.color = "green";

//getElementsByClassName()
var infoTags = document.getElementsByClassName("ptags");
for (var i = 0; i < infoTags.length; i++) {
    infoTags[i].style.fontStyle = "oblique";
}

//getElementsByTagName()
var tagname=document.getElementsByTagName("p");
for (var i = 0; i < tagname.length; i++) {
    tagname[i].style.backgroundColor = "pink";
    tagname[i].style.border = "1px solid black";
}

//createElement()
var newElement=document.createElement('h2');
var parent=document.getElementById("parent");
parent.append(newElement);
newElement.innerHTML="This is an injected h2 tag";

//createTextNode()
var newPelement=document.createElement("p");
var newptag=document.createTextNode("This is a new paragraph tag");
newPelement.appendChild(newptag);
parent.append(newPelement);

//removeChild()
var parent=document.getElementById("parent");
parent.removeChild(remove);

//classList add()
var addElement=document.getElementById("image");
addElement.classList.add("imageSize");

//classList remove()
var addElement2=document.getElementById("image2");
addElement2.classList.remove("imageSize")

//classList toggle()
var addElement3=document.getElementById("image3");
addElement3.classList.toggle("imageSize");









