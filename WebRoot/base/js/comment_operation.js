$(function () {
    /*调用插件，监听评论输入框的大小与字数*/
    <!--textarea高度自适应-->
    // $('.content').flexText();


    <!--点击评论创建评论条  $('.commentAll').on('click', '.plBtn', function () {-->
    $('.kjc_content_container').on('click', '.commentAll .plBtn', function () {
        var myDate = new Date();
        //获取当前年
        var year = myDate.getFullYear();
        //获取当前月
        var month = myDate.getMonth() + 1;
        //获取当前日
        var date = myDate.getDate();
        var h = myDate.getHours();       //获取当前小时数(0-23)
        var m = myDate.getMinutes();     //获取当前分钟数(0-59)
        if (m < 10) m = '0' + m;
        var s = myDate.getSeconds();
        if (s < 10) s = '0' + s;
        var now = year + '-' + month + "-" + date + " " + h + ':' + m + ":" + s;
        //获取输入内容
        var oSize = $(this).siblings('.flex-text-wrap').find('.comment-input').val();
        //        console.log(oSize);
        //动态创建评论模块

        oHtml = '<div class="comment-show-con clearfix"><div class="comment-show-con-img pull-left"><a href="#" title="用户名"><img src="images/header-img-comment_03.png" alt="" title="用户名"></a></div> <div class="comment-show-con-list pull-left clearfix"><div class="pl-text clearfix"> <a href="#" class="comment-size-name">David Beckham : </a> <span class="my-pl-con">&nbsp;' + oSize + '</span> </div> <div class="date-dz"> <span class="date-dz-left pull-left comment-time">' + now + '</span> <div class="date-dz-right pull-right comment-pl-block"><a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">666</i>)</a> </div> </div><div class="hf-list-con"></div></div> </div>';
        if (oSize.replace(/(^\s*)|(\s*$)/g, "") != '') {
            $(this).parents('.reviewArea ').siblings('.comment-show').prepend(oHtml);
            $(this).siblings('.flex-text-wrap').find('.comment-input').prop('value', '').siblings('pre').find('span').text('');
        }
    });

    <!--点击回复动态创建回复块$('.comment-show').on('click', '.pl-hf', function () {-->
    $('.kjc_content_container').on('click', '.comment-show .pl-hf', function () {
        //获取回复人的名字
        var fhName = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();
        //回复@
        var fhN = '回复@' + fhName;
        //var oInput = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.hf-con');
        var fhHtml = '<div class="hf-con pull-left"> <textarea class="content comment-input hf-input" placeholder="" onkeyup="keyUP(this)"></textarea> <a href="javascript:;" class="hf-pl">评论</a></div>';
        //显示回复
        /*下面的if判断块是为了第一次点击回复就弹出回复框，第二次点击回复就收起回复框*/
        if ($(this).is('.hf-con-block')) {//第一次点击时候，有这个class名，就弹出回复框，然后移除这个class名，第二次点击的时候就没有这个class名，就收起回复框，并且补加上class名，下次点击时候就又有class名了
            $(this).parents('.date-dz-right').parents('.date-dz').append(fhHtml);
            $(this).removeClass('hf-con-block');
            $(this).addClass('font_bold')
            $('.content').flexText();
            $(this).parents('.date-dz-right').siblings('.hf-con').find('.pre').css('padding', '6px 15px');
            //console.log($(this).parents('.date-dz-right').siblings('.hf-con').find('.pre'))
            //input框自动聚焦
            $(this).parents('.date-dz-right').siblings('.hf-con').find('.hf-input').val('').focus().val(fhN);
        } else {
            $(this).addClass('hf-con-block');
            $(this).removeClass('font_bold')
            $(this).parents('.date-dz-right').siblings('.hf-con').remove();
        }
    });

    <!--评论回复块创建 $('.comment-show').on('click', '.hf-pl', function () {-->
    $('.kjc_content_container').on('click', '.comment-show .hf-pl', function () {
        var oThis = $(this);
        var myDate = new Date();
        //获取当前年
        var year = myDate.getFullYear();
        //获取当前月
        var month = myDate.getMonth() + 1;
        //获取当前日
        var date = myDate.getDate();
        var h = myDate.getHours();       //获取当前小时数(0-23)
        var m = myDate.getMinutes();     //获取当前分钟数(0-59)
        if (m < 10) m = '0' + m;
        var s = myDate.getSeconds();
        if (s < 10) s = '0' + s;
        var now = year + '-' + month + "-" + date + " " + h + ':' + m + ":" + s;
        //获取输入内容
        var oHfVal = $(this).siblings('.flex-text-wrap').find('.hf-input').val();
//        console.log(oHfVal)
        var oHfName = $(this).parents('.hf-con').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();
        var oAllVal = '回复@' + oHfName;
        if (oHfVal.replace(/^ +| +$/g, '') == '' || oHfVal == oAllVal) {

        } else {
            $.getJSON("json/pl.json", function (data) {
                var oAt = '';
                var oHf = '';
                $.each(data, function (n, v) {
                    delete v.hfContent;
                    delete v.atName;
                    var arr;
                    var ohfNameArr;
                    if (oHfVal.indexOf("@") == -1) {
                        data['atName'] = '';
                        data['hfContent'] = oHfVal;
                    } else {
                        arr = oHfVal.split(':');
                        ohfNameArr = arr[0].split('@');
                        data['hfContent'] = arr[1];
                        data['atName'] = ohfNameArr[1];
                    }

                    if (data.atName == '') {
                        oAt = data.hfContent;
                    } else {
                        oAt = '回复<a href="#" class="atName">@' + data.atName + '</a> : ' + data.hfContent;
                    }
                    oHf = data.hfName;
                });
                var oHtml = '<div class="all-pl-con"><div class="pl-text hfpl-text clearfix"><a href="#" class="comment-size-name">我的名字 : </a><span class="my-pl-con">' + oAt + '</span></div><div class="date-dz"> <span class="date-dz-left pull-left comment-time">' + now + '</span> <div class="date-dz-right pull-right comment-pl-block"> <a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">666</i>)</a> </div> </div></div>';

                /*       var oHtml = '<div class="all-pl-con">' +
                           '<div class="pl-text hfpl-text clearfix">' +
                           '<a href="#" class="comment-size-name">我的名字 : </a>' +
                           '<span class="my-pl-con">' + oAt + '</span></div>' +
                           '<div class="date-dz"> <span class="date-dz-left pull-left comment-time">' + now + '</span> ' +
                           '<div class="date-dz-right pull-right comment-pl-block"> ' +
                           '<a href="javascript:;" class="removeBlock">删除</a> ' +
                           '<a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> ' +
                           '<span class="pull-left date-dz-line">|</span>' +
                           ' <a href="javascript:;" class="date-dz-z pull-left">' +
                           '<i class="date-dz-z-click-red"></i>赞 (<i class="z-num">666</i>)</a> </div> </div></div>';*/
                oThis.parents('.hf-con').parents('.comment-show-con-list').find('.hf-list-con').css('display', 'block').prepend(oHtml) && oThis.parents('.hf-con').siblings('.date-dz-right').find('.pl-hf').addClass('hf-con-block') && oThis.parents('.hf-con').remove();
            });
        }
    });

    <!--删除评论块 $('.commentAll').on('click', '.removeBlock', function () {-->
    $('.kjc_content_container').on('click', '.commentAll .removeBlock', function () {
        var oT = $(this).parents('.date-dz-right').parents('.date-dz').parents('.all-pl-con');
        if (oT.siblings('.all-pl-con').length >= 1) {
            oT.remove();
        } else {
            $(this).parents('.date-dz-right').parents('.date-dz').parents('.all-pl-con').parents('.hf-list-con').css('display', 'none')
            oT.remove();
        }
        $(this).parents('.date-dz-right').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con').remove();

    });

    <!--点赞   $('.comment-show').on('click', '.date-dz-z', function () {-->
    $('.kjc_content_container').on('click', '.comment-show .date-dz-z', function () {
        var zNum = $(this).find('.z-num').html();
        if ($(this).is('.date-dz-z-click')) {
            zNum--;
            $(this).removeClass('date-dz-z-click red');
            $(this).find('.z-num').html(zNum);
            $(this).find('.date-dz-z-click-red').removeClass('red');
        } else {
            zNum++;
            $(this).addClass('date-dz-z-click');
            $(this).find('.z-num').html(zNum);
            $(this).find('.date-dz-z-click-red').addClass('red');
        }
    });
    /*点击评论，显示评论列表*/
    $('.kjc_content_container').on('click', '.kjc_pl_btn', function () {
        <!--textarea高度自适应-->
        $('.content').flexText();

        if ($(this).is('.pl_show')) {
            $(this).removeClass('pl_show');
            // $(_this).addClass("");
            $(this).parents(".message_bottom").siblings('.commentAll').removeClass("comment_show");
            $(this).parents(".message_bottom").siblings('.commentAll').addClass("comment_hide");
        } else {
            $(this).addClass("pl_show");
            $(this).parents(".message_bottom").siblings('.commentAll').addClass("comment_show");
            $(this).parents(".message_bottom").siblings('.commentAll').removeClass("comment_hide")

        }
    });
});

<!--textarea限制字数-->
function keyUP(t) {
    var len = $(t).val().length;
    if (len > 139) {
        $(t).val($(t).val().substring(0, 140));
    }
}
