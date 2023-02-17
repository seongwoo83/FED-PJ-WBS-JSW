window.addEventListener("DOMContentLoaded",()=>{
    let promo = document.querySelector(".right_promo button");
    let promoBtn = document.querySelector(".promo_btn img");
    let promoMenu = document.querySelector(".menu_promo");
    promo.onclick = ()=>{
        let arrowTxt = "";
        arrowTxt = promoBtn.getAttribute("src");
        if(arrowTxt === "./03. 구현소스/img/starbucks/main_promo_down.png"){
            arrowTxt = "./03. 구현소스/img/starbucks/main_promo_up.png"
            promoBtn.setAttribute("src", arrowTxt);
            promoMenu.style.display = "block";
        }else{
            arrowTxt = "./03. 구현소스/img/starbucks/main_promo_down.png"
            promoBtn.setAttribute("src", arrowTxt);
            promoMenu.style.display = "none";
        }
    }
    
    let promoSlider = document.querySelector(".promo_slider");
    let promoBx = document.querySelectorAll(".promo_box");
    let btns = document.querySelectorAll(".promo_wrap button");
    btns.forEach((ele,idx)=>{ // ele => 요소자신, idx => 요소 순번
        ele.onclick = ()=>goSlide(idx);
    });
    let promoSeq = 1;

    const goSlide = (seq)=>{
        /* 1. 함수 호출 및 전달값 확인 */
        console.log("호출완료",seq);
;
        /* 현재전역 inum변수 */
        console.log("현재전역 promoSeq: ",promoSeq);
        /* 2. 버튼 별 분기하기 */
        /* 오른쪽 버튼 클릭*/
        if(seq){
            promoSeq++;//1씩증가
            /* 한계값체크 */
            if(promoSeq===4) promoSeq = 1;
        }
        /* 왼쪽 버튼 클릭 */
        else{
            promoSeq--;//1씩감소
            /* 한계값체크 */
            if(promoSeq === 0) promoSeq = 3;
        }
        /* 증감후 promoSeq변수 */
        console.log("증감후 promoSeq: ",promoSeq);
        let slidePx = 819*promoSeq;
        promoSlider.style.transform = `translateX(-${slidePx}px)`;
        
    };



});
