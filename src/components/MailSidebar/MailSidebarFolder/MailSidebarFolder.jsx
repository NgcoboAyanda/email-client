import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentOpenFolder } from "../../../features/mail/mail";

import './MailSidebarFolder.css';

const MailSidebarFolder = ({folder, currentFolder=false}) => {
    const { unread: numberOfUnreadEmails } = useSelector(state => state.mail.folders[folder.id]) || 0;

    const dispatch = useDispatch()

    const renderRefreshFolderBtn = () => {
        if(currentFolder){
            //if we are on the current folder we render the btn
            return (
                <button id="folder-refresh-btn" className="ui-icon ui-icon_small">
                    <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" data-testid="navigation-link:refresh-folder">
                    <g id="ic-arrow-rotate-right">
                    <path fillRule="evenodd" d="M6.646.646a.5.5 0 0 1 .708 0L8.677 1.97a.75.75 0 0 1 0 1.06L7.354 4.354a.5.5 0 1 1-.708-.708l.589-.588a5.001 5.001 0 1 0 4.957 2.215.5.5 0 1 1 .838-.546 6 6 0 1 1-5.7-2.69l-.684-.683a.5.5 0 0 1 0-.708Z"></path>
                    </g>
                    </svg>
                </button>
            )
        }
    }

    const renderUnreadEmailCount = () => {
        if(numberOfUnreadEmails){
            return (
                <div className={`sidebar_mail__folder__count ${currentFolder?'sidebar_mail__folder__count_current':''}`}>
                    {numberOfUnreadEmails}
                </div>
            )
        }
    }

    return (
        <div className={`sidebar_mail__folder ${currentFolder?'sidebar_mail__folder_current':''}`} onClick={()=>dispatch( setCurrentOpenFolder({folder: folder.id}) )}>
            <div>
                <div className="sidebar_mail__folder__icon ui-icon ui-icon_small">
                    {folder.icon}
                </div>
                <div className="sidebar_mail__folder__name">
                    {folder.name}
                </div>
                <div className="sidebar_mail__folder__refresh-btn">
                    {renderRefreshFolderBtn()}
                </div>
                {renderUnreadEmailCount()}
            </div>
        </div>
    )
}

export default MailSidebarFolder;