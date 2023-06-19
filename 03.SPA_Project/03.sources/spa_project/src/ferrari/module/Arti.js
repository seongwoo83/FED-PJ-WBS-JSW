import article_data from "../data/ardata";

function Article(props){
    return(
        <div className={"uni_container "+props.art}>
            {
                article_data[props.art].map((v,i)=>{
                    return(
                        <div className="article">
                            <img src={v.src} alt={v.tit} />
                            <hr/>
                            <h4>{v.tit}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Article;