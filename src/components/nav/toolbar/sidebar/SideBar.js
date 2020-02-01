import React from 'react';
import './SideBar.css'
const SideBar = () => {
    // let icon = <i className="fa fa-search" aria-hidden="true"></i>
    return (
        <div className = "sidebar">
        <ul className = "sb-prop">
            <li className = "search">
            <i class="fa fa-search icon" aria-hidden="true"></i>
                <input className = "input" type = "search"/>
                
            </li>
            <li><a href = "#">user</a></li>
            <li><a href = "#">our teams</a></li>
            <li><a href = "#">contact us</a></li>
        </ul>
    </div>
    )
}
export default SideBar;