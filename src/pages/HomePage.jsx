import Header from "../components/Header.jsx";
import CardContainer from "../components/CardContainer.jsx";
import ViewInfo from "../components/ViewInfo.jsx";

const HomePage = () => {
    return (
        <>
            <Header title='title' subtitle='subtitle' />
            <CardContainer />
            <ViewInfo />
        </>
    );
}

export default HomePage;