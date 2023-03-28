window.addEventListener("DOMContentLoaded",()=>{
    const mbMenu = document.querySelector(".mb_menu");

    let hcode = "";

    for(let x in ndata){
        hcode += `
        <ul class="mb_menu_list">
            <li class="mb_smenu_list li_tit"><a href="#">${x}</a></li>
            <li class="mb_smenu_list mb_smenu_smenu"><a href="#" class="allin">한번에 보기</a></li> 
        `
        for(let y in ndata[x]){
            hcode +=`
                <li class="mb_smenu_list mb_smenu_smenu">
                    <a href="#">${y}</a>
                        <ul>
                    `
                for(let z of ndata[x][y]){
                    hcode +=`
                        <li><a href="#">${z}</a></li>
                    `
                }
                hcode += `
                    </ul>
                </li>
                `
        }
        hcode += `
            </ul>
        `
    }
    mbMenu.innerHTML = hcode;

    const mbSmenuTit = document.querySelectorAll(".li_tit a");
    mbSmenuTit.forEach((ele1)=>{
        ele1.onclick = ()=>{
            const mbSmenu = ele1.parentElement.parentElement.querySelectorAll(".mb_smenu_smenu");
            mbSmenu.forEach(ele2=>{
                ele2.style.transition  = "height .4s ease-out";
                ele2.classList.toggle("on");
                const mbSmenuList = ele2.querySelectorAll(".mb_smenu_smenu ul li");
                ele2.onclick= ()=>{
                    if(ele2.querySelector(".allin")){
                        let btxt = ele1.innerText;
                        switch(btxt) {
                            case "COFFEE": location.href = "coffee.html"; break;
                            case "MENU": location.href = "menu.html"; break;
                            case "STORE": location.href = "store.html"; break;
                            case "RESPONSIBILITY": location.href = "responsibility.html"; break;
                            case "STARBUCKS REWARDS": location.href = "reward.html"; break;
                            case "CORPORATE SALES": location.href = "corporate.html"; break;
                            case "WHAT'S NEW": location.href = "new.html"; break;
                        }
                    }else{
                        ele2.classList.toggle("in");
                        mbSmenuList.forEach(ele3 => {
                        ele3.classList.toggle("on");
                        ele3.style.transition  = "height .4s ease-out";
                        });
                    }
                }
            })          
        }
    })

    const mbGnbBg = document.querySelector(".mb_wrap");
    const mbGnb = document.querySelector(".mb_gnb");
    const mbIconWrap = document.querySelector(".mb_icon_wrap");
    const bars = document.querySelector(".bars");
    const close = document.querySelector(".close");
    bars.onclick=()=>{
        mbIconWrap.style.display = "none";
        mbGnbBg.style.display ="block";
        mbGnb.style.right = "0";
    }
    close.onclick=()=>{
        mbGnbBg.style.display ="none";
        mbGnb.style.right = "-100%";
        setTimeout(() => {
            mbIconWrap.style.display = "flex";
        }, 700);
    }





    const ftListTit = document.querySelectorAll(".footer_menu_tit a");
    
    ftListTit.forEach(ele1 => {
        ele1.onclick = (e)=>{
            e.preventDefault();
            let ftList = ele1.parentElement.parentElement.querySelectorAll(".btn_list li+li");
            ftList.forEach(ele2 => {
                ele2.classList.toggle("off")
            });
        }
    });



})