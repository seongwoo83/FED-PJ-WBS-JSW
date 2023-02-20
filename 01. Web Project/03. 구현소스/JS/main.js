window.addEventListener("DOMContentLoaded",()=>{
    let promo = document.querySelector(".right_promo button");
    let promoBtn = document.querySelector(".promo_btn img");
    let promoMenu = document.querySelector(".menu_promo");
    let promoSlider = document.querySelector(".promo_slider");
    let promoBx = document.querySelectorAll(".promo_box");
    let btns = document.querySelectorAll(".menu_promo button");

    
    
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
    
    btns.forEach((ele,idx)=>{ // ele => 요소자신, idx => 요소 순번
        ele.onclick = ()=>goSlide(idx);
    });

    let promoSeq = 1;
    promoSlider.style.transform = `translateX(-819px)`;

    const goSlide = (seq)=>{
        /* 1. 함수 호출 및 전달값 확인 */
        console.log("호출완료",seq);
        
        /* 현재전역 promoSeq변수 */
        /* 2. 버튼 별 분기하기 */
        if(seq){
            promoSeq++;//1씩증가
        }else{
            promoSeq--;//1씩감소
        }
        console.log("증감후",promoSeq);
        if(promoSeq===4){
            promoSeq = 1;    
        }else if(promoSeq === -1){
            promoSeq = 2;
        }
        else if(promoSeq === 0) {
            promoSeq = 3;
        }
        console.log("초기화후",promoSeq);
        let slidePx = -(819*promoSeq);
        promoSlider.style.transform = `translateX(${slidePx}px)`;
        promoSlider.style.transition = "transform .4s ease-in-out"; 
        
    };



});
