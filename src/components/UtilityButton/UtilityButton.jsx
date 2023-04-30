import React from 'react';

import './UtilityButton.css';
import { useSelector } from 'react-redux';

const UtilityButton = ({label='', id, icon, className='', size='mid', iconCentered=false, onClick=null, color='mid'}) => {
    const { currentOpenFolder } = useSelector(state => state.mail)


    const clickBtn = () => {
        if(onClick) {
            onClick();
        }
    }

    const renderUtilityBtn = () => {
        if(label.includes(currentOpenFolder)){
            return null;
        }
        else{
            return (
                <button className={`utility-btn utility-btn_size-${size} ${className} utility-btn_color-${color}`} id={id} onClick={()=>clickBtn()}>
                    <div>
                        <div className={`utility-btn__icon ${iconCentered?'utility-btn__icon_centered':''}`}>
                            {icon}
                        </div>
                    </div>
                </button>
            )
        }
    }

    return (
        <>
            {renderUtilityBtn()}
        </>
    )
}

export default UtilityButton;