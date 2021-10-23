/**
 * 动画函数
 */
function animation(ele, target, fn) {
    clearInterval(ele.timeId)
    ele.timeId = setInterval(function () {
        var current = ele.offsetLeft
        var step = (target - current) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        current += step
        if (current == target) {
            clearInterval(ele.timeId)
            if (fn) {
                fn()
            }
        }
        ele.style.left = current + 'px'
    }, 10)
}