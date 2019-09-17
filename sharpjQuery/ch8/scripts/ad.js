$(function () {
    let $imgrolls = $('#jnImageroll div a'),
        len = $imgrolls.length,
        index = 0,
        adTimer = null;
    $imgrolls.css("opacity",'0.7');
    $imgrolls.mouseover(function(){
        index = $imgrolls.index(this);
        showImg(index);
    }).eq(0).mouseover();
    $('#jnImageroll').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(() => {
            showImg(index);
            if(index == len-1){
                index = 0;
            }else{
                index++;
            }
        }, 4000);
    });
});
function showImg(index){
    let $rollobj = $('#jnImageroll'),
        $rolllist = $rollobj.find('div a'),
        newhref = $rolllist.eq(index).attr('href');
    $('#JS_imgWrap').attr('href',newhref)
                    .find('img').eq(index).stop(true,true).fadeIn()
                    .siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
             .eq(index).addClass('chos').css("opacity",'1');
}