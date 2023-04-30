$(()=>{
    $(document).on("mouseenter", ".category", function(){
        console.log("터치");
        console.log($(this).find(".smenu").height())
        $(this).find("div").stop().animate({
            height: $(".smenu", this).height()+30+"px",
            backgroundColor:"#fff"
        },400);
    })
    $(document).on("mouseleave", ".category", function(){
        $(this).find("div").stop().animate({
            height: "0",
            backgroundColor:"transparent"
        },400);
    })

    const topInner = $(".top .inner");
    topInner.on("mouseenter", function(){
        $(this).stop().animate({
            backgroundColor: "#fff"
        })
    })
    topInner.on("mouseleave", function(){
        $(this).stop().animate({
            backgroundColor: "transparent"
        })
    })

})