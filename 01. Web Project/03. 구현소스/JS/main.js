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
    



});
