import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
