/**
 * Created by LiBo on 2017/6/8.
 */
;(function($){
    $.fn.slide  = function(obj){
        /*参数的配置*/
        var a = {
            "selector":".ctr_s",
            "event":"click",
            "lisWidth":".main_banner ul li",
            "className":"prev_click",
            "active":"show",
            "ctr":".ctr a",
            "mainSlide":".main_banner ul",
            "mainLis":".main_banner ul li",
            "fr_className":"next_click",
            "scale":"focus",
            "caption":".caption",
            captionShow:"captionShow",
            "main_Img":".main_banner ul li img"
        };
        var b = $.extend(a,obj);
        /*
         * 实现左右按钮控制图片插件的封装
         * */
        var _index = 0;
        $(b.selector).on(b.event,function(){
            var Imgwidth = $(b.lisWidth).outerWidth();
            var speed = 4;
            if($(this).hasClass(b.className)){

                if(_index>0){
                    _index--
                    $(b.ctr).eq(_index).addClass(b.active).siblings().removeClass(b.active);
                }else{
                    _index = 3
                    $(b.ctr).eq(_index).addClass(b.active).siblings().removeClass(b.active);
                }
                $(b.mainSlide).css("marginLeft",-speed*Imgwidth)
                $(b.mainLis).slice(-speed).prependTo($(b.mainSlide))
                $(b.mainSlide).stop().animate({"marginLeft":"0px"},500)
            }else if($(this).hasClass(b.fr_className)){
                if(_index<3){
                    _index++

                    $(b.ctr).eq(_index).addClass(b.active).siblings().removeClass(b.active);
                }else{
                    _index = 0
                    $(b.ctr).eq(_index).addClass(b.active).siblings().removeClass(b.active);
                }

                $(b.mainSlide).animate({"marginLeft":-speed*Imgwidth},500,function(){
                    $(b.mainLis).slice(0,speed).appendTo($(b.mainSlide));
                    $(b.mainSlide).css("marginLeft","0px")
                })
            }
        });
        /*
         * 鼠标移入图片添加放大效果
         *
         * */
        $(b.lisWidth).hover(function(){
            var _index = $(this).index()
            $(b.main_Img).eq(_index).addClass(b.scale)
            $(b.caption).eq(_index).stop().addClass(b.captionShow)
        },function(){
            var _index = $(this).index()
            $(b.main_Img).eq(_index).removeClass(b.scale)
            $(b.caption).eq(_index).stop().removeClass(b.captionShow);
        })

    }
})(jQuery)