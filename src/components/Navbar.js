import React from "react";


function Navbar () {
    return (
        <div>
        <header className = "navbar">
        <nav>
        <h1>Header Section</h1>
                <ul>
                    <li><a href="https://www.bbc.co.uk" target="_blank">Link1</a></li>
                    <li>Link2</li>
                    <li>Link3</li>
                </ul>
        </nav>
        </header>
        </div>
    )
}

export default Navbar;
// document.getElementById("something").className += "new-class-name"