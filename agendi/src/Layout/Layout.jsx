import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }) {
    return (
        <main>
            <Header />
                {children}
            <Footer />
        </main>
    )
}

export default Layout;