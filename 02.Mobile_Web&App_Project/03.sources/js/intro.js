$(()=>{
    $("#page1").on("click", function(){
        $(this).fadeOut(300).siblings().find("#page2").fadeIn(300)
    })
})