function addLoadEvent(func){
    let oldOnload = window.onload;
    if(typeof oldOnload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    let parentElement = targetElement.parentNode;
    if(parentElement.lastChild == targetElement){
        parentElement.appendChild(newElement);
    }else{
        parentElement.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        const oldName = element.className;
        element.className = oldName +" "+ value;
    }
}
function highlightPage(){
    if(!document.getElementsByTagName) return false;
    let nav = document.getElementsByTagName("nav");
    let links = nav[0].getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        var linkurl = links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl) != -1){
            addClass(links[i],"here");
            let linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}
function moveElement(element,fin_x,fin_y,interval){
    if(element.movement){
        clearTimeout(element.movement);
    }
    if(!element.style.left){
        element.style.left = "0px";
    }
    if(!element.style.top){
        element.style.top = "0px";
    }
    let pos_x = parseInt(element.style.left);
    let pos_y = parseInt(element.style.top);
    if(pos_x==fin_x&&pos_y==fin_y){
        return true;
    }
    let dist = 0;
    if(pos_x > fin_x){
        dist = Math.ceil((pos_x-fin_x)/10);
        pos_x-=dist;
    }
    if(pos_y > fin_y){
        dist = Math.ceil((pos_y-fin_y)/10);
        pos_y-=dist;
    }
    if(pos_x < fin_x){
        dist = Math.ceil((fin_x-pos_x)/10);
        pos_x+=dist;
    }
    if(pos_y < fin_y){
        dist = Math.ceil((fin_y-pos_y)/10);
        pos_y+=dist;
    }
    element.style.left = pos_x+"px";
    element.style.top = pos_y+"px";
    const repeat = moveElement(element,fin_x,fin_y,interval);
    let movement = setInterval(repeat,interval);
    element.movement = movement;
}
function prepareSlideshow(){
    let intro = document.getElementById("intro");
    let slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    let preview = document.createElement("img");
    preview.src="images/slideshow.gif";
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);
}

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);