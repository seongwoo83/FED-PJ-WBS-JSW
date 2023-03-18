window.addEventListener("DOMContentLoaded", ()=>{

    const news = document.querySelector(".news ul");

    function slideNews(){
        let newsList = document.querySelectorAll(".news li");
        newsList[0].style.transition = "all .5s ease-in-out"
        setTimeout(()=>{
            newsList[0].style.height = "0";
            newsList[0].style.overflow = "hidden";
        },0)
        setTimeout(() => {
            news.appendChild(newsList[0]);
            newsList = document.querySelectorAll(".news li");
            newsList[newsList.length-1].style.transition = "none";
            newsList[newsList.length-1].style.height = "25px";
            newsList[newsList.length-1].style.overflow= "visible";
        }, 500);
    }
    setInterval(slideNews, 1000);

})