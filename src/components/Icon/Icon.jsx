import React from "react";

import './Icon.css';

const Icon = ({element, size}) => {

    return (
        <div className={`icon icon_size-${size}`}>
            {element}
        </div>
    )
}

export default Icon;