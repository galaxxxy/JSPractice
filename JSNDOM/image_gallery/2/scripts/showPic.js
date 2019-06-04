function showPic(whichPic) {
    var placeholder = document.getElementById("placeholder");
    var source = whichPic.getAttribute("href");
    placeholder.setAttribute("src", source);
}
