function moveElement(elementID,finx,finy,interval){
    var element = document.getElementById(elementID);
    if(element.movement) {
        clearTimeout(element.movement);
    }
    var xpos = parseInt(element.style.left); 
    var ypos = parseInt(element.style.top);
    if(xpos == finx && ypos == finy) return true;
    if(xpos > finx) {
        xpos--;
    }
    if(xpos < finx) {
        xpos++;
    }
    if(ypos > finy) {
        ypos--;
    }
    if(ypos < finy) {
        ypos++;
    }
    element.style.left = xpos+"px";
    element.style.top = ypos+"px";
    var repeat = "moveElement('"+elementID+"',"+finx+","+finy+","+interval+")";
    element.movement = setTimeout(repeat,interval);
}