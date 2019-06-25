function stripeTables(){
    var table = document.getElementsByTagName("table");
    for(var i = 0; i < table.length ; i++){
        var row = table[i].getElementsByTagName("tr");
        for(var j = 0; j < row.length; j++){
            if(j%2 != 0){
                // row[j].style.backgroundColor = "#ffc";
                row[j].setAttribute("class","odd");
            }
        }
    }
}
addLoadEvent(stripeTables);