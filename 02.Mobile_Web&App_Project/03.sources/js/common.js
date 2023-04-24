
$(()=>{
    $(document).on("mouseover", ".category", function(){
        console.log("터치");
        console.log($(this).find(".smenu").height())
        $(this).find("div").animate({
            height: $(".smenu", this).height()+"px"
        },400);
    })
    $(document).on("mouseout", ".category", function(){
        $(this).find("div").animate({
            height: "0"
        },400);
    })
})