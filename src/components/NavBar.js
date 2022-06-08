import "../styles/NavBar.css";

const NavBar = () => {
return (
    <div className="nav-bar">
        <h1>Art Access</h1>
        <div className="search-and-btn">
            <button>my collection</button>
            <button>home</button>
            <input type="text" name="search" placeholder="search"/>
        </div>
    </div>
)
}

export default NavBar;