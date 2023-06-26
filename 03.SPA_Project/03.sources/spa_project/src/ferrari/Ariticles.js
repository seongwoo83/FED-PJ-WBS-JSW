import { useLocation } from "react-router-dom";
import './css/articles.css'
import ImgSlide from "./module/ImgSlide";

function Articles(){
    const loc = useLocation();
    let aridx = loc.state.aridx;
    let artit = loc.state.artit;
    let ardate = loc.state.ardate;
    let arloca = loc.state.arloca;
    let arbsrc = loc.state.arbsrc;
    let arcont = loc.state.arcont;
    arcont = arcont.split("^");
    return(
        <div className="a_wrap">
            <div className="a_tit_wrap">
                <h2>{artit}</h2>
                <h4>{arloca}</h4>
            </div>
            <div className="a_img_wrap">
                <img src={arbsrc} alt={aridx} />
            </div>
            <div className="a_cont_wrap">
                <span className="a_date">{ardate}</span>
                <div className="a_art_wrap">
                    {
                        arcont.map((v,i)=>{
                            if(v.includes("*")){
                                return <p key={i}><b>{v.split("*")[0]}</b>{v.split("*")[1]}</p>
                            }else{
                                return <p key={i}>{v}</p>
                            }
                        })
                    }
                </div>
            </div>
            <ImgSlide art={"art"+aridx} idx={aridx}/>
        </div>
    )
}
export default Articles;