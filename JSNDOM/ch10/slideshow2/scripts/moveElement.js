function moveElement(elementID,finx,finy,interval){
    var element = document.getElementById(elementID);
    // if(!element.style.left||!element.style.top) return false;
    if(!element.style.left) element.style.left="0px";
    if(!element.style.top) element.style.top="0px";
    if(element.movement) {
        clearTimeout(element.movement);
    }
    var dist = 0;
    var xpos = parseInt(element.style.left); 
    var ypos = parseInt(element.style.top);
    if(xpos == finx && ypos == finy) return true;
    if(xpos > finx) {
        dist = Math.ceil((xpos-finx)/10);
        xpos -= dist;
    }
    if(xpos < finx) {
        dist = Math.ceil((finx-xpos)/10);
        xpos += dist;
    }
    if(ypos > finy) {
        dist = Math.ceil((ypos-finy)/10);
        ypos -= dist;
    }
    if(ypos < finy) {
        dist = Math.ceil((finy-ypos)/10);
        ypos += dist;
    }
    element.style.left = xpos+"px";
    element.style.top = ypos+"px";
    var repeat = "moveElement('"+elementID+"',"+finx+","+finy+","+interval+")";
    element.movement = setTimeout(repeat,interval);
}