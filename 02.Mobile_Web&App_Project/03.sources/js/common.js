
$(()=>{
    $(document).on("mouseover", ".category", function(){
        console.log("터치");
        console.log($(this).find(".smenu").height())
    })
    $(document).on("mouseout", ".category", function(){
        $(this).find("div").hide(400);
    })
})