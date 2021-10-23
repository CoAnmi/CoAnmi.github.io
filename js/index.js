/**
 *顶部导航栏下拉列表特效 
 */
// jquery事件的用法
$(function () {
	// 当鼠标进入（穿过）导航栏的内容时，执行function（）
    $('.drop_down_mypyg').mouseenter(function () {
        $('.header,.nav').css('zIndex', '-1')//改变这个元素的层叠顺序，置为-1，也就是将它放到下面
        $('.my_pyg').stop().slideDown(200)//这个下拉菜单出现效果的作用时间，0.2s
		// 上面的stop（）表示停止当前正在运行的动画效果
        $(this).css({//这里的操作均是对对应导航栏的部分进行的操作，而不是下拉列表
            'backgroundColor': '#fff',
			// 下面这个border是对应导航栏的部分，而不是下拉列表的border
            border: '1px solid #ccc',
            borderTop: 'none',
            borderBottom: 'none',
        })
    }).mouseleave(function () {//当鼠标移出的时候
        $('.my_pyg').stop().slideUp(200, function () {//鼠标移出的时候，下拉菜单是上滑的，而不是一下就没的
            $('.header,.nav').css('zIndex', '0')//将刚刚放到下面的原本的页面再拿上来，也就是将层叠次序置为0
        })
        $(this).css({
            'backgroundColor': '',
            border: 'none',
        })
    })
})
/**
 * 查询框的默认值变化
 */
var arr = ['iphone12', '小米手机', '蓝牙耳机', '键鼠套装', '笔记本电脑', '201820222贾冕', '自然堂套装', '移动硬盘']
$(function () {
    var i = 0//设置一个变量用于判断当前查询框内的值是哪一个
    setInterval(function () {
		//prop() 方法设置或返回被选元素的属性和值。当该方法用于返回属性值时，则返回第一个匹配元素的值。
        $('#search').prop('placeholder', arr[i + 1])
        i++
        if (i > arr.length) {
            i = -1
        }
    }, 6000)//每六秒切换一次
})
/**
 * nav部分展示特效
 */
$(function () {
    $('.nav .content li').mouseenter(function () {//鼠标放上去之后，图片不再进行轮播
        $('.main').css('zIndex', -1)//将当前显示的图形隐藏
        $(this).children('.goods_detail_left').stop().show(200)//先清除，后执行相关动画，没有stop鼠标放上去也会继续轮播
    }).mouseleave(function () {//鼠标移开之后，恢复轮播
        $('.main').css('zIndex', 0)//恢复当前应当显示的图形
        $(this).children('.goods_detail_left').stop().hide(200)//先清除，后隐藏相关动画
    })
})
/**
 * 右侧边栏特效
 */
window.addEventListener('load', function () {
    var recommend = document.querySelector('.recommend')
    var aside_right = document.querySelector('.aside_right')
    var one = document.querySelector('.one')
    var two = document.querySelector('.two')
    var footer = document.querySelector('.footer')
    var liArr = aside_right.getElementsByTagName('li')//获取tagname为li的标签
    document.addEventListener('scroll', function () {
        var topObj = getScroll().top//这个getscroll被重新封装了，在下面93行
		//下面这个函数的主要功能是，随着页面向下滚动，右侧边栏对应的位置的文字会变成红色，用来标识用户当前浏览的位置
        if (topObj >= recommend.offsetTop && topObj < one.offsetTop) {
            aside_right.style.position = 'fixed'
            aside_right.style.top = '60px'
            aside_right.style.right = '30px'
            for (var i = 0; i < liArr.length - 3; i++) {
                liArr[i].children[0].style.color = ''
            }
            liArr[0].children[0].style.color = 'red'
        } else if (topObj >= (one.offsetTop) && topObj < two.offsetTop) {
            for (var i = 0; i < liArr.length - 3; i++) {
                liArr[i].children[0].style.color = ''
            }
            liArr[1].children[0].style.color = 'red'
        } else if (topObj >= (two.offsetTop) && topObj < footer.offsetTop) {
            for (var i = 0; i < liArr.length - 3; i++) {
                liArr[i].children[0].style.color = ''
            }
            liArr[2].children[0].style.color = 'red'
        } else {
            aside_right.style.position = 'absolute'
            aside_right.style.top = '674px'
            aside_right.style.right = '30px'
        }
    })
})

function getScroll() {//获取浏览器已经移动的位置
    return {
        left: window.pageXOffset || document.body.scrollTop || document.documentElement.scrollTop,
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    }
}
/**
 * 返回顶部实现
 */
$(function () {
	//通过点击进行操作
	//下面这个函数的功能是实现点击回到对应的位置，比如回到顶部，或者点击今日秒杀回到‘整点秒杀’位置
    $('#backTop').click(function () {
        animation1(document.documentElement, 0)
    })

    $('.aside_right li').eq(0).click(function () {
        animation1(document.documentElement, Math.ceil($('.recommend')[0].offsetTop + 10))
    })
    $('.aside_right li').eq(1).click(function () {
        animation1(document.documentElement, Math.ceil($('.one')[0].offsetTop + 10))
    })
    $('.aside_right li').eq(2).click(function () {
        animation1(document.documentElement, Math.ceil($('.two')[0].offsetTop + 10))
    })

    function animation1(ele, target) {
        clearInterval(ele.timeId)
        ele.timeId = setInterval(function () {
            var current = Math.ceil(ele.scrollTop)
            console.log(current);
            var step = (target - current) / 10
			//ceil向上取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            console.log(step);
            current += step
            console.log(current);
            if (current == target) {
                console.log("object");
                ele.scrollTop = target
                clearInterval(ele.timeId)
            }
            ele.scrollTop = current//直接把current赋值给 ele.scrollTop，这样操作比较简单，节省代码量
        }, 20)

    }
})
//添加事件监听
window.addEventListener('load', function () {
    var register = document.querySelector('.register')
    var phone = document.querySelector('.phone')
    var mycar = document.querySelector('.mycar')
	//鼠标点击下面相关监听时，跳转到相关页面
    register.addEventListener('click', function () {
        location.href = 'module/register.html'
        return false
    })
    phone.addEventListener('click', function () {
        location.href = 'module/list.html'
        return false
    })
    mycar.addEventListener('click', function () {
        location.href = 'module/car.html'
        return false
    })
})
/*
懒加载的相关介绍
分tab的懒加载。判断tab把下面的图片有没加载过。
根据loaded属性判断，还要对非当前tab所属的图片进行class lazy去掉。
对已加载的loaded为true的图片，不加lazy属性
注意lazyload.init()的执行时机，如果在dom ready阶段执行，
会下载所有图片，不能实现懒加载。要在winow.onload完成这个阶段去执行。
*/
$(function () {
    lazyLoadInit({
        showTime: 1100,
        onLoadBackEnd: function (i, e) {
            console.log("onLoadBackEnd:" + i);
        },
        onLoadBackStart: function (i, e) {
            console.log("onLoadBackStart:" + i);
        }
    });
})