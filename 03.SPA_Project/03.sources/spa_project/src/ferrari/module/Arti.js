import article_data from "../data/ardata";
import { Link } from "react-router-dom";

function Article(props){
    return(
        <div className={"uni_container "+props.art}>
            {
                article_data[props.art].map((v,i)=>{
                    return(
                        <div className="article" key={i} state={{
                            artit:v.tit,
                            ardate:v.date,
                            arloca:v.loca,
                            arsrc:v.src,
                            arcont:v.cont
                        }}>
                            <img src={v.src} alt={v.tit} />
                            <hr/>
                            <h4>{v.tit}</h4>
                            <Link to={v.idx}>Show Detail</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Article;