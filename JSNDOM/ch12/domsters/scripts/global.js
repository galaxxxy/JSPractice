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
    const parentElement = targetElement.parentNode;
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
//index.html
function highlightPage(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementsByTagName("nav")) return false;

    let nav = document.getElementsByTagName("nav");
    let links = nav[0].getElementsByTagName("a");
    for(let i = 0; i < links.length; i++){
        let linkurl = links[i].getAttribute("href");
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
    // element.movement = setInterval(moveElement,interval,element,fin_x,fin_y,interval);
    element.movement = setInterval(function(){
        moveElement(element,fin_x,fin_y,interval);
    },interval);
}
function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.createElement) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("intro")) return false;

    let intro = document.getElementById("intro");
    let slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    let preview = document.createElement("img");
    preview.src="images/slideshow.gif";
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);

    let frame = document.createElement("img");
    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("alt","");
    frame.setAttribute("id","frame");
    slideshow.appendChild(frame);
    insertAfter(slideshow,intro);

    if(!document.getElementsByTagName("a")) return flase;
    const links = document.getElementsByTagName("a");
    for(let i = 0; i < links.length; i++){
        links[i].onmouseover = function(){
            let linkhref = links[i].getAttribute("href");
            if(linkhref.indexOf("index.html") != -1){
                moveElement(preview,0,0,5);
            }
            if(linkhref.indexOf("about.html") != -1){
                moveElement(preview,-150,0,5);
            }
            if(linkhref.indexOf("photos.html") != -1){
                moveElement(preview,-300,0,5);
            }
            if(linkhref.indexOf("live.html") != -1){
                moveElement(preview,-450,0,5);
            }
            if(linkhref.indexOf("contact.html") != -1){
                moveElement(preview,-600,0,5);
            }
        }
    }
}

//about.html
function showSection(id){
    const section = document.getElementsByTagName("section");
    for(let i = 0; i < section.length; i++){
        if(section[i].id == id){
            section[i].style.display = "block";
        } else {
            section[i].style.display = "none";
        }
    }
}

function prepareInternalnav(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementsByTagName("section")) return false;

    const article = document.getElementsByTagName("article");
    const section = article[0].getElementsByTagName("section");
    const nav = document.getElementsByTagName("nav");
    if(!nav[1]) return false;
    const links = nav[1].getElementsByTagName("a");
    //隐藏section标签
    for(let i = 0; i < section.length; i++){
        section[i].style.display = "none";
    }
    //给li添加点击事件：点击展示相应section
    for(let i = 0; i < links.length; i++){
        links[i].onclick = function(){
            let hrefArray = links[i].href.split("#");
            showSection(hrefArray[1]);
            return false;
        };
    }
}
//photos.html
function showPic(whichPic){
    let source = whichPic.href;
    let title = "";
    let placeholder = document.getElementById("placeholder");
    let description = document.getElementById("description");
    //改变图片
    placeholder.src = source;
    //改变描述
    if(whichPic.title){
        title = whichPic.title;
    }
    description.lastChild.nodeValue = title;
}
function preparePlaceholder(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById("imagegallery")) return false;

    let gallery = document.getElementById("imagegallery");
    let links = gallery.getElementsByTagName("a");
    //创建描述语句和图片占位符
    let placeholder = document.createElement("img");
    let description = document.createElement("p");
    let textNode = document.createTextNode("Choose a image");
    placeholder.src = "images/placeholder.gif";
    placeholder.alt = "my image gallery";
    placeholder.id = "placeholder";
    description.id = "description";
    description.appendChild(textNode);
    //插入描述语句和占位符
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
    //为缩略图添加点击事件
    for(let i = 0; i < links.length; i++){
        links[i].onclick = function(){
            showPic(links[i]);
            return false;
        }
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);