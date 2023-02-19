import React from 'react';
import { useSelector } from 'react-redux';
import MailSidebarFolder from '../MailSidebarFolder/MailSidebarFolder';

import './SystemFolders.css';

const SystemFolders = () => {
    const {currentOpenFolder:currentOpenFolderID} = useSelector(state => state.mail)

    const systemFolderList = [
        {
            name: "Inbox",
            id: 'inbox',
            icon: 
                <svg className="ui-icon ui-icon_small" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><g id="ic-inbox">
                <path fillRule="evenodd" d="M1.022 8.646a2 2 0 0 1 .162-.545l2.28-4.94A2 2 0 0 1 5.28 2h5.44a2 2 0 0 1 1.816 1.162l2.28 4.94.008.017a2.001 2.001 0 0 1 .176.82V12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8.94a2 2 0 0 1 .022-.294ZM14 9v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9h2.586a.5.5 0 0 1 .353.146l.915.915a1.5 1.5 0 0 0 1.06.439h2.172a1.5 1.5 0 0 0 1.06-.44l.915-.914A.5.5 0 0 1 11.414 9H14Zm-.332-1h-2.254a1.5 1.5 0 0 0-1.06.44l-.915.914a.5.5 0 0 1-.353.146H6.914a.5.5 0 0 1-.353-.146l-.915-.915A1.5 1.5 0 0 0 4.586 8H2.332l2.04-4.42A1 1 0 0 1 5.28 3h5.44a1 1 0 0 1 .908.58L13.668 8Z"></path>
                </g></svg>
        },
        {
            name: "Drafts",
            id: 'drafts',
            icon: 
                <svg className="ui-icon ui-icon_small" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><g id="ic-file-lines">
                <path fillRule="evenodd" d="M13 6h-2.5A1.5 1.5 0 0 1 9 4.5V2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6Zm-3-3.586L12.586 5H10.5a.5.5 0 0 1-.5-.5V2.414ZM4 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5.828a2 2 0 0 0-.586-1.414l-2.828-2.828A2 2 0 0 0 9.172 1H4Zm1 6a.5.5 0 0 0 0 1h5.5a.5.5 0 0 0 0-1H5Zm-.5 2.5A.5.5 0 0 1 5 9h3.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5ZM5 11a.5.5 0 0 0 0 1h5.5a.5.5 0 0 0 0-1H5Z"></path>
                </g></svg>
        },
        {
            name: "Sent",
            id: 'sent',
            icon: 
                <svg className="ui-icon ui-icon_small" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><g id="ic-paper-plane">
                <path fillRule="evenodd" d="M12.672 2.636 2.662 5.98l4.102 2.558 5.908-5.9ZM7.467 9.248l2.564 4.094 3.32-9.971-5.884 5.877Zm6.868-8.221a.505.505 0 0 1 .638.638l-4.325 12.99a.505.505 0 0 1-.907.108L6.586 9.724a1.011 1.011 0 0 0-.322-.32L1.238 6.27a.503.503 0 0 1 .107-.905l12.99-4.338Z"></path>
                </g></svg>
        },
        {
            name: "Starred",
            id: 'starred',
            icon:
                <svg className="ui-icon ui-icon_small" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><g id="ic-star">
                <path fillRule="evenodd" d="m8 2.943-1.475 2.63c-.23.411-.633.69-1.087.773l-2.973.541 2.06 2.119c.328.337.488.806.425 1.28l-.39 2.924 2.777-1.282c.42-.194.906-.194 1.326 0l2.777 1.282-.39-2.925a1.543 1.543 0 0 1 .425-1.28l2.06-2.118-2.973-.541a1.567 1.567 0 0 1-1.087-.773L8 2.943Zm.498-1.155a.576.576 0 0 0-.996 0l-1.85 3.296a.567.567 0 0 1-.393.278l-3.795.69a.548.548 0 0 0-.308.923l2.652 2.728c.117.12.173.286.15.45l-.496 3.723c-.058.433.4.757.806.57l3.489-1.61a.582.582 0 0 1 .486 0l3.489 1.61c.406.187.864-.137.806-.57l-.497-3.723a.542.542 0 0 1 .15-.45l2.653-2.728a.548.548 0 0 0-.308-.922l-3.795-.691a.567.567 0 0 1-.394-.278L8.498 1.788Z"></path>
                </g></svg>
        }
    ]

    const renderFolders = () => {
        return systemFolderList.map( (folder, i) => {

            return (
                <React.Fragment key={i}>
                    <MailSidebarFolder
                        folder={folder}
                        currentFolder={folder.id===currentOpenFolderID?true:false}
                    />
                </React.Fragment>
            )
        })
    }

    return (
        <div className="sidebar_mail__system-folders">
            <div>
                {renderFolders()}
            </div>
        </div>
    )
}

export default SystemFolders;