function showPic(whichPic){
    if(!document.getElementById("placeholder")) return false;
    var resource = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",resource);
    if(document.getElementById("description")) {
        if(whichPic.getAttribute("title")){
            var text = whichPic.getAttribute("title");
        } else {
            var text = "";
        }
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            // description.childNodes[0].nodeValue = text;
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
function prepareGallery(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            showPic(this);
            return false;
        }
        // links[i].onkeypress = links.onclick;
    }
}
function preparePlaceholder(){
    var body = document.getElementsByTagName("body");
    var placeholder = document.createElement("img");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    placeholder.setAttribute("id","placeholder");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var text = document.createTextNode("Choose an image.");
    description.appendChild(text);
    body[0].appendChild(placeholder);
    body[0].appendChild(description);
}
function addLoadEvent(func){
    var oldOnLoad = window.onload;
    // if(oldOnLoad == null) {
    if(typeof oldOnLoad != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldOnLoad();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);