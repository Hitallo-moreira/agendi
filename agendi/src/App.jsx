import Calendar from "./components/Calendar";
import DateAvailable from "./components/DateAvailable";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Calendar />
        <DateAvailable />
      </div>
    </>
  )
}

export default App;
