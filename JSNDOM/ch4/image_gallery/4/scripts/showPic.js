window.onload = countBodyChildren;
function showPic(whichPic) {
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");
    var source = whichPic.getAttribute("href");
    var title = whichPic.getAttribute("title");
    placeholder.setAttribute("src", source);
    description.firstChild.nodeValue = title;
}
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    console.log(body_element.childNodes.length);
}
