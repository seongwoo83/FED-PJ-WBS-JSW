import $ from "jquery";
import bdata from "../data/bdata";
import '../css/board.css';

$(()=>{
    $(".grid_bd li").each((i, v)=>{
        $(v).css({
            backgroundImage : `url(${bdata[i].src})`
        })
    })
})
function Board(){
    return (
        <div className="board">
            <ul className="grid_bd">
                {
                    bdata.map((x,i)=>{
                        return (
                        <li key={i}>
                            <h4>{x.stit}</h4>
                            <h2>{x.btit}</h2>
                            <button className="detail">
                                See Detail
                            </button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
export default Board;