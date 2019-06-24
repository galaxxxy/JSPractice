function addLoadEvent(func){
    var oldOnLoad = window.onload;
    if(oldOnLoad == null){
        window.onload = function(){
            func();
        }
    } else {
        window.onload = function(){
            func();
            oldOnLoad();
        }
    }
}