function displayAccesskeys(){
    var body = document.getElementsByTagName("body")[0];
    var keylist = document.getElementById("navigation");
    var anchors = keylist.getElementsByTagName("a");
    var h3 = document.createElement("h3");
    var title = document.createTextNode("Accesskeys");
    h3.appendChild(title);
    body.appendChild(h3);
    var ul = document.createElement("ul");
    for(var i = 0; i < anchors.length; i++){
        var accesskey = anchors[i].getAttribute("accesskey");
        var description = anchors[i].lastChild.nodeValue;
        var li = document.createElement("li");
        var content = document.createTextNode(accesskey+":"+description);
        li.appendChild(content);
        ul.appendChild(li);
    }
    body.appendChild(ul);
}
/*
function displayAccesskeys(){
    var links = document.getElementsByTagName("a");
    var akeys = new Array();
    for(var i = 0; i < links.length; i++){
        var current_link = links[i];
        if(!current_link.getAttribute("accesskey")) continue;
        var key = current_link.getAttribute("accesskey");
        var text = current_link.lastChild.nodeValue;
        akeys[key] = text;
    }
    var list = document.createElement("ul");
    for(key in akeys){
        var text = akeys[key];
        var str = key+":"+text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
*/
addLoadEvent(displayAccesskeys);