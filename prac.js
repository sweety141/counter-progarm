const Decreasebtn= document.getElementById("decrease-btn");
const Increasebtn= document.getElementById("increase-btn");
const Reset= document.getElementById("reset-btn");
const countlabel= document.getElementById("countlabel");

let count=0;
Increasebtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
Decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
Reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
