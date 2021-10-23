/**
 * 全选和全部选
 */
$(function () {
    $('.checkAll').change(function () {
        var flag = $(this).prop('checked')
        if (flag) {
            $('.goods_lzz').children().html($('.checkone').length)
            f1($('.total_price').children(), true,0)
        } else {
            $('.goods_lzz').children().html(0)
            $('.oym').html('￥' + 0)
        }
        $('.checkone').prop('checked', $(this).prop('checked'))
        $('.checkAll').prop('checked', $(this).prop('checked'))
    })
    $('.checkone').change(function () {
        var flag = $(this).prop('checked')
        var count = $('.goods_lzz').children().html()
        if (flag) {
            count++
            $('.goods_lzz').children().html(count)
            f1($(this).parent().siblings('.total_price').children(), true,0)
        } else {
            count--
            $('.goods_lzz').children().html(count)
            f1($(this).parent().siblings('.total_price').children(), false,0)
        }
        if ($('.checkone').length == $('.checkone:checked').length) {
            $('.checkAll').prop('checked', true)
        } else {
            $('.checkAll').prop('checked', false)
        }
    })

    function f1(ele, flag, price) {
        var old_price = Number($('.oym').text().split('￥')[1])
        var total_price = ele.text().split('￥')
        var sum = 0
        for (var i = 1; i < total_price.length; i++) {
            sum += Number(total_price[i])
        }
        if (flag) {
            var fl = sum  + old_price
        } else {
            var fl = old_price - sum
        }
        $('.oym').html('￥' + fl.toFixed(2))
    }
    /**
     * 算钱
     */

    $('.add').click(function () {
        var price = $(this).parent().prev().children().html()
        console.log(price);
        price = price.split('￥')[1]
        $(this).siblings('.reduce').attr('disabled', false)
        var count = $(this).prev().val()
        count++
        var total_price = price * count
        $(this).parent().next().children().html('￥' + total_price.toFixed(2))
        $(this).prev().val(count)
        if ($(this).parents('tr').find('.checkone').prop('checked')) {
            f1($(this).parent().prev().children(), true,Number(price))
        }
    })
    $('.reduce').click(function () {
        var price = $(this).parent().prev().children().html()
        price = price.split('￥')[1]
        $(this).siblings('.reduce').attr('disabled', false)
        var count = $(this).next().val()
        if (count <= 1) {
            $(this).attr('disabled', true)
        } else {
            count--
            var total_price = price * count
            $(this).parent().next().children().html('￥' + total_price.toFixed(2))
            $(this).next().val(count)
            if ($(this).parents('tr').find('.checkone').prop('checked')) {
                f1($(this).parent().prev().children(), false,Number(price))
            }
        }
    })
    $('.remove_goods').click(function () {
        $(this).parents('tr').remove()
        return false
    })
    $('.delCheck').click(function(){
        $('.checkone:checked').parents('tr').remove()
        return false
    })
    $('.delAll').click(function(){
        $('.goods_display').parent('tbody').remove()
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