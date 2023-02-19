import React from 'react';
import { useState } from 'react';
import SidebarDropdown from '../SidebarDropdown/SidebarDropdown';

import './CustomFolders.css';

const CustomFolders = () => {
    const [isOpen, setIsOpen] = useState(false);

    const renderContent = () => {
        if(isOpen){
            return(
                <div className="sidebar_mail__custom-folders__content">
                    <div>
                        <div className="sidebar_mail__custom-folders__content__empty-folder">
                            No folders
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="sidebar_mail__custom-folders">
            <div>
                <SidebarDropdown
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    labelOpen="FOLDERS"
                    labelClosed="FOLDERS"
                />
                {renderContent()}
            </div>
        </div>
    )
}

export default CustomFolders;