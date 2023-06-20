import $ from "jquery";
import "../css/news.css";
import { StyledBtn, StyledBtnBx } from "./Ban";

function jqfn(){

    $(() => {
        $(".news_tit").each((i, v) => {
            let hcode = $(v)
                .text()
                .split(" ")
                .map((v, i) => `<span>${v}</span>`)
                .join(" ");
            $(v).html(hcode);
        });
    
        $(".news_container").eq(0).find(".img_wrap").css({
            width:"100%"
        }).find(".img_bx").css({
            opacity:1
        }).parents(".news_oh").siblings(".cont_wrap").find(".news_sum").addClass("on").siblings(".detail").addClass("on").siblings(".news_tit").find("span").addClass("on");
    
        $(window).on("resize",function(){
            $(".news").css({
                height: $(".news_container").outerHeight() + 100+ "px"
            })
        });
        $(".news").css({
            height: $(".news_container").outerHeight() + 100+ "px"
        });
        
        
        let snum = 0;
        let prot = 0
        function newsSlide(){
            if(prot ===1)return;
            prot = 1;
            setTimeout(() => {
                prot = 0;
            }, 1000);
            $('.news_container').eq(snum).find(".img_bx").animate({
                opacity:0
            },100,()=>{
                $(".news").find(".news_container").eq(snum).find(".img_wrap").animate({
                    left:"100%"
                },300,()=>{
                    $(".news").find(".news_container").eq(snum).find(".img_wrap").css({
                        left:0,
                        width:0
                    })
                })
            }).parents(".news_oh").siblings(".cont_wrap").find(".news_sum").removeClass("on").siblings(".detail").removeClass("on").siblings(".news_tit").find("span").removeClass("on")
    
    
            setTimeout(() => {
                $(".news_container").eq(snum+1===4? 0 : snum+1).find(".img_wrap").animate({
                    width:"100%"
                },300,()=>{
                    $(".news").find(".news_container").eq(snum+1===4? 0 : snum+1).find(".img_bx").animate({
                        opacity:1
                    },100).parents(".news_oh").siblings(".cont_wrap").find(".news_sum").addClass("on").siblings(".detail").addClass("on").siblings(".news_tit").find("span").addClass("on");
                    snum++;
                    if(snum===4) snum=0;
                })
            }, 400);
            clearAuto()
        }
    
        $(".news").on("click",newsSlide);
    
    
        let autoI;
        let autoT;
    
        function autoSlide() {
            autoI = setInterval(newsSlide, 3000);
        }
    
        autoSlide();
    
        function clearAuto() {
            clearInterval(autoI);
            clearTimeout(autoT);
            autoT = setTimeout(autoSlide, 1000);
        }
    });
}
jqfn();

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
                        <div className="news_oh">
                            <div className="img_wrap">
                                <div className="img_bx">
                                    <img src={v.src} alt=" " />
                                </div>
                            </div>
                        </div>
                        <div className="cont_wrap" data-num={i} key={i}>
                            <h2 className="news_tit">{v.tit}</h2>
                            <p className="news_sum">{v.sum}</p>
                            <button className="detail">Show Detail</button>
                        </div>
                        </div>
                ))}
                {jqfn()}
        </section>
    );
}

export default News;