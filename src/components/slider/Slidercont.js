import React from 'react';
import './SliderCont.css';
const SliderCont = (props) => {
    return (
        <div className = "Slider-content">
            <h1>
                our staff
            </h1>
            <div className = "slider">
                <button className = "prv" onClick = {props.onprv}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <div className = "img-holder">
                    <img src = {props.src} alt = "sldr-pic"/>
                    <p className = "txt-dscr">
                        {props.pg}
                    </p>
                </div>
                <button className = "nxt" onClick = {props.onnxt}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}
export default SliderCont;