/**
 * 跳转页面输入框特效
 */
$(function () {
    $('#pageNumber').focus(function () {
        $(this).animate({
            width: 84
        }, 300).css('border-color', 'skyblue')
    }).blur(function () {
        $(this).animate({
            width: 50
        }, 300).css('border-color', '#666')
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
 * 购物车数量
 */
// $(function(){
//     setInterval(function(){
//         if(localStorage.getItem('goodsNumber')){
//             $('.shopcar .number').html(localStorage.getItem('goodsNumber'))
//         }else{
//             $('.shopcar .number').html(0)
//         }
//     },10)
// })
/**
 * 跳转页面
 */
window.addEventListener('load',function(){
    var register=document.querySelector('.register')
    var list_one=document.querySelector('.list_one')
    var mycar=document.querySelector('.mycar')
    register.addEventListener('click',function(){
        location.href='register.html'
        return false
    })
    mycar.addEventListener('click',function(){
        location.href='car.html'
        return false
    })
    list_one.addEventListener('click',function(){
        location.href='detail.html'
        return false
    })
})