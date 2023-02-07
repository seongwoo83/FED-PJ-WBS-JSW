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
})