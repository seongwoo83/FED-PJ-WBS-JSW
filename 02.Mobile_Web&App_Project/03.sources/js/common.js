
$(()=>{
    $(document).on("mouseenter", ".category", function(){
        console.log("터치");
        console.log($(this).find(".smenu").height())
        $(this).find("div").stop().animate({
            height: $(".smenu", this).height()+"px"
        },400);
    })
    $(document).on("mouseleave", ".category", function(){
        $(this).find("div").stop().animate({
            height: "0"
        },400);
    })
})