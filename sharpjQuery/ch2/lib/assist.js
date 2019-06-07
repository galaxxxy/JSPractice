$(document).ready(function(){
    $("#reset").click(function(){
        $("*").removeAttr("style");
        $("div[class=none]").css("display","none");
    });
    $("input[type=button]").click(function(){
        if ($("#isrest").is(":checked")) {
            $("*").removeAttr("style");
            $("div[class=none]").css("display","none");
        }
    });
    function animateIt() {
		$("#mover").slideToggle("slow", animateIt);
	}
	animateIt();
});