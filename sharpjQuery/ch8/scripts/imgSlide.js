$(function () {
    $("#jnBrandTab li a").click(function(){
        $(this)
            .parent().addClass("chos")
            .siblings().removeClass("chos");
            let index = $("#jnBrandTab li a").index($(this));
            // console.log(index);
        showBrandList(index);
    }).eq(0).click();
});
function showBrandList(index){
    let $brandList = $("#jnBrandList"),
        content_width = $brandList.find("li").outerWidth();
    content_width *= 4;
    $brandList.stop(true,false).animate({left:-(content_width*index)},1000);
}