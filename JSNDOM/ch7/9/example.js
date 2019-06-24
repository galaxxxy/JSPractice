window.onload = function() {
    var para = document.createElement("p");
    var emp = document.createElement("em");
    var text1 = document.createTextNode("I inserted ");
    var text2 = document.createTextNode("this");
    var text3 = document.createTextNode(" content");
    var div = document.getElementById("testdiv");
    emp.appendChild(text2);
    para.appendChild(text1);
    para.appendChild(emp);
    para.appendChild(text3);
    div.appendChild(para);
}