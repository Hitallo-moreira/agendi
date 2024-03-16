import Calendar from "../components/Calendar";
import Header from "../components/Header";

function Home() {
    return (
        <>
            <Header />
            <div className="main">
                <Calendar />
            </div>
        </>
    )
}

export default Home();