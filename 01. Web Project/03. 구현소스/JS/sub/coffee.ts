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
        clearInterval(timer);
        setInterval(()=>{
            slide();
        }, 1000);
    })
    arrowBtn.find("a").on("click", function(e){
        e.preventDefault();
    })
let timer : any;
    function slide(){
        timer = setInterval(()=>{
            $(".slider_wrap").find(".on").removeClass("on").siblings().addClass("on");     
        },2000)
    }
    slide();
})