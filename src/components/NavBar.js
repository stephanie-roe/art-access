import "../styles/NavBar.css";
import {Link} from "react-router-dom";

const NavBar = ({returnSearch, query, clearSearch}) => {
return (
    <div className="nav-bar">
        <h1>Art Access</h1>
        <div className="search-and-btn">
            <Link to="/my-collection">
                 <button className="collection-btn">my collection</button>
            </Link>
            <Link to="/">
                <button className="home-btn" onClick={() => clearSearch()}>home</button>
            </Link>
            <input type="text" name="search" placeholder="search" value={query} onChange={ event => returnSearch(event)}/>
        </div>
    </div>
)
}

export default NavBar;