window.addEventListener("load", function(){
    let gnbList = document.querySelectorAll(".gnb>ul>li");
    let navList = document.querySelectorAll(".gnb>ul>li .smenu_wrap");
    console.log('gnbList: ', gnbList);
    console.log('navList: ', navList);

    for(let i = 0; i<gnbList.length; i++){
        gnbList[i].onmouseover = function(){
            navList[i].style.display = "block";
        }
        gnbList[i].onmouseleave = function(){
            navList[i].style.display = "none";
        }
    }
})