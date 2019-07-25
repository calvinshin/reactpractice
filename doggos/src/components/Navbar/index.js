import React from "react";
import {Link} from "react-router-dom";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

function Navbar() {
    return(
        <div>
            This is the navbar
            <ul>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/discover">
                        Discover
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        Search
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;