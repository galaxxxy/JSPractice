function styleHeaderSiblings(tag,theClass){
    var header = document.getElementsByTagName(tag);
    for(var i = 0; i < header.length; i++){
        var sibling = getNextElement(header[i]);
        // sibling.style.fontWeight = "bold";
        // sibling.style.fontSize = "1.2em";
        addClass(sibling,theClass);
    }
}
function getNextElement(node){
    var nextElement = node.nextSibling;
    if(nextElement.nodeType == 1){
        return nextElement;
    }
    if (nextElement.nextSibling) {
        return getNextElement(nextElement);
    }
    return null;
}

function addClass(element,newName){
    var oldName = element.className;
    if(oldName){
        element.className = oldName+' '+newName;
    }else{
        element.className = newName;
    }
}
addLoadEvent(function(){
    styleHeaderSiblings("h1","intro");
});