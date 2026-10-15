import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
    return (
        <div className="layout">
            <header className="site-header">
                <div className="container">
                    <NavBar />
                </div>
            </header>
            <main className="site-main container">
                <Outlet />
            </main>
            <footer className="site-footer">
                <div className="container">© Momentr</div>
            </footer>
        </div>
    );
}

export default Layout;
