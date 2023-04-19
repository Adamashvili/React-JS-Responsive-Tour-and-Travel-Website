import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";


class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                        <a href="/"><i className={item.icon}></i> {item.title}</a>
                    </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }

}

export default Navbar
