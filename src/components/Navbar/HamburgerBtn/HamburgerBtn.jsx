import React from 'react';

import './HamburgerBtn.css';

const HamburgerBtn = ({onClick=null}) => {

    return (
        <button className="hamburger-btn nav-btn" onClick={()=>{
            if(onClick){
                onClick()
            }
        }}>
            <div>
                <div className="hamburger-btn__icon">
                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/></svg>
                </div>
            </div>
        </button>
    )
}

export default HamburgerBtn;