$(()=>{
    
    const slide = $(".slide");
    
    slide.draggable({
        axis: "x"
    })

    // inner 크기 리턴함수
const reInner = () => $(".inner").width();

// 리사이즈 업데이트
$(window).on("resize", function(){
    innW = reInner();
    console.log("innW", innW);
})

// 윈도우 가로크기 - left 기준위치 px변환
let innW = reInner();
console.log("innW * 0.9: ", innW * 0.9);
console.log("innW: ", innW);
console.log("innW * 1.1: ", innW * 1.1);

// 광드래그 방지위해 커버세팅 (show(), hide())
const cover = $(".cover");


// 드래그 끝난 후 이벤트 함수 만들기
slide.on("dragstop",function(){
    // 광드래그 방지 커버 
    cover.show()
    // slide left위치값
    let sleft = $(this).offset().left;
    console.log(sleft);

    // 1. 왼쪽으로 이동 : -110% 미만일때
    if(sleft < -innW*1.1){
        slide.animate({
            left: -innW*2+"px"
        }, 600, "easeOutQuint", ()=>{
            // 이동후 맨앞 li 맨뒤로 이동
            slide.append(slide.find("li").first()).css({left:"-100%"});
            cover.hide();
        })
    }
    // 2. 오른쪽으로 이동 : -90% 초과일때
    else if(sleft > -innW*0.9){
        slide.animate({
            left: "0px"
        }, 600, "easeOutQuint",()=>{
            // 이동후 맨앞 li 맨뒤로 이동
            slide.prepend(slide.find("li").last()).css({left:"-100%"});
            cover.hide();
        })
    }
    // 3. 제자리로 이동 : -110% ~ -90%
    else{
        slide.animate({
            left: -innW+"px"
        }, 600, "easeOutQuint",()=>{
            cover.hide();
        })
    }
});






})