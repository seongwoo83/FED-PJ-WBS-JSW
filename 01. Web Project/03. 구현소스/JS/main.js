window.addEventListener("DOMContentLoaded",()=>{
    const promo = document.querySelector(".right_promo button");
    const promoBtn = document.querySelector(".promo_btn img");
    const promoMenu = document.querySelector(".menu_promo");
    const promoSlider = document.querySelector(".promo_slider");
    const promoBx = document.querySelectorAll(".promo_box");
    const btns = document.querySelectorAll(".menu_promo button");
    const eventBx = document.querySelector(".event_wrap");
    

    function eventCh(){
        eventBx.style.left = "-100%";
        eventBx.style.transition = "left 1s linear";
    }
    setTimeout(() => {
            let eventImg = document.querySelectorAll(".event");
            eventBx.appendChild(eventImg[0]);
            eventBx.style.transition = "none";
            eventBx.style.left = "0";
        }, 1000);

    setInterval(() => {

    }, 1000);

    
    
    promo.onclick = ()=>{
        let arrowTxt = "";
        arrowTxt = promoBtn.getAttribute("src");
        if(arrowTxt === "./03. 구현소스/img/starbucks/main_promo_down.png"){
            arrowTxt = "./03. 구현소스/img/starbucks/main_promo_up.png"
            promoBtn.setAttribute("src", arrowTxt);
            promoMenu.style.height = "658px";
        }else{
            arrowTxt = "./03. 구현소스/img/starbucks/main_promo_down.png"
            promoBtn.setAttribute("src", arrowTxt);
            promoMenu.style.height = "0";
            promoMenu.style.overflow = "hidden";
        }
    }
    
    let prot = 0;
    
    const goSlide = (seq)=>{
        if(prot) return;
        prot= 1
        setTimeout(() => {
            prot = 0;
        }, 400);
        let sliderBx = promoSlider.querySelectorAll(".promo_box");
        /* 1. 함수 호출 및 전달값 확인 */
        console.log("호출완료",seq);
        
        /* 현재전역 promoSeq변수 */
        /* 2. 버튼 별 분기하기 */
        if(seq){
            promoSlider.style.transform = `translateX(${-819*3}px)`;
            promoSlider.style.transition = "transform .4s ease-in-out";
            sliderBx.forEach(ele=>ele.classList.remove("middle"));

            
            setTimeout(() => {
                promoSlider.appendChild(sliderBx[0]);
                promoSlider.style.transition = "none";
                promoSlider.style.transform = `translateX(${-819*2}px)`;
                sliderBx[3].classList.add("middle");
            }, 400);
            
        }else{
            promoSlider.style.transform = `translateX(${-819*1}px)`;
            promoSlider.style.transition = "transform .4s ease-in-out";
            sliderBx.forEach(ele=>ele.classList.remove("middle"));
            setTimeout(() => {
                promoSlider.insertBefore(sliderBx[sliderBx.length-1], sliderBx[0])
                promoSlider.style.transition = "none";
                promoSlider.style.transform = `translateX(${-819*2}px)`;
                sliderBx[1].classList.add("middle");
            }, 400);
            
        }
    };
    
    btns.forEach((ele,idx)=>{ // ele => 요소자신, idx => 요소 순번
        ele.onclick = ()=>goSlide(idx);
    });

    const coffee1_img = document.querySelector(".coffee_imgbx");
    const coffee1_txt = document.querySelector(".coffee_txtbx");
    const coffee2 = document.querySelector(".coffee2_inner");
    const coffee3_txt1 = document.querySelector(".fav_txt1")
    const coffee3_txt2 = document.querySelector(".fav_txt2")
    const star_txt1 = document.querySelector(".star_txt1");
    const star_txt2 = document.querySelector(".star_txt2");

    window.addEventListener("scroll",()=>{
        let scTop = window.scrollY
        console.log(scTop);

        const crm = ele => ele.classList.remove("off")
        const cad = ele => ele.classList.add("off")


        if(scTop > 300 && scTop<=900){
            setTimeout(() => {
                crm(coffee1_img);
                crm(coffee1_txt);
            }, 200);
        }else if(scTop > 900 && scTop <=1500){
            crm(coffee2);
        }else if(scTop > 1500 && scTop <= 2000){
            crm(coffee3_txt1);
            crm(coffee3_txt2);
        }else if(scTop > 2000){
            crm(star_txt1)
            crm(star_txt2)
        }else{
            cad(coffee1_img);
            cad(coffee1_txt);
            cad(coffee2);
            cad(coffee3_txt1);
            cad(coffee3_txt2);
            cad(star_txt1)
            cad(star_txt2)
        }
        
    });


});
