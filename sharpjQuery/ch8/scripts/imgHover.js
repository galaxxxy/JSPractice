$(function () {
    $("#jnBrandList li").each(function(index){
        let $img = $(this).find("img"),
            img_width = $img.width(),
            img_height = $img.height(),
            spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_width+'px;height:'+img_height+'px;" class="imageMask"></span>';
            $(spanHtml).appendTo(this);
    });
    $("#jnBrandList").find(".imageMask").live("hover",function(){
        $(this).toggleClass("imageOver");
    });
    //因为"imageMask"为动态创建因此使用live()方法绑定事件。也可以用delegate()方法来委派事件
    // $("#jnBrandContent").delegate(".imageMask","hover",function(){
    //     $(this).toggleClass("imageOver");
    // });
});