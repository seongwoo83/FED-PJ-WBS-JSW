window.addEventListener("load", function(){
    let gnbList = document.querySelectorAll(".gnb>ul>li");
    let navList = document.querySelectorAll(".gnb>ul>li .smenu_wrap");
    // console.log('gnbList: ', gnbList);
    // console.log('navList: ', navList);

    for(let i = 0; i<gnbList.length; i++){
        gnbList[i].onmouseover = function(){
            navList[i].style.height = this.querySelector(".smenu").clientHeight+"px"
        }
        gnbList[i].onmouseleave = function(){
            navList[i].style.height = "0";
            navList[i].style.overflow = "hidden";
        }
    }

    let prizeList = document.querySelector(".prize_list_inner");
    prizeList = `<ul>`;
    for(let i = 1; i<8; i++){
        prizeList+= `
        <li>
            <a href="#">
                <img src="./03. 구현소스/img/starbucks/footer_award_img${i}.jpg" alt="하단 상 이미지">
            </a>
        </li>
        `;
    }
    prizeList += `</ul>`;

})
