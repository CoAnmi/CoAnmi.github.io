/**
 * 轮播图的制作
 */
window.addEventListener('load', function () {
    var ul = document.getElementById('swiper1')
    var liObj = ul.children
    var screen = document.querySelector('.swiper')
    var screenWidth = screen.offsetWidth
    var ol = document.getElementById('circle')
    var liObj1 = ol.getElementsByTagName('li')
    var arrow_left = document.querySelector('.arrow_left')
    var arrow_right = document.querySelector('.arrow_right')
    var index = 0
    var circle = 0
    var flag = true
    for (var i = 0; i < liObj.length - 1; i++) {
        var lzz = document.createElement('li')
        ol.appendChild(lzz)
        lzz.setAttribute('data-index', i)
        liObj1[index].style.backgroundColor = 'red'
        lzz.addEventListener('click', function () {
            index = this.getAttribute('data-index')
            animation(ul, -screenWidth * index)
            pt(index)
        })
    }
    arrow_left.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (index == 0) {
                index = liObj1.length
                ul.style.left = -index * screenWidth + 'px'
            }
            index--
            circle--
            animation(ul, -index * screenWidth, function () {
                flag = true
            })
            circle = circle < 0 ? liObj1.length - 1 : circle
            pt(circle)
        }
    })
    arrow_right.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (index == liObj1.length) {
                index = 0
                ul.style.left = '0px'
            }
            index++
            circle++
            animation(ul, -index * screenWidth, function () {
                flag = true
            })
            circle = circle == liObj1.length ? 0 : circle
            pt(circle)
        }
    })
    screen.addEventListener('mouseover', function () {
        arrow_left.style.display = 'block'
        arrow_right.style.display = 'block'
        clearInterval(timeId)
    })
    screen.addEventListener('mouseout', function () {
        arrow_left.style.display = 'none'
        arrow_right.style.display = 'none'
        timeId = setInterval(f1, 2000)
    })
    var timeId = setInterval(f1, 2000)

    function f1() {
        arrow_right.click()
    }

    function pt(index) {
        for (var i = 0; i < liObj1.length; i++) {
            liObj1[i].style.backgroundColor = ''
        }
        liObj1[index].style.backgroundColor = 'red'
    }
})
/**
 * banner右侧小图标
 */
window.addEventListener('load',function(){
    var infoArr=['机票','电影','游戏','彩票','加油站','酒店','地铁','众筹','理财','银行卡','白条']
    var divArr=document.querySelector('.newsflash_center').getElementsByTagName('div')
    var aArr=document.querySelector('.newsflash_center').getElementsByTagName('a')
    var index=0
    var index1=0
    for(var i=1;i<divArr.length;i++){
        if(i%4==0){
            index=0
            index1++
            divArr[i].style.backgroundPosition='-'+(19+62*index)+'px -'+(15+72*index1)+'px'
        }else{
            index++
            divArr[i].style.backgroundPosition='-'+(19+62*index)+'px -'+(15+72*index1)+'px'
        }
        aArr[i].innerHTML=infoArr[i-1]
    }
})