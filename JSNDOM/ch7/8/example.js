window.onload = function() {
    var elem = document.createElement("p");
    var div = document.getElementById("testdiv");
    var text = document.createTextNode("Hello World");
    elem.appendChild(text);
    div.appendChild(elem);
    /*
        div.appendChild(elem);
        elem.appendChild(text);
        与顺序无关
    */ 
}