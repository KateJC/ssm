$(function () {

    $("#content").keyup(function () {

        //判断输入的字符串长度
        var content_len = $("#content").text().replace(/\s/g, "").length;

        $(".tips").text("已经输入" + content_len + "个字");


        if (content_len == 0) {
            // alert(content);
            $(".tips").text("");
            $("#send").addClass("disabled");
            return false;
        } else {
            $("#send").removeClass("disabled");
        }
    });


    $(".pic").click(function () {

        $(".select_Img").click();


    });

    // 	function confirm(){

    // 		var r= new FileReader();
    // f=$(".select_Img").files[0];
    // r.readAsDataURL(f);
    // r.onload=function(e) {
    // 	$(".preview").src=this.result;

    // };
    // 	}

    //点击按钮发送内容
    $(".my_edit").on("click", "#send", function () {
        // $("#send").click(function () {

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
        var content = $("#content").html();

        //判断选择的是否是图片格式
        // var imgPath = $(".imgPath").text();
        // var start = imgPath.lastIndexOf(".");
        // var postfix = imgPath.substring(start, imgPath.length).toUpperCase();


        /*if (imgPath != "") {

            if (postfix != ".PNG" && postfix != ".JPG" && postfix != ".GIF" && postfix != ".JPEG") {
                alert("图片格式需为png,gif,jpeg,jpg格式");
            } else {
                $(".item_msg").prepend("<div class='col-sm-12 col-xs-12 message' > <img src='img/icon.png' class='col-sm-2 col-xs-2' style='border-radius: 50%'><div class='col-sm-10 col-xs-10'><span style='font-weight: bold;''>Jack.C</span> <br><small class='date' style='color:#999'>刚刚</small><div class='msg_content'>" + content + "<img class='mypic' onerror='this.src='img/bg_1.jpg' src='file:///" + imgPath + "' ></div></div></div>");
            }
        } else {*/

        var ohtml = '<div class="row item_msg">\n' +
            '                        <!--一条帖子上面部分-->\n' +
            '                        <div class="col-sm-12 col-xs-12 message kjc_msg">\n' +
            '                            <!--左边头像部分-->\n' +
            '                            <div class="col-sm-2 col-xs-2">\n' +
            '                                <a href="#" title="Jack.C">\n' +
            '                                    <img src="img/icon.png" class="kjc_msg_face_img" style="border-radius: 50%"\n' +
            '                                         title="Jack.C">\n' +
            '                                </a>\n' +
            '                            </div>\n' +
            '                            <!-- 右边内容部分-->\n' +
            '                            <div class="col-sm-10 col-xs-10 kjc_msg_content">\n' +
            '                                <!--右边的顶上部分-->\n' +
            '                                <div class="kjc_user_name"> <span style="font-weight: bold;">\n' +
            '                                    <a href="#" class="kjc_msg_a kjc_user_a">Jack.C</a></span>\n' +
            '                                </div>\n' +
            '                                <div class="kjc_msg_info">\n' +
            '                                    <small class="date" style="color:#999"><a href="#" class="kjc_msg_a">' + now + '</a>\n' +
            '                                    </small>\n' +
            '                                    <span style="color:#999">来自<a href="#" class="kjc_msg_a">仲恺农业工程学院</a></span>\n' +
            '                                </div>\n' +
            '                                <!--右边内容部分-->\n' +
            '                                <div class="msg_content">\n' +
            '                                    <!--文字内容部分 -->\n' +
            '                                    <div class="kjc_msg_words"><span>' +
            content +
            '                                     </span>\n' +
            '                                    </div>\n' +
            '                                    <!-- 图片部分-->\n' +
            '                                    <div class="kjc_msg_img">\n' +
            '                                        <ul class="col-sm-8 col-xs-12 xiangce">\n' +
            '                                            <li class="col-sm-4 col-xs-4 kjc_msg_img list">\n' +
            '                                                <img class="mypic" src="img/bg_1.jpg"></li>\n' +
            '                                            <li class="col-sm-4 col-xs-4 kjc_msg_img list">\n' +
            '                                                <img class="mypic" src="img/bg_1.jpg"></li>\n' +
            '                                            <li class="col-sm-4 col-xs-4 kjc_msg_img list">\n' +
            '                                                <img class="mypic" src="img/bg_1.jpg"></li>\n' +
            '                                            <li class="col-sm-4 col-xs-4 kjc_msg_img list">\n' +
            '                                                <img class="mypic" src="img/bg_1.jpg"></li>\n' +
            '                                        </ul>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <!--一条帖子的底部操作栏-->\n' +
            '                        <div class="col-sm-12 col-xs-12 message_bottom">\n' +
            '                            <div class="col-sm-3 col-xs-3 kjc_message_operation">\n' +
            '                                <a href="#" class="kjc_msg_operation_a">\n' +
            '                                    <span class="glyphicon glyphicon-star-empty"></span>&nbsp;&nbsp;收藏&nbsp;\n' +
            '                                </a></div>\n' +
            '                            <div class="col-sm-3 col-xs-3 kjc_message_operation">\n' +
            '                                <a href="#" class="kjc_msg_operation_a">\n' +
            '                                    <span class="glyphicon glyphicon-share"></span>&nbsp;&nbsp;转发&nbsp;\n' +
            '                                    <span class="badge">548</span>\n' +
            '                                </a></div>\n' +
            '                            <div class="col-sm-3 col-xs-3 kjc_message_operation">\n' +
            '                                <a class="kjc_msg_operation_a kjc_pl_btn">\n' +
            '                                    <span class="glyphicon glyphicon-comment"></span>&nbsp;&nbsp;评论&nbsp;\n' +
            '                                    <span class="badge">9959</span>\n' +
            '                                </a></div>\n' +
            '                            <div class="col-sm-3 col-xs-3 kjc_message_operation" style="border: none">\n' +
            '                                <a href="#" class="kjc_msg_operation_a">\n' +
            '                                    <span class="glyphicon glyphicon-heart-empty"></span>&nbsp;&nbsp;点赞&nbsp;\n' +
            '                                    <span class="badge">9954</span>\n' +
            '                                </a></div>\n' +
            '                        </div>\n' +
            '                        <!--一条帖子的评论部分 默认为隐藏起来-->\n' +
            '                        <div class="commentAll col-sm-12 col-xs-12">\n' +
            '                            <!--评论区域 begin-->\n' +
            '                            <div class="reviewArea clearfix">\n' +
            '                                <textarea class="content comment-input" placeholder="请输入您的评论，不超过140个字符&hellip;"\n' +
            '                                          onkeyup="keyUP(this)"></textarea>\n' +
            '                                <a href="javascript:;" class="plBtn">评论</a>\n' +
            '                            </div>\n' +
            '                            <!--评论区域 end-->\n' +
            '                            <!--回复区域 begin-->\n' +
            '                            <div class="comment-show">\n' +
            '                                <div class="comment-show-con clearfix">\n' +
            '                                    <!--评论中的头像-->\n' +
            '                                    <div class="comment-show-con-img pull-left"><a href="#" title="张三"><img\n' +
            '                                            src="images/header-img-comment_03.png" alt="" title="张三"></a></div>\n' +
            '                                    <!--评论右边部分-->\n' +
            '                                    <div class="comment-show-con-list pull-left clearfix">\n' +
            '                                        <!--上部分用户名和评论内容-->\n' +
            '                                        <div class="pl-text clearfix">\n' +
            '                                            <a href="#" class="comment-size-name">张三 : </a><!--用户名-->\n' +
            '                                            <span class="my-pl-con">&nbsp;来啊 造作啊!</span><!--评论内容-->\n' +
            '                                        </div>\n' +
            '                                        <!--下面部分时间和操作部分-->\n' +
            '                                        <div class="date-dz">\n' +
            '                                            <span class="date-dz-left pull-left comment-time">2017-5-2 11:11:39</span>\n' +
            '                                            <div class="date-dz-right pull-right comment-pl-block">\n' +
            '                                                <a href="javascript:;" class="removeBlock">删除</a>\n' +
            '                                                <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a>\n' +
            '                                                <span class="pull-left date-dz-line">|</span>\n' +
            '                                                <a href="javascript:;" class="date-dz-z pull-left">\n' +
            '                                                    <i class="date-dz-z-click-red"></i>赞 (\n' +
            '                                                    <i class="z-num">666</i>)</a>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="hf-list-con"></div>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <!--回复区域 end-->\n' +
            '                        </div>\n' +
            '                    </div>';
        $("#all").prepend(ohtml);
        zuley.xiangce({
            'box': '.xiangce > .list'
        });
        $("#content").empty();
    });

    //添加表情包1
    for (var i = 1; i < 60; i++) {

        $(".emoji_1").append("<img src='img/f" + i + ".png' style='width:35px;height:35px' >");
    }
    //添加表情包2
    for (var i = 1; i < 61; i++) {

        $(".emoji_2").append("<img src='img/h" + i + ".png' style='width:35px;height:35px' >");
    }


    $(".emoji").click(function () {

        $(".myEmoji").show();

        //点击空白处隐藏弹出层
        $(document).click(function (e) {

            if (!$("#edit_form").is(e.target) && $("#edit_form").has(e.target).length === 0) {

                $(".myEmoji").hide();
            }
        });


    });

    //将表情添加到输入框
    $(".myEmoji img").each(function () {
        $(this).click(function () {
            var url = $(this)[0].src;

            $('#content').append("<img src='" + url + "' style='width:25px;height:25px' >");

            $("#send").removeClass("disabled");
        })
    })

    //放大或缩小预览图片
    /*   $(".mypic").click(function () {
           var oWidth = $(this).width(); //取得图片的实际宽度
           var oHeight = $(this).height(); //取得图片的实际高度

           if ($(this).height() != 200) {
               $(this).height(200);
           } else {
               $(this).height(oHeight + 200 / oWidth * oHeight);

           }

       });*/

});
