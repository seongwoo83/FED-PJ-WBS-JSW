import "../Index.css";
import Board from "../ferrari/module/Board";
import Model from "../ferrari/module/Model";
import News from "../ferrari/module/News";
import {Ban} from "../ferrari/module/Ban";

function Main() {
    return (
        <>
            <Ban />
            <Model />
            <News />
            <Board />
        </>
    );
}

export default Main;
