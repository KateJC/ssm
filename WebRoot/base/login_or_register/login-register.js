/*
 *
 * login-register modal
 * Autor: Creative Tim
 * Web-autor: creative.tim
 * Web script: #
 * 
 */
$(function () {

});

function showRegisterForm() {
    $('.error').removeClass('alert alert-danger').html('');
    $('.login_container').fadeOut('fast', function () {
        $('.login_bar').fadeOut('fast', function () {
            $('.register_bar').fadeIn('fast');
        });
        $('.register_container').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('注册');
    });

}

function showLoginForm() {
    $('#loginModal .register_container').fadeOut('fast', function () {
        $('.register_bar').fadeOut('fast', function () {
            $('.login_bar').fadeIn('fast');
        });
        $('.login_container').fadeIn('fast');
        $('.register-footer').fadeOut('fast', function () {
            $('.login-footer').fadeIn('fast');
        });

        $('.modal-title').html('登录');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openLoginModal() {
    showLoginForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}

function openRegisterModal() {
    showRegisterForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}

function getselectValue(_this, type) {
    var value = $(_this).find('.selectpicker').val();
    if (if_null(trim(value))) {
        $(_this).prev(".error").addClass('alert alert-danger').html(type + '还没选择 <button type="button" class="close" data-dismiss="error" aria-hidden="true" onclick="close_error(this)">&times;</button>');
        $(_this).addClass("has-error");
        $(_this).find(".dropdown-toggle").addClass("form-control");
        shakeModal();
        return "";
    } else {
        return value;
    }
}

function getGneralValue(_this, type) {
    var value = $(_this).find("input").val();
    if (if_null(trim(value))) {
        $(_this).addClass("has-error").prev(".error").addClass('alert alert-danger').html(type + '不能为空 <button type="button" class="close" data-dismiss="error" aria-hidden="true" onclick="close_error(this)">&times;</button>');
        $(_this).find('input').focus();
        shakeModal();
        return "";
    } else {
        return value;
    }
}

function addError(_this, string) {
    $(_this).addClass("has-error").prev(".error").addClass('alert alert-danger').html(string + ' <button type="button" class="close" data-dismiss="error" aria-hidden="true" onclick="close_error(this)">&times;</button>');
    shakeModal();
}

function loginAjax(_this, e) {
    close_all_error(_this);
    var form_group = $(_this).parents('.form-horizontal').find('.form-group');
    if (form_group != null && form_group.length > 0) {

        for (var i = 0; i < form_group.length; i++) {
            var that = form_group[i];
            if ($(that).is('.school')) {
                var school_val = getselectValue($(that), '学校');
            } else if ($(that).is('.club')) {
                var club = getselectValue($(that), '社团');
            } else if ($(that).is('.user_account_div')) {
                var user_account = getGneralValue($(that), '账号');
                if (!checkMobile(user_account)) {
                    addError($(that), '账号应为正确的手机号码！');
                }
            } else if ($(that).is('.user_password_div')) {
                var user_password = getGneralValue($(that), '密码');
                if (getStringLength(user_password) < 8) {
                    addError($(that), '密码长度至少为8位');
                }
            }
        }
    }

    /*   Remove this comments when moving to server
    $.post("/login", function (data) {
        if (data == 1) {
            window.location.replace("/home");
        } else {
            shakeModal();
        }
    });
* /
    /*   Simulate error message from the server   */
}

function shakeModal() {
    $('#loginModal .modal-dialog').addClass('shake');
    // $('.error').addClass('alert alert-danger').html('输入的账号或密码不正确 <button type="button" class="close" data-dismiss="error" aria-hidden="true" onclick="close_error(this)">&times;</button>');
    // $('input[type="password"]').val('');
    setTimeout(function () {
        $('#loginModal .modal-dialog').removeClass('shake');
    }, 1000);
}

function close_error(_this) {
    $(_this).parents(".error").removeClass('alert alert-danger').html('');

}

function close_all_error(_this) {
    $(_this).parents(".form-horizontal").find(".error").removeClass('alert alert-danger').html('');
}

/*获取下拉列框  选中的值*/
var select_option = function (_this) {
    // var b = $('.selectpicker').selectpicker();
    if ($(_this).parents(".select_div").is('.has-error')) {
        $(_this).parents(".select_div").removeClass('has-error').addClass("has-success");
    } else {
        $(_this).parents(".select_div").addClass("has-success");
        $(_this).parent().find(".dropdown-toggle").addClass("form-control");
    }
    var a = $('.selectpicker').val();
    var c = $(_this).val();
};
