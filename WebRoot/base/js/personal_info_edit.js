/*在个人主页浏览历史图片的操作js*/
$(function () {
    /*这种方式不行*/
    /* $('#my_photo_album').on("click", ".img_good", function (e) {
         e.stopPropagation();//阻止冒泡，意思就是当点击上层元素事件，执行完之后，不会继续执行下层元素的事件
         if ($(this).find("span").is(".good_red")) {
             $(this).find("span").removeClass('good_red')
         } else {
             $(this).find("span").addClass("good_red");
         }
     });*/
    /*这种方式行*/
    /*  $('.img_good').click(function (e) {
          e.stopPropagation();//阻止冒泡，意思就是当点击上层元素事件，执行完之后，不会继续执行下层元素的事件
          if ($(this).find("span").is(".good_red")) {
              $(this).find("span").removeClass('good_red')
          } else {
              $(this).find("span").addClass("good_red");
          }
      });*/

});
/*这种方式行*/
var good = function (_this, e) {
    e.stopPropagation();//阻止冒泡，意思就是当点击上层元素事件，执行完之后，不会继续执行下层元素的事件
    if ($(_this).find("span").is(".good_red")) {
        $(_this).find("span").removeClass('good_red')
    } else {
        $(_this).find("span").addClass("good_red");
    }
};
/*编辑个人信息*/
var personal_Info_Edit = function (_this) {
    /*if ($('.myhomepage_bottom-right .navigation_bar').is('.kjc_display_none')) {
        $('.myhomepage_bottom-right .personal_info_edit').addClass('kjc_display_none');
        $('.myhomepage_bottom-right .navigation_bar').removeClass('kjc_display_none');
        $('.myhomepage_bottom-right .kjc_content_container').removeClass('kjc_display_none');
    } else {
        $('.myhomepage_bottom-right .navigation_bar').addClass('kjc_display_none');
        $('.myhomepage_bottom-right .kjc_content_container').addClass('kjc_display_none');
        $('.myhomepage_bottom-right .personal_info_edit').removeClass('kjc_display_none')
    }*/
    /*判断是否已经在显示，若已经在显示就隐藏，否则显示*/
    if ($(_this).is('.editting')) {
        $('.myhomepage_bottom-right .personal_info_edit').removeClass('in active');
        $('.myhomepage_bottom-right .personal_info_edit').fadeOut('fast', function () {
            $('.myhomepage_bottom-right .kjc_content_container').fadeIn('fast');
            $('.myhomepage_bottom-right .navigation_bar').fadeIn('fast');
            $(_this).removeClass('editting');
        });
    } else {
        $('.myhomepage_bottom-right .navigation_bar').fadeOut('fast', function () {
            $('.myhomepage_bottom-right .kjc_content_container').fadeOut('fast', function () {
                $('.myhomepage_bottom-right .personal_info_edit').fadeIn('fast');
                $('.myhomepage_bottom-right .personal_info_edit').addClass('in active');
                $(_this).addClass('editting');
            });
        });
    }
};
/*我的个人主页*/
var show_persional_homePage = function () {
    /*判断分类显示容器收否被隐藏了，若已经被隐藏，则显示。若不被隐藏，则不处理*/
    if ($('.Navigation_bar_classification').is('.fade_out')) {
        $('#follow_fans').removeClass('in active');
        $('.follow_fans').fadeOut('fast', function () {
            $('.Navigation_bar_classification').fadeIn('fast', function () {
                $('.navigation_bar_classification').removeClass('fade_out');
            });

        });
    }
    /*判断在之前是否已经跳转到个人信息编辑，若是，则将个人信息编辑隐藏，否则不做处理*/
    if ($('.edit_operation').is('.editting')) {
        $('.myhomepage_bottom-right .personal_info_edit').removeClass('in active');
        $('.myhomepage_bottom-right .personal_info_edit').fadeOut('fast', function () {
            $('.myhomepage_bottom-right .kjc_content_container').fadeIn('fast');
            $('.myhomepage_bottom-right .navigation_bar').fadeIn('fast');
            $('.edit_operation').removeClass('editting');
        });
    }
};
/*跳转关注粉丝*/
var go_to_follow = function (_this, e) {
    $('.Navigation_bar_classification').fadeOut('fast', function () {
        $('.Navigation_bar_classification').addClass('fade_out');
        $('.follow_fans').fadeIn('fast');
        $('#follow_fans').addClass('in active');
    });
};