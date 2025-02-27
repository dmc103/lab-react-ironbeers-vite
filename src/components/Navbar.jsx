import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";


function Navbar() {

    return (
        <nav style={{ 
            backgroundColor: '#00BFFF', 
            color: 'white', 
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '600px',
            margin: 'auto',
    }}>
            <Link to="/">
                <img src={homeIcon} alt="home icon" />
            </Link>
        </nav>
    );
}

export default Navbar;
