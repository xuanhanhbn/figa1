import './Header.css';

function Header() {
    return (
        <div className="site-header">
            <div className = "main-logo">
                <h1 className="main-heading">Beautice</h1>
                <div className = "main-ellipse-1"></div>
                <div className = "main-ellipse-2"></div>
                <div className = "main-rectangle"></div>
                <div className="main-ellipse"></div>
            </div>
            <div className = "main-menu">
                <ul className = "main_menu-list">
                    <li className = "header-active" >
                        <span>Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                    </li>
                    <li>
                        <span>About</span>
                    </li>
                    <li>
                        <span>Service</span>
                    </li>
                    <li>
                        <span>Gallery</span>
                    </li>
                    <li>
                        <span>Blog</span>
                    </li>
                </ul>
                <div className = "contact_btn">
                    <a href="http://localhost:3000/#">
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;