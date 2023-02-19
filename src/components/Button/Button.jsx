import React from 'react';

import './Button.css';

const Button = ({text, size, variant, onClick}) => {



    return (
        <button className={`btn btn_size-${size} btn_variant-${variant}`}>
            <div>
                <div className="btn__text">
                    <div>
                        {text}
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Button;