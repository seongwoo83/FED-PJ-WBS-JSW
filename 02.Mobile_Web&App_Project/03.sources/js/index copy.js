window.addEventListener("DOMContentLoaded",function(){

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
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        effect: "creative",
        loop: true,
        creativeEffect: {
        prev: {
            shadow: true,
            translate: ["0%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
        },
    });
})