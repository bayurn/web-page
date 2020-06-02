import React from 'react'
import sidebar from '../css/Sidebar.css'

function Sidbar() {
    return (
        <div>
            <div id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <div id="main">
                <button className="openbtn" onClick="openNav()">&#9776; Open Sidebar</button>
                <h2>Collapsed Sidebar</h2>
                <p>Content...</p>
            </div>
        </div>
    )
}

export default Sidbar;