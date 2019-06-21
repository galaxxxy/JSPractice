// window.onload = function(){
//     prepareGallery();
// }
function showPic(whichPic){
    if(!document.getElementById) return false;
    var resource = whichPic.getAttribute("href");
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",resource);
    description.childNodes[0].nodeValue = text;
}
function prepareGallery(){
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            showPic(this);
            return false;
        }
    }
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