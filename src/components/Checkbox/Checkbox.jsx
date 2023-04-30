import React from "react";

import './Checkbox.css';

const Checkbox = ({checked=false, setChecked, onClick=null}) => {

    const renderCheckboxTick = () => {
        if(checked) {
            return (
                <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                <g id="ic-checkmark">
                <path fill-rule="evenodd" d="M13.854 4.148a.51.51 0 0 1 0 .714l-6.859 6.93a.695.695 0 0 1-.99 0L3.146 8.905a.509.509 0 0 1 0-.714.496.496 0 0 1 .708 0L6.5 10.864l6.646-6.716a.496.496 0 0 1 .708 0Z"></path>
                </g>
                </svg>
            )
        }
    }

    return (
        <div id="checkbox" className={`checkbox ${checked?'checkbox_checked':''}`} onClick={()=>{
            setChecked(!checked);
            if(onClick){
                onClick();
            }
        }}>
            <div>
                <div className="checkbox__tick">
                    {renderCheckboxTick()}
                </div>
            </div>
        </div>
    )
}

export default Checkbox;