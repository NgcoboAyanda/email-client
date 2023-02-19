import React, { useState } from 'react';
import SidebarDropdown from '../SidebarDropdown/SidebarDropdown';

import './LabelFolders.css';

const LabelFolders = () => {
    const [isOpen, setIsOpen] = useState(false);

    const renderContent = () => {
        if(isOpen){
            return(
                <div className="sidebar_mail__label-folders__content">
                    <div>
                        <div className="sidebar_mail__label-folders__content__empty-folder">
                            No Labels
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="sidebar_mail__label-folders">
            <div>
                <SidebarDropdown
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    labelOpen="LABELS"
                    labelClosed="LABELS"
                />
                {renderContent()}
            </div>
        </div>
    )
}

export default LabelFolders;