import Calendar from "../components/Calendar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <div className="main">
                <Calendar />
            </div>
            <Footer />
        </>
    )
}

export default Home();