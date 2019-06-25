function displayAbbreviations(){
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    var body = document.getElementsByTagName("body")[0];
    var abbr = document.getElementsByTagName("abbr");
    var h2 = document.createElement("h2");
    var title = document.createTextNode("Abbreviations");
    h2.appendChild(title);
    body.appendChild(h2);
    var dl = document.createElement("dl");
    for(var i = 0; i < abbr.length; i++){
        if(abbr[i].childNodes.length == 0) break;
        var dt = document.createElement("dt");
        var head = document.createTextNode(abbr[i].firstChild.nodeValue);
        var dd = document.createElement("dd");
        var description = document.createTextNode(abbr[i].getAttribute("title"));
        dt.appendChild(head);
        dd.appendChild(description);
        dt.appendChild(dd);
        dl.appendChild(dt);
    }
    body.appendChild(dl);
}
addLoadEvent(displayAbbreviations);