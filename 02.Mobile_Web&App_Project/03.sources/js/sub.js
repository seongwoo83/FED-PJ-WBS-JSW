$(()=>{
    const productPage = $(".product_wrap");
    const imgs = $(".list li");
    imgs.on("click",function(){
        productPage.show();
    })


    
    const close = $(".close_btn");
    close.on("click", function(){
        $(this).parent().hide();
    })
})