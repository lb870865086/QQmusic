

//-------------------------------------------------------------------------//
(function ($) {
    // 创建构造函数
    function Slide(ele, options) {
        this.$ele = $(ele)//this. 构造函数的实例对象
        this.options = $.extend({
            speed: 3000,
            delay: 3000
        }, options)//拓展
        this.states = [

            { '&zIndex': 1, width: 608, height: 243, top: 37, left: 50 },
            { '&zIndex': 2, width: 608, height: 243, top: 37, left: 50 },
            { '&zIndex': 3, width: 608, height: 243, top: 37, left: 50 },
            { '&zIndex': 4, width: 751, height: 300, top: 0, left: 250 },
            { '&zIndex': 3, width: 608, height: 243, top: 37, left: 750},
            { '&zIndex': 2, width: 608, height: 243, top: 37, left: 950 },
            { '&zIndex': 1, width: 608, height: 243, top: 37, left: 950 },

        ]

        this.lis = this.$ele.find('li')
        this.interval
        var _index = 0
        // 点击切换到下一张

       $('.nexts_click').on('click', function () {
            _index++
            this.changeIndex(_index)
            this.stop()
            this.next()
            this.play()
        }.bind(this))
        // 点击切换到上一张
      $('.prevs_click').on('click', function () {
            this.stop()
            this.prev()
            this.play()
        }.bind(this))
        this.move()
        // 让轮播图开始自动播放
        this.play()
    }


    Slide.prototype = {


        // 原型是一个对象，所以写成一个花括号

        // move()方法让轮播图到达states指定的状态
        // <1>当页面打开时将轮播图从中心点展开
        // <2>当轮播图已经展开时，会滚动轮播图(需要翻转states数组中的数据)
        move: function () {

            this.lis.each(function (i, el) {
                $(el)
                    .css('z-index', this.states[i]['&zIndex'])
                    .finish().animate(this.states[i], 500)
                    // .stop(true,true).animate(states[i], 1000)

            }.bind(this))
        },
        // 让轮播图切换到下一张
        next: function () {
            this.states.unshift(this.states.pop())
            this.move()
        },
        changeIndex:function(_index){

            if(_index<$(".ctrs").length){
                _index++
                $(".ctrs a").eq(_index).addClass("show").siblings().removeClass("show")
            }else{
                _index = 0
                $(".ctrs a").eq(_index).addClass("show").siblings().removeClass("show")
            }
        },
        // 让轮播图滚动到上一张
        prev: function () {

            this.states.push(this.states.shift())
            this.move()
        },
        play: function () {
            var _this = this;

            this.interval = setInterval(function () {//这个this指window
                // setInterval、setTimeOut 中的this指向window

                // states.unshift(states.pop())       //从后往前走
                // states.push(states.shift())     //从前往后走

                _this.next()



            },5000)
        },
        // 停止自动播放
        stop: function () {
            // var _this = this
            clearInterval(this.interval)
        }

    }
    $.fn.zySlide = function (options) {
        this.each(function (i, ele) {
            new Slide(ele, options)
        })
        return this
    }
})(jQuery)
