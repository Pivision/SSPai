window.onload = function () {
    var $li = $(".headTab");
    $li.mouseenter(function () {
        $(this).children("ul").show();
    });

    $li.mouseleave(function () {
        $(this).children("ul").hide();
    });
};

function listBtn(display, text, display2, r1, r2, color1, color2) {
    var listDown = document.getElementsByClassName('listDown');
    for (var i = 0; i < listDown.length; i++) {
        listDown[i].style.display = display;
    };
    document.getElementById("listChange").innerText = text;
    document.getElementById("listUp").style.display = display2;
    document.querySelector(".listMain2").style.marginRight = r1;
    document.querySelector(".listMain5").style.marginRight = r1;
    document.querySelector(".listMain3").style.marginRight = r2;
    document.querySelector(".listBtn1 > input:last-child").style.background = color1;
    document.querySelector(".listBtn1 > input:last-child").style.color = color2;
    document.querySelector(".listBtn1 > input").style.background = color2;
    document.querySelector(".listBtn1 > input").style.color = color1;
}

var a = 0;
setInterval(function () {
    a = a + 100;
    if (a <= 300) {
        b = '-' + a + '%';
    }
    else {
        a = 0;
        b = '-' + a + '%';
    }
}, 3500)

setInterval(function () {
    document.querySelector(".hbg > img:first-child").style.marginLeft = b;
}, 3500)

