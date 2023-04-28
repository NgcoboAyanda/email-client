import React from 'react';

import './SidebarDropdown.css';

const SidebarDropdown = ({isOpen, setIsOpen, labelOpen, labelClosed}) => {

    return (
        <div className="sidebar__dropdown" onClick={()=>setIsOpen(!isOpen)}>
            <div>
                <div className="sidebar__dropdown__icon">
                    <svg className={`ui-icon ui-icon_small ${isOpen?"ui-icon_unrotated":"ui-icon_rotated90"}`} viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-chevron-down">
                        <path fillRule="evenodd" d="M3.13 6.165a.5.5 0 0 1 .705-.036L8 9.895l4.165-3.766a.5.5 0 1 1 .67.742l-4.367 3.948a.697.697 0 0 1-.936 0L3.165 6.871a.5.5 0 0 1-.036-.706Z"></path>
                        </g>
                    </svg>
                </div>
                <div className="sidebar__dropdown__text">
                    {isOpen?labelOpen:labelClosed}
                </div>
            </div>
        </div>
    )
}

export default SidebarDropdown;