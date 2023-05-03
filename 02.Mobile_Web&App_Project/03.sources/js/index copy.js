window.addEventListener("DOMContentLoaded", function () {
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
    const control = $(".playcontrol");
    // 재생/멈춤변수
    let pause = 0;
    let swiper;
    swiper = new Swiper(".mySwiper3", {
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
                progressContent.textContent = ``;
            },
        },
    });
    control.on("click",function(){
        if(pause){
            swiper.autoplay.resume();
            $(this).text("∥")
            pause = 0
        }else{
            swiper.autoplay.pause();
            pause = 1
            $(this).text("≫")
        }
    })
});
