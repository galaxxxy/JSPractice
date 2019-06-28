function positionMessage(){
    var elem1 = document.getElementById("message");
    elem1.style.position = "absolute";
    elem1.style.left = "50px";
    elem1.style.top = "100px";
    moveElement(elem1,125,25,20);
    var elem2 = document.getElementById("message2");
    elem2.style.position = "absolute";
    elem2.style.left = "50px";
    elem2.style.top = "50px";
    moveElement(elem2,125,125,20);
}
addLoadEvent(positionMessage);