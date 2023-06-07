import bdata from "../data/bdata";

function Board(){
    return (
        <div className="board">
            <ul>
                {
                    bdata.map((x,i)=>{
                        return (
                        <li>
                            <h4>{x.stit}</h4>
                            <h2>{x.btit}</h2>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
export default Board;