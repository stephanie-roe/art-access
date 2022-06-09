import "../styles/NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {
return (
    <div className="nav-bar">
        <h1>Art Access</h1>
        <div className="search-and-btn">
            <button>my collection</button>
            <Link to="/">
                <button>home</button>
            </Link>
            <input type="text" name="search" placeholder="search"/>
        </div>
    </div>
)
}

export default NavBar;