function highlightRows(){
    var table = document.getElementsByTagName("table");
    for(var i = 0; i < table.length ; i++){
        var row = table[i].getElementsByTagName("tr");
        for(var j = 0; j < row.length; j++){
            row[j].onmouseover = function(){
                this.style.fontWeight = "bold";
            }
            row[j].onmouseout = function(){
                this.style.fontWeight = "normal";
            }
        }
    }
}
addLoadEvent(highlightRows);