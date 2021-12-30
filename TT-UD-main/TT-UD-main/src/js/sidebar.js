$(window).scroll(function() {
    //lấy kích thước hiện tại 
    const current = $(this).scrollTop();

    if (current > 200) {
        $(".totop").addClass("fixed");
    } else {
        $(".totop").removeClass("fixed");
    }
});


// click 
$(".totop").click(function(e) {
    e.preventDefault();
    $("body,html").animate({
        scrollTop: 0,
    })
});



$(document).ready(function() {
    $("nav ul li").click(function(event) {
        $(this).addClass("active").siblings().removeClass("active");

        event.preventDefault()
    });
});
$(document).ready(function() {
    $(".btn").click(function(event) {
        $(this).toggleClass("click");
        $(".sidebar").toggleClass("show");

        event.preventDefault()
    });
});

function KN() {
    window.open("src/pdf/KHAI-NIEM.pdf");
}

function DL() {
    window.open("src/pdf/ĐỊNH_LÍ_TÍNH_CHẤT.pdf");
}

function DBT() {
    window.open("src/pdf/CacDangBaiTap-đã-chuyển-đổi (1).pdf");
}

function PPG() {
    window.open("src/pdf/Phương_Phap_Giải.pdf");
}
// render