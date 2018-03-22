/**
 * zuley xiangce JS
 * @Descript: 相册组件JS，仿自王子墨的浮云相册（http://julying.com/lab/albums/），鼠标滑过动画还是有点问题 -.-
 * @Author  : 热血洒红尘
 * @blog    : http://www.rxshc.com
 */

if (!zuley) {
    var zuley = {};
}

zuley.xiangce = function (n) {
    // 相册盒子
    var $box = $(n.box) || null;
    // 相册图片
    var $img = $box.find("img");
    // 图片地址
    var $imgurl = null;
    // 弹窗box
    if ($("#zuley_xiangce_box").length == 0) {
        $("body").append('<div id="zuley_xiangce_box"><img src="" /></div>');
    }
    // 初始化样式
    $box.css({position: "relative", "z-index": "10"});
    $img.css({position: "relative", cursor: "pointer", "z-index": "9"});
    $("#zuley_xiangce_box").css("z-index", "11").hide();

    // 鼠标滑过
    $box.on("mousemove ", function (event) {
        var $this = $(this);
        var xx = (event.pageX - $this.offset().left) / $this.width() * ($this.width() - $this.find("img").width());
        var yy = (event.pageY - $this.offset().top) / $this.height() * ($this.height() - $this.find("img").height());
        $this.find("img").stop(true, true).animate({left: xx, top: yy}, 800);
    });

    // 点击相册图片
    $box.on("click", function (event) {
        $imgurl = $(this).find("img").attr("src");
        var $imgbox = $("#zuley_xiangce_box");
        var xx = $(this).offset().left + (event.pageX - $(this).offset().left) / $(this).width() * ($(this).width() - $(this).find("img").width());
        var yy = $(this).offset().top + (event.pageY - $(this).offset().top) / $(this).height() * ($(this).height() - $(this).find("img").height());
        $imgbox.find("img").attr("src", $imgurl);
        $imgbox.css({
            left: xx,
            top: yy,
            position: "absolute",
            "border": "5px solid #fff",
            "box-shadow": "0 0 5px #000"
        });
        $imgbox.show().animate({width: $(this).find("img").width(), height: $(this).find("img").height()}, 400);
    });

    // 点击弹窗图片关闭
    $(document).on("click", "#zuley_xiangce_box", function () {
        $(this).fadeOut(200);
    });
};
$(function () {
    zuley.xiangce({
        'box': '.xiangce > .list'
    });

});
