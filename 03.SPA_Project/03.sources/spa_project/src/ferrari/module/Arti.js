import article_data from "../data/ardata";
import { Link } from "react-router-dom";

function Article() {
    return (
        <div className={"uni_container"}>
            {article_data.map((v, i) => {
                return (
                    <div className="article" key={i}>
                        <div className="u_img_wrap">
                            <img src={v.src} alt={v.tit} />
                        </div>
                        <hr />
                        <div className="u_tit_wrap">
                            <h4>{v.tit}</h4>
                            <Link
                                to="/art"
                                state={{
                                    aridx: v.idx,
                                    artit: v.tit,
                                    ardate: v.date,
                                    arloca: v.loca,
                                    arsrc: v.src,
                                    arcont: v.cont,
                                    arbsrc: v.bsrc,
                                    arrsrc:v.rsrc
                                }}
                            >
                                Show Detail
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Article;
