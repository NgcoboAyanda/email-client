import React from 'react';

import './UtilityButton.css';

const UtilityButton = ({label='', id, icon, className='', size='mid', iconCentered=false}) => {

    return (
        <button className={`utility-btn utility-btn_size-${size} ${className}`} id={id}>
            <div>
                <div className={`utility-btn__icon ${iconCentered?'utility-btn__icon_centered':''}`}>
                    {icon}
                </div>
            </div>
        </button>
    )
}

export default UtilityButton;