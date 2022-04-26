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

window.onload = function () {
    var head = document.querySelector(".htab");
    var head1 = document.querySelector(".headTab1");
    var head2 = document.querySelector(".headTab2");
    var head3 = document.querySelector(".headTab3");
    var head4 = document.querySelector(".headTab4");
    var head5 = document.querySelector(".headTab5");
    var headb = document.querySelector(".htabBottom");
    var headli1 = document.querySelector(".headLi1");
    var headli2 = document.querySelector(".headLi2");
    head.onmouseout = headTab;
    head1.onmouseover = headTab1;
    head2.onmouseover = headTab2;
    head3.onmouseover = headTab3;
    head4.onmouseover = headTab4;
    head5.onmouseover = headTab5;
    headb.onmouseover = headTabb;
    headli1.onmouseover = headL1;
    headli1.onmouseout = headL01;
    headli2.onmouseover = headL2;
    headli2.onmouseout = headL02;
}

headTab = function () {
    var htabBottom = document.getElementsByClassName('htabBottom');
    for (var i = 0; i < htabBottom.length; i++) {
        htabBottom[i].style.display = 'none';
    };
}

headTab1 = function () {
    document.querySelector(".htabBottom").style.display = 'block';
    document.querySelector(".headLi1 > a").innerText = '社区广场';
    document.querySelector(".headLi2 > a").innerText = '一派';
    document.querySelector(".headLi1 > a").href = '#';
}

headTab2 = function () {
    document.querySelector(".htabBottom").style.display = 'none';
}

headTab3 = function () {
    document.querySelector(".htabBottom").style.display = 'block';
    document.querySelector(".headLi1 > a").innerText = '话题广场';
    document.querySelector(".headLi2 > a").innerText = '相机陈列馆';
    document.querySelector(".headLi1 > a").href = 'list.html';
}

headTab4 = function () {
    document.querySelector(".htabBottom").style.display = 'block';
    document.querySelector(".headLi1 > a").innerText = '正版软件';
    document.querySelector(".headLi2 > a").innerText = '官方淘宝';
    document.querySelector(".headLi1 > a").href = '#';
}

headTab5 = function () {
    document.querySelector(".htabBottom").style.display = 'none';
}

headTabb = function () {
    this.style.display = 'block';
}

headL1 = function () {
    this.style.background = 'rgba(0, 0, 0, 0.25)';
}

headL01 = function () {
    this.style.background = 'rgba(0, 0, 0, 0)';
}

headL2 = function () {
    this.style.background = 'rgba(0, 0, 0, 0.25)';
}

headL02 = function () {
    this.style.background = 'rgba(0, 0, 0, 0)';
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

