function displayCitations(){
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    
    var blockquote = document.getElementsByTagName("blockquote");
    for(var i = 0; i < blockquote.length; i++){
        var superscript = document.createElement("sup");
        var source = blockquote[i].getAttribute("cite");
        var citation = document.createElement("a");
        var text = document.createTextNode("source");
        citation.appendChild(text);
        citation.setAttribute("href",source);
        superscript.appendChild(citation);
        lastChildElement(blockquote[i]).appendChild(superscript);
    }
}
function lastChildElement(parentElement){
    // var children = parentElement.childNodes;
    // for(var i = children.length-1; i > 0; i--){
    //     if(children[i].nodeType == 1){
    //         return children[i];
    //     }
    // }
    // return false;
    var children = parentElement.getElementsByTagName("*");
    if (children.length != 0) {
        return children[children.length-1];
    } else {
        return false;
    }
}
addLoadEvent(displayCitations);