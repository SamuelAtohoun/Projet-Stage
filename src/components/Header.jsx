import React from "react";

function Header(props){
    return(<header>
        <nav>
            <a href="#"><img id="logo" src={props.logo} alt="logo" /></a>
            {/* <!-- <span>TGI Services</span> --> */}
            <ul>
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="./vol.html">Vols</a>
                </li>
                <li>
                    <a href="/Hotel">Hotels</a>
                </li>
                <li>
                    <a href="./contact.html">Contactez-nous</a>
                </li>
                <li>
                    <a href="./AboutUs.html">A propos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./connexion.html">
                        <span className="connexion">Connexion</span>
                        <i className="bi bi-person-plus-fill icon-spacing connexion"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="line"></div>
    </header>
    )
}

export default Header;