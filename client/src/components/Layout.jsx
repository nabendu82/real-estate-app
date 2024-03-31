import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <div style={{ background: "var(--black)", overflow: "hidden" }}>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default Layout