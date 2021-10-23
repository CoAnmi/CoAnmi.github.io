/**
 *图片放大镜效果实现
 */
window.addEventListener('load', function () {
    var mask = document.querySelector('.mask')
    var picture = document.querySelector('.picture')
    var big_picture = document.querySelector('.big_picture')
    var addCar=document.querySelector('.addCar')
    var pictureW = picture.offsetWidth
    var pictureH = picture.offsetHeight
    var maskW = mask.offsetWidth
    var maskH = mask.offsetHeight
    var maxMoveX = pictureW - maskW
    var maxMoveH = pictureH - maskH

    mask.style.display = 'none'
    big_picture.style.display = 'none'
    picture.addEventListener('mouseover', function () {
        mask.style.display = 'block'
        big_picture.style.display = 'block'
        addCar.style.zIndex='-1'
        this.addEventListener('mousemove', function (e) {
            var spaceX = e.clientX - picture.offsetLeft - maskW
            var spaceY = e.clientY - picture.offsetTop - maskH - maskH / 2
            spaceX = spaceX <= maxMoveX ? spaceX : maxMoveX
            spaceX = spaceX >= 0 ? spaceX : 0
            spaceY = spaceY >= 0 ? spaceY : 0
            spaceY = spaceY <= maxMoveH ? spaceY : maxMoveH
            mask.style.left = spaceX + 'px'
            mask.style.top = spaceY + 'px'
            var imgW = ((big_picture.offsetWidth) * (picture.offsetWidth)) / (mask.offsetWidth)
            big_picture.children[0].style.width = imgW + 'px'
            var x = (spaceX * (imgW - (big_picture.offsetWidth))) / maxMoveX
            var y = (spaceY * ((big_picture.children[0].offsetHeight) - (big_picture.offsetHeight))) / maxMoveH
            big_picture.children[0].style.marginLeft = -x + 'px'
            big_picture.children[0].style.marginTop = -y + 'px'
        })
        this.addEventListener('mousewheel',function(){
            return false
        })
    })
    picture.addEventListener('mouseout', function () {
        mask.style.display = 'none'
        big_picture.style.display = 'none'
        addCar.style.zIndex='0'
    })
})
/**
 *顶部导航栏下拉列表特效 
 */
$(function () {
    $('.drop_down_mypyg').mouseenter(function () {
        $('.header,.nav').css('zIndex', '-1')
        $('.my_pyg').stop().slideDown(200)
        $(this).css({
            'backgroundColor': '#fff',
            border: '1px solid #ccc',
            borderTop: 'none',
            borderBottom: 'none',
        })
    }).mouseleave(function () {
        $('.my_pyg').stop().slideUp(200, function () {
            $('.header,.nav').css('zIndex', '0')

        })
        $(this).css({
            'backgroundColor': '',
            border: 'none',
        })
    })
})
/**
 * 更换图片
 */
$(function () {
    var index = 0
    $('.picture_list li').click(function () {
        $(this).addClass('current').siblings().removeClass('current')
        var src = $(this).children().attr('src')
        $('.picture').children('img').attr('src', src)
        $('.big_picture').children().attr('src', src)
    })
    $('.arrow_next').click(function () {
        if (index < 0) {
            index = $('.picture_list li').length - 1
            $('.picture_list li').eq(index).addClass('current').siblings().removeClass('current')
            var src = $('.picture_list li').eq(index).children().attr('src')
            $('.picture').children('img').attr('src', src)
            $('.big_picture').children().attr('src', src)
        }
        index--
        $('.picture_list li').eq(index).addClass('current').siblings().removeClass('current')
        var src = $('.picture_list li').eq(index).children().attr('src')
        $('.picture').children('img').attr('src', src)
        $('.big_picture').children().attr('src', src)
    })
    $('.arrow_pre').click(function () {
        if (index >= $('.picture_list li').length - 1) {
            index = 0
            $('.picture_list li').eq(index).addClass('current').siblings().removeClass('current')
            var src = $('.picture_list li').eq(index).children().attr('src')
            $('.picture').children('img').attr('src', src)
            $('.big_picture').children().attr('src', src)
        }else{
            index++
            $('.picture_list li').eq(index).addClass('current').siblings().removeClass('current')
            var src = $('.picture_list li').eq(index).children().attr('src')
            $('.picture').children('img').attr('src', src)
            $('.big_picture').children().attr('src', src)
        }
    })
})
/**
 * tab栏实现
 */
$(function(){
    $('.shop_detail_right .title li').click(function(){
        var index=$(this).index()
        $(this).addClass('current').siblings().removeClass('current')
        $('.goods_introduce').eq(index).stop().show().siblings().stop().hide()
    })
    $('#more_datas').click(function(){
        if($('.lzz').hasClass('oym')){
            $('.lzz').stop().slideUp(300).removeClass('oym')
            $(this).html('查看更多参数<i></i>')
        }else{
            $('.lzz').stop().slideDown(300).addClass('oym')
            $(this).html('关闭更多参数<i></i>')
        }
        return false
    })
})
/**
 * 购物车增加减少
 */
$(function(){
    $('.add').click(function(){
        $('.reduce').prop('disabled',false)
        var num=Number($('#goods_number').val())
        num++
        $('#goods_number').val(num)
    })
    $('.reduce').click(function(){
        var num=Number($('#goods_number').val())
        if(num<=1){
            $(this).prop('disabled',true)
            $('#goods_number').val(1)
        }else{
            $(this).prop('disabled',false)
            num--
            $('#goods_number').val(num)
        }
    })
    $('.add_number').click(function(){
        var num=Number($('#goods_number').val())
        var oldNum=Number(localStorage.getItem('goodsNumber'))
        num=num+oldNum
        localStorage.setItem('goodsNumber',num)
        $('.shopcar .number').html(localStorage.getItem('goodsNumber'))
    })
})
window.addEventListener('load',function(){
    var register=document.querySelector('.register')
    var mycar=document.querySelector('.mycar')
    register.addEventListener('click',function(){
        location.href='register.html'
        return false
    })
    mycar.addEventListener('click',function(){
        location.href='car.html'
        return false
    })
})