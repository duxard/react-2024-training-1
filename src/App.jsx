import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import CardContainer from "./components/CardContainer.jsx";
import Jobs from "./components/Jobs.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Header title='title' subtitle='subtitle'/>
            <CardContainer/>
            <Jobs/>
        </>
    );
};

export default App;
