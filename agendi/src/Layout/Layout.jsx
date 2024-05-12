import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
    return (
        <main style={{height: "100vh"}}>
            <Header />
                {children}
            <Footer />
        </main>
    )
}

export default Layout;