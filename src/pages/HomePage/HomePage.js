import HoaNavBar from "../../components/HoaNavBar/HoaNavBar";

function HomePage(props) {
    const { onLogout } = props;

    return (
        <div className="p-home">
            <HoaNavBar onLogout={onLogout}/>
            HomePage
        </div>
    )

}

export default HomePage;