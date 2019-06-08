$(document).ready(function(){
    $("#reset").click(function(){
        $("*").removeAttr("style");
        $("div[class=none]").css("display","none");
    });
    $("input[type='button']").click(function(){
        // console.log($("#isreset").is(":checked"));
        if($("#isreset").is(":checked")) {
            $("#reset").click();
        }
    });
    function animateIt() {
		$("#mover").slideToggle("slow", animateIt);
	}
	animateIt();
});