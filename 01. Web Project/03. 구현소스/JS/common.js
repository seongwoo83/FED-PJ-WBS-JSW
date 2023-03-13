window.addEventListener("load", function(){
    const gnb = document.querySelector(".gnb");
    

    let hcode = "";
    hcode += "<ul>";
    
    for(let x in ndata){
        hcode += `
        <li>
            <h2><a href="#">${x}</a></h2>
            <div class="smenu_wrap">
                <div class="smenu">
                    <div class="smenu_inner">`
            for(let y in ndata[x]){
                hcode += `
                            <div class="smenu_list">
                             <ul>
                                <li class="menu_head"><a href="#">${y}</a></li>
                    `;
                    for(let z of ndata[x][y]){
                                            hcode += `
                                            <li><a href="#">${z}</a></li>
                                            `
                                        }
                                        hcode += `
                                        </ul>
                                    </div>
                                    `;
                                    }
        hcode += `
                    </div>
                </div>
            </div>
        </li>
        `;
    }
    hcode += "</ul>"
    gnb.innerHTML = hcode;

    const gnbList = document.querySelectorAll(".gnb>ul>li");
    const navList = document.querySelectorAll(".gnb>ul>li .smenu_wrap");
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
    let temp = `<ul>`;
    for(let i = 1; i<8; i++){
        temp += `
        <li>
            <a href="#">
            <img src="./03. 구현소스/img/starbucks/footer_award_img${i}.jpg" alt="하단 상 이미지">
            </a>
            </li>
            `;
        }
        temp += `</ul>`;
    prizeList.innerHTML = temp;
    
})
