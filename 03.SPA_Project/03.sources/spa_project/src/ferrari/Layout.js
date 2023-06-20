import { Outlet } from "react-router-dom";
import Test from "./module/Test";
import Info from "./module/Info";
import ScrollTop from "./common/ScrollTop copy";


export default function Layout(){
    return(
        <>
        <header>
            <ScrollTop />
            <Test />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Info />
        </footer>
        </>
    )
}