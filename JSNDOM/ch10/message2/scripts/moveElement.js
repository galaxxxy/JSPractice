function moveElement(element,finx,finy,interval){
    var xpos = parseInt(element.style.left); 
    var ypos = parseInt(element.style.top);
    if(xpos == finx && ypos == finy) return true;
    if(xpos > finx) xpos--;
    if(xpos < finx) xpos++;
    if(ypos > finy) ypos--;
    if(ypos < finy) ypos++;
    element.style.left = xpos+"px";
    element.style.top = ypos+"px";
    //避免使用字符串
    // var movement = setTimeout(function(){
    //     moveElement(element,finx,finy,interval);
    // },interval);
    var movement = setTimeout(moveElement,interval,element,finx,finy,interval);
    //adding additional arguments
}