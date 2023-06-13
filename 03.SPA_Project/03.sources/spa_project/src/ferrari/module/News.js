import $ from "jquery";
import "../css/news.css";

$(() => {
    $(".news_tit").each((i, v) => {
        let hcode = $(v)
            .text()
            .split(" ")
            .map((v, i) => `<span>${v}</span>`)
            .join(" ");
        $(v).html(hcode);
    });
    
    $(".news_container").last().after(`<div class="grey_back"></div>`)


    let news_container = $(".news_container");
    news_container.eq(0).find("img").css({
            opacity:1
        })
    const news = $(".news");
    const grey = $(".grey_back");
    function setgrey(){
        grey.css({
        height:news_container.find("img").height()
    })
}
    setTimeout(setgrey, 0);

    let snum = 0;
    let prot = 0
    news.on("click",function(){
        if(prot===1) return;
        prot = 1;
        setTimeout(() => {
            prot=0;
        }, 1600);
        setTimeout(() => {
            if(snum === news_container.length) snum=0;
        }, 0);
        snum++;
        news_container.eq(snum-1).find("img").animate({
            opacity:0
        },400,()=>{
            setTimeout(() => {
                $(this).find(".news_container").eq(snum).find("img").animate({
                    opacity:1
                },400).parent().siblings().find(".news_tit span").addClass("on").parent().siblings().addClass("on")
            }, 800);
            }).parent().siblings().find(".news_tit span").removeClass("on").parent().siblings().removeClass("on")
    
            setTimeout(() => {
                grey.animate({
                    left:"100%"
                },400,()=>{
                    $(this).find(".grey_back").css({
                        left:0,
                        right:"100%"
                    }).animate({
                        right:0
                    },400)
                })
            }, 400);

    })

    
});

function News() {
    const news_data = [
        {
            src: "./img/news/news1.jpg",
            tit: "완벽한 테일러 메이드",
            sum: "페라리 테일러 메이드 프로그램은 레이싱 헤리티지를 잇는다는 자부심과 미래를 향한 실험적인 시도를 담아내며 진정한 원-오프 차량을 창조해 내고 있다.",
        },
        {
            src: "./img/news/news3.jpg",
            tit: "FERRARI 499PS FIRST AND SECOND IN LE MANS QUALIFYING",
            sum: "The two Ferrari 499Ps concluded qualifying for the 24 Hours of Le Mans on the front row.",
        },
        {
            src: "./img/news/news4.jpg",
            tit: "SPANISH GRAND PRIX - CARLOS FIFTH IN HIS HOME RACE",
            sum: "Scuderia Ferrari leaves Spain with ten points courtesy of Carlos Sainz’s fifth place. Charles Leclerc finished just outside the points in 11th place, having started from pit lane, as the team decided to change several components following the difficulties he experienced yesterday in qualifying.",
        },
        {
            src: "./img/news/news2.jpg",
            tit: "FERRARI SUPPORTS THE FLOODS-AFFECTED LOCAL COMMUNITY",
            sum: "Ferrari donates 1 million Euros to the Emilia-Romagna Region's Agency for Territorial Safety and Civil Protection, joining the regional fundraising campaign.",
        },
    ];

    return (
        <section className="news">
                {news_data.map((v, i) => (
                    <div className="news_container" key={i} data-num={i}>
                        <div className="img_wrap">
                            <img src={v.src} alt=" " />
                        </div>
                            <div className="cont_wrap" data-num={i} key={i}>
                                <h2 className="news_tit">{v.tit}</h2>
                                <p className="news_sum">{v.sum}</p>
                                <button className="detail">자세히 살펴보기</button>
                            </div>
                        </div>
                ))}
        </section>
    );
}

export default News;
