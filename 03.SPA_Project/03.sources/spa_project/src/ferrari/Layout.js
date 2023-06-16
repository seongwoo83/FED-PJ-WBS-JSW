import { Outlet } from "react-router-dom";
import Test from "./module/Test";
import Info from "./module/Info";


export default function Layout(){
    return(
        <>
        <header>
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