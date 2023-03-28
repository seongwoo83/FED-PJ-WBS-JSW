$(()=>{
    const arrowBtn = $("button.btn");

    arrowBtn.on("mouseover",function(){
        $(this).find("img").removeClass("on").eq(1).addClass("on")
    })
    arrowBtn.on("mouseleave",function(){
        $(this).find("img").removeClass("on").eq(0).addClass("on")
    })

    arrowBtn.on("click", function(){
        $(this).siblings().children(".on").removeClass("on").siblings().addClass("on");
        clearAuto();
    })
    arrowBtn.find("a").on("click", function(e){
        e.preventDefault();
    })

    let autoI : any;
    let autoT : any;
    function autoSlide() {
        autoI = setInterval(() => {
            $(".slider_wrap").find(".on").removeClass("on").siblings().addClass("on");
        }, 2000);
    } 
    autoSlide();
    function clearAuto() {
        clearInterval(autoI);
        clearTimeout(autoT);
        autoT = setTimeout(autoSlide, 3000);
    }
})