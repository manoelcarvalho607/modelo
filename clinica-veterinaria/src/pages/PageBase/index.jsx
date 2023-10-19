import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Cookies from "../../components/Cookies";

function PageBase() {

    return (
        <main>
            <Header/>
            <Cookies/>
                <Outlet/>
            <Footer/>
        </main>

    )
}

export default PageBase;