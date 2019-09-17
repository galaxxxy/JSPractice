$(function () {
    let $skins = $("#skin li");
    $skins.click(function(){
        switchSkin(this.id);
    });
    //选中初始皮肤
    $skins.parent().find("li:eq(0)").addClass("selected");
});
function switchSkin(skinName){
    $("#"+skinName).addClass('selected')
                   .siblings().removeClass('selected');
    $("#cssfile").attr('href','styles/skin/'+skinName+".css");
}