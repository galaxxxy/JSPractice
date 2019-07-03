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
    if(!parentElement) return false;
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

    if(!document.getElementsByTagName("a")) return false;
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

//live.html
function stripeTables(){
    //条件检查
    if(!document.getElementsByTagName) return false;
    if(!document.getElementsByTagName("tbody")) return false;
    //获取table
    let tbodys = document.getElementsByTagName("tbody");
    //获取单数行添加样式
    for(let i = 0; i < tbodys.length; i++){
        let rows = tbodys[i].getElementsByTagName("tr");
        for(let j = 0; j < rows.length; j++){
            if(j%2 == 0){
                addClass(rows[j],"odd");
            }
        }
    }
}

function highlightRows(){
    //条件检查
    if(!document.getElementsByTagName) return false;
    if(!document.getElementsByTagName("tbody")) return false;
    //获取tbody
    let tbodys= document.getElementsByTagName("tbody");
    //为每行添加悬停事件:悬停使用新样式
    for(let i = 0; i < tbodys.length; i++){
        let rows = tbodys[i].getElementsByTagName("tr");
        for(let j = 0; j < rows.length; j++){
            rows[j].onmouseover = function(){
                rows[j].setAttribute("oldclassname",this.className);
                rows[j].className = "highlight";
            };
            rows[j].onmouseout = function(){
                rows[j].className = this.getAttribute("oldclassname");
                rows[j].removeAttribute("oldclassname");
            };
        }
    }
}

function displayAbbreviations(){
    //条件检查
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //获取table内所有abbr标签
    let tables = document.getElementsByTagName("table");
    if(!tables[0]) return false;
    let abbreviations = tables[0].getElementsByTagName("abbr");
    //创建标题
    let title = document.createElement("h3");
    let titleContent = document.createTextNode("Abbreviations");
    title.appendChild(titleContent);
    //创建定义列表
    let dl = document.createElement("dl");
    for(let i = 0; i < abbreviations.length; i++){
        let dt = document.createElement("dt");
        let dd = document.createElement("dd");
        let dtContent = document.createTextNode(abbreviations[i].lastChild.nodeValue);
        let ddContent = document.createTextNode(abbreviations[i].getAttribute("title"));
        dt.appendChild(dtContent);
        dd.appendChild(ddContent);
        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    //在文档中插入标题列表
    insertAfter(title,tables[0]);
    insertAfter(dl,title);
}

//contact.html
function focusLabels(){
    //条件检查
    if(!document.getElementsByTagName) return false;
    if(!document.getElementsByTagName("label")) return false;
    if(!document.getElementById) return false;
    //获取所有label
    let labels = document.getElementsByTagName("label");
    //给label建立点击事件
    for(let i = 0; i < labels.length; i++){
        labels[i].onclick = function(){
            //获取for属性
            let inputId = labels[i].getAttribute("for");
            //使id为for属性的input元素获得焦点 
            let targetInput = document.getElementById(inputId);
            targetInput.focus();
        }
    }
}

function isSupportPlaceholder(){
    let input = document.createElement("input");
    return "placeholder" in input;
}

function resetFields(whichForm){
    //条件检查
    // if(!isSupportPlaceholder()) return false;
    if(!whichForm.elements) return false;
    //遍历表单元素
    let elements = whichForm.elements;
    for(let i = 0; i < elements.length; i++){
        if(!elements[i].placeholder) continue;
        //获取占位符和文本值
        let placeholder = elements[i].placeholder;
        let value;
        //添加获得焦点的事件:清空占位符文本
        elements[i].onFocus = function(){
            //若表单元素的值与占位符相等 则清空
            value = elements[i].value;
            if(value == placeholder){
                this.className = "";
                value = "";
            }
        }
        //添加失去焦点的事件:添加占位符文本
        elements[i].onBlur = function(){
            //若表单元素的值为空 则添加占位符
            value = elements[i].value;
            if(value == ""){
                this.className = "placeholder";
                value = placeholder;
            }
        }
        //直接调用 设置placerholder
        elements[i].onBlur();
    }
}

function prepareForms(){
    //获取文档中所有form元素
    let forms = document.getElementsByTagName("form");
    //逐一使用resetFeild
    for(let i = 0; i < forms.length; i++){
        resetFields(forms[i]);
    }
}

addLoadEvent(prepareForms);
addLoadEvent(focusLabels);
addLoadEvent(displayAbbreviations);
addLoadEvent(highlightRows);
addLoadEvent(stripeTables);
addLoadEvent(preparePlaceholder);
addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);