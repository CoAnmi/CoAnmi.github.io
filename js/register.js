/**
 * 注册验证实现
 */
$(function(){
    $('#getCode').click(function(){
        var flag=/^1[3456789]\d{9}$/.test($('#phone').val())//正则表达式，手机号第一位必须是1，第二位不能是0和1和2，长度是11位
        var index=60
        if($('#phone').val()==''){
            $('#phone').siblings('em').css('backgroundImage','url(../img/error.png)').siblings('span').html('请输入手机号').css('color','red')
        }else{
            if(flag){
                $('#phone').siblings('em').css('backgroundImage','url(../img/success.png)').siblings('span').html('恭喜你输入正确').css('color','green')
                var timeId=setInterval(function(){
                    index--
                    $(this).html('验证码已发送至该手机('+index+')').attr('disabled',true)
                    if(index<=0){
                        clearInterval(timeId)//倒计时为0后，重置获取验证码
                        $(this).html('获取验证码').attr('disabled',false)
                    }
                }.bind(this),1000)
            }else{
                $('#phone').siblings('em').css('backgroundImage','url(../img/error.png)').siblings('span').html('手机号码格式错误，请重新输入').css('color','red')
            }
        }
        return false
    })
    $('#code').blur(function(){
        var flag=/^[0-9a-z]{6}$/.test($(this).val().toLocaleLowerCase())
        if(flag){
            $(this).siblings('em').css('backgroundImage','url(../img/success.png)').siblings('span').html('恭喜你输入正确').css('color','green')
        }else{
            $(this).siblings('em').css('backgroundImage','url(../img/error.png)').siblings('span').html('验证码错误，请重新输入').css('color','red')
        }
    })
    $('#password').keyup(function(){
       $('#grade').children()[0].className=''
       var para=$(this).val()
       if(para.length>4){
           var grade=getGrade(para)
           $('#grade').children()[0].className='grade'+grade+''
           $(this).parent().siblings('em').css('backgroundImage','url(../img/success.png)').siblings('span').html('密码长度正确').css('color','green')
       }else{
        $(this).parent().siblings('em').css('backgroundImage','url(../img/error.png)').siblings('span').html('密码长度不够').css('color','red')
       }
    })
    $('#password').next().click(function(){
        if($('#password').attr('type')=='password'){
            $(this).css('backgroundImage','url(../img/open.png)')
            $('#password').attr('type','text')
        }else{
            $(this).css('backgroundImage','url(../img/close.png)')
            $('#password').attr('type','password')
        }
    })
    function getGrade(para){
        var g=0
        if(/[0-9]/.test(para)){
            g++
        }
        if(/[a-zA-Z]/.test(para)){
            g++
        }
        if(/[\W]/.test(para)){
            g++
        }
        return g
    }
    $('#checkPassword').blur(function(){
        if($(this).val()===$('#password').val()){
            $(this).parent().siblings('em').css('backgroundImage','url(../img/success.png)').siblings('span').html('密码验证正确').css('color','green')
        }else{
            $(this).parent().siblings('em').css('backgroundImage','url(../img/error.png)').siblings('span').html('密码不一致').css('color','red')
        }
    })
    $('#checkPassword').next().click(function(){
        if($('#checkPassword').attr('type')=='password'){
            $(this).css('backgroundImage','url(../img/open.png)')
            $('#checkPassword').attr('type','text')
        }else{
            $(this).css('backgroundImage','url(../img/close.png)')
            $('#checkPassword').attr('type','password')
        }
    })
})