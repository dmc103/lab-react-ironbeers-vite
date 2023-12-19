import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";


function Navbar() {
    console.log("Navbar rendered");

    return (
        <nav style={{ backgroundColor: '#00BFFF', color: 'white', padding: '10px' }}>
            <Link to="/">
                <img src={homeIcon} alt="home icon" />
            </Link>
        </nav>
    );
}

export default Navbar;
