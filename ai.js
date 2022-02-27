const menuBtn = document.querySelector('.menuHamburger');
const list = document.querySelector('.rightBarStuff');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        list.classList.add('show');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        list.classList.remove('show');
        menuOpen = false;
    }
});


const qq = document.querySelector(".dropdownContent");
function s() {
    qq.style.display = "flex";
}

function c() {
    qq.style.display = "none";
}

function showOrHide() {
    if (qq.style.display === "none") {
        s()
    } else {
        c()
    }
}
$(document).ready(function () {
    var getProductHeight = $(".product.active").height();

    $(".products").css({
        height: getProductHeight
    });

    function calcProductHeight() {
        getProductHeight = $(".product.active").height();

        $(".products").css({
            height: getProductHeight
        });
    }

    function animateContentColor() {
        var getProductColor = $(".product.active").attr("product-color");

        $("card").css({
            background: getProductColor
        });

        $(".title").css({
            color: getProductColor
        });

        $(".btn").css({
            color: getProductColor
        });
    }

    var productItem = $(".product"),
        productCurrentItem = productItem.filter(".active");

    $("#next").on("click", function (e) {
        e.preventDefault();

        var nextItem = productCurrentItem.next();

        productCurrentItem.removeClass("active");

        if (nextItem.length) {
            productCurrentItem = nextItem.addClass("active");
        } else {
            productCurrentItem = productItem.first().addClass("active");
        }

        calcProductHeight();
        animateContentColor();
    });

    $("#prev").on("click", function (e) {
        e.preventDefault();

        var prevItem = productCurrentItem.prev();

        productCurrentItem.removeClass("active");

        if (prevItem.length) {
            productCurrentItem = prevItem.addClass("active");
        } else {
            productCurrentItem = productItem.last().addClass("active");
        }

        calcProductHeight();
        animateContentColor();
    });

    // Ripple
    $("[ripple]").on("click", function (e) {
        var rippleDiv = $('<div class="ripple" />'),
            rippleSize = 60,
            rippleOffset = $(this).offset(),
            rippleY = e.pageY - rippleOffset.top,
            rippleX = e.pageX - rippleOffset.left,
            ripple = $(".ripple");

        rippleDiv
            .css({
                top: rippleY - rippleSize / 2,
                left: rippleX - rippleSize / 2,
                background: $(this).attr("ripple-color")
            })
            .appendTo($(this));

        window.setTimeout(function () {
            rippleDiv.remove();
        }, 1900);
    });
});
