import React from "react";
import './Toolbar.css'; 
import SideBar from './sidebar/SideBar'
class ToolStaff extends React.Component {
    state = {
        curCon : false
    }
    change = (cur) => {
        (this.setState({curCon : !cur}))
    }
render() {
    let sidebar;
    let tbProp = <div className = "tb-prop">
        <ul className = "gone">
            <li><input className = "input" type = "search"/></li>
            <li><a href = "#">user</a></li>
            <li><a href = "#">our teams</a></li>
            <li><a href = "#">contact us</a></li>
        </ul>
    </div>
    if(this.state.curCon) {
         sidebar = <SideBar/>
    }
    return(
        <header>
            <nav className = "nav-bar">
                <div>
    
                </div>
                <div className = "tb-logo">
                    <a href = "#">logo</a>
                </div>
                <div className = "spacer"></div>
                {tbProp}
                <button className = "btn-toggle" onClick = {() => this.change(this.state.curCon)}><i class="fa fa-bars" aria-hidden="true"></i></button>
                {sidebar}
            </nav>
        </header>
    )
}

};
export default ToolStaff;