$(()=>{
    $("#page1").on("click", function(){
        console.log('클릭됨');
        $(this).animate({
            opacity:0,
            zIndex:1
        },300)
    });
    $("#page2").on("click",function(){
        $(this).animate({
            opacity:0
        },300,function(){
            location.href = "./index.html"
        })
    })
})