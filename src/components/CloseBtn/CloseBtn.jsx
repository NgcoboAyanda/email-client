import React from 'react';

import './CloseBtn.css';

const CloseBtn = ({size, onClick=null}) => {

    return (
        <button className={`ui-btn ui-btn_size-${size} close-btn`} onClick={()=>{
            if(onClick){
                onClick();
            }
        }}>
            <div>
                <div className="ui-btn__icon">
                    <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                    <g id="ic-cross">
                    <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 1 .708 0L8 7.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 8l3.147 3.146a.5.5 0 0 1-.708.708L8 8.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 8 4.146 4.854a.5.5 0 0 1 0-.708Z"></path>
                    </g>
                    </svg>
                </div>
            </div>
        </button>
    )
}

export default CloseBtn;