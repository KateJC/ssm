$(function () {
    var navObj = document.getElementById("nav");
    var items = navObj.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        (function () {
            var item = items[i];
            item.onclick = function () {
                for (var j = 0; j < items.length; j++) {
                    (function () {
                        if (item !== items[j] && items[j].className) {
                            items[j].className = "";
                        }
                    })(j);
                }
                item.className = "active";
            }
        })(i);
    }
})