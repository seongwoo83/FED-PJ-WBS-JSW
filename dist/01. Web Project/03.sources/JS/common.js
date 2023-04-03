window.addEventListener("load", function () {
    const gnb = document.querySelector(".gnb");
    let hcode = "";
    hcode += "<ul>";
    for (let x in ndata) {
        hcode += `
        <li>
            <h2><a href="#">${x}</a></h2>
            <div class="smenu_wrap">
                <div class="smenu">
                    <div class="smenu_inner">`;
        for (let y in ndata[x]) {
            hcode += `
                            <div class="smenu_list">
                             <ul>
                                <li class="menu_head"><a href="#">${y}</a></li>
                    `;
            for (let z of ndata[x][y]) {
                hcode += `
                                            <li><a href="#">${z}</a></li>
                                            `;
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
    hcode += "</ul>";
    gnb.innerHTML = hcode;
    const gnbList = document.querySelectorAll(".gnb>ul>li");
    const navList = document.querySelectorAll(".gnb>ul>li .smenu_wrap");
    for (let i = 0; i < gnbList.length; i++) {
        gnbList[i].onmouseover = function () {
            navList[i].style.height = this.querySelector(".smenu").clientHeight + "px";
        };
        gnbList[i].onmouseleave = function () {
            navList[i].style.height = "0";
            navList[i].style.overflow = "hidden";
        };
    }
    const gnbLink = document.querySelectorAll(".gnb h2>a");
    const logo = this.document.querySelector("#header .logo");
    logo.onclick = () => {
        this.location.href = "index.html";
    };
    function link(obj) {
        obj.forEach((ele) => {
            ele.onclick = () => {
                atxt = ele.innerText;
                switch (atxt) {
                    case "COFFEE":
                        location.href = "coffee.html";
                        break;
                    case "MENU":
                        location.href = "menu.html";
                        break;
                    case "STORE":
                        location.href = "store.html";
                        break;
                    case "RESPONSIBILITY":
                        location.href = "responsibility.html";
                        break;
                    case "STARBUCKS REWARDS":
                        location.href = "reward.html";
                        break;
                    case "CORPORATE SALES":
                        location.href = "corporate.html";
                        break;
                    case "WHAT'S NEW":
                        location.href = "new.html";
                        break;
                }
            };
        });
    }
    link(gnbLink);
    const news = document.querySelector(".news_list ul");
    if (news) {
        function slideNews() {
            let newsList = document.querySelectorAll(".news_list li");
            newsList[0].style.transition = "all .5s ease-in-out";
            setTimeout(() => {
                newsList[0].style.height = "0";
                newsList[0].style.overflow = "hidden";
            }, 0);
            setTimeout(() => {
                news.appendChild(newsList[0]);
                newsList = document.querySelectorAll(".news_list li");
                newsList[newsList.length - 1].style.transition = "none";
                newsList[newsList.length - 1].style.height = "25px";
                newsList[newsList.length - 1].style.overflow = "visible";
            }, 500);
        }
        setInterval(slideNews, 1000);
    }
    let prizeList = document.querySelector(".prize_list_inner");
    let temp = `<ul>`;
    for (let i = 1; i < 8; i++) {
        temp += `
        <li>
            <a href="#">
                <img src="./03.sources/img/index/footer_award_img${i}.jpg" alt="하단 상 이미지">
            </a>
            </li>
            `;
    }
    temp += `</ul>`;
    prizeList.innerHTML = temp;
});
