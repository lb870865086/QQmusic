/**
 * Created by LiBo on 2017/6/6.
 */
$(function(){

/*
* 封装两个方法用于显示鼠标移入显示控制按钮
* */
    var show = function(prev,next){
        $(prev).show();
        $(next).show();

    }
    var slideOn = function(prev,next){

        $(prev).animate({"width":"80px","backgroundColor":"#31c27c"},200)
        $(next).animate({"width":"80px","backgroundColor":"#31c27c"},200)
    }
    var slideOut = function(prev,next){
        $(prev).animate({"width":"70px","backgroundColor":" rgba(166,166,166,.5)"},200)
        $(next).animate({"width":"70px","backgroundColor":" rgba(166,166,166,.5)"},200)
    }
    var hide = function(prev,next){
        $(prev).hide();
        $(next).hide();
    }
    //调用方法
    $(".first_content").hover(function(){
        show($(".prev_click"),$(".next_click"))
    },function(){
        hide($(".prev_click"), $(".next_click"))

    })
    $(".prev").hover(function(){
       slideOn($(".prev_click"))
    },function(){
        slideOut($(".prev_click"))
    });
    $(".next").hover(function(){
        slideOn($(".next_click"))
    },function(){
        slideOut($(".next_click"))
    })

    /*
    精彩推荐部分图片展示特效
    *
    * */
    $(".second_content").hover(function(){

        show($(".prevs_click"),$(".nexts_click"))
    },function(){
        hide($(".prevs_click"), $(".nexts_click"))

    })
    $(".prevs").hover(function(){
        slideOn($(".prevs_click"))
    },function(){
        slideOut($(".prevs_click"))
    });
    $(".nexts").hover(function(){
        slideOn($(".nexts_click"))
    },function(){
        slideOut($(".nexts_click"))
    })

    /*第四屏鼠标移入效果调用*/
    $(".four_content").hover(function(){

        show($(".four_ctr_prev"),$(".four_ctr_next"))
    },function(){
        hide($(".four_ctr_prev"), $(".four_ctr_next"))

    })
    $(".four_prev").hover(function(){
        slideOn($(".four_ctr_prev"))
    },function(){
        slideOut($(".four_ctr_prev"))
    });
    $(".four_next").hover(function(){
        slideOn($(".four_ctr_next"))
    },function(){
        slideOut($(".four_ctr_next"))
    })




//$(".four_main_banner ul li").even(function(){
//    $(this).css({
//        "background":"#666"
//    })
//})



})