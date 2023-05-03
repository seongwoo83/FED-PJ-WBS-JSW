window.addEventListener("DOMContentLoaded", function () {
    let scTop = 0;
    $(window).on("scroll",function(){
        scTop = $(this).scrollTop();
        console.log(scTop);
        if(scTop>100){
            $(".top .inner").animate({
                backgroundColor: "#fff"
            })
        }else{
            $(".top .inner").animate({
                backgroundColor: "transparent"
            })
        }
    })
    const tpg = document.querySelector(".vt_wrap");
    const spg = document.querySelector(".hr_wrap");

    const mvbx = spg.querySelector("ul");

    function retVal(x) {
        return x.getBoundingClientRect().top;
    }
    window.addEventListener("scroll", movePage);

    function movePage() {
        let tgpos = retVal(tpg);

        if (tgpos <= 0 && tgpos >= -2200) {
            mvbx.style.left = tgpos + "px";
        } else if (tgpos > 0) {
            mvbx.style.left = "0";
        }
    }
    console.log("로딩됨");
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        effect: "creative",
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["0%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            },
        },
    });
});
