import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import MailSidebarFolder from '../MailSidebarFolder/MailSidebarFolder';
import SidebarDropdown from '../SidebarDropdown/SidebarDropdown';

import './MoreFolders.css';

const MoreFolders = () => {
    const [isOpen, setIsOpen] = useState(true);

    const {currentOpenFolder:currentOpenFolderID} = useSelector(state => state.mail)

    const moreFoldersList = [
        {
            name: "Archive",
            id: 'archive',
            icon: 
                <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                <g id="ic-archive-box">
                <path d="M5.5 8.5A.5.5 0 0 1 6 8h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Z"></path>
                <path fill-rule="evenodd" d="M2 6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm0-3h12v2H2V3Zm1 3v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6H3Z"></path>
                </g>
                </svg>
        },
        {
            name: "Spam",
            id: 'spam',
            icon:
                <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                <g id="ic-fire">
                <path fill-rule="evenodd" d="M4.966 6.764a5.839 5.839 0 0 0 1.896-2.74 5.664 5.664 0 0 0 .276-1.839c1.954.548 3.1 2.134 3.1 3.966 0 1.099-.62 2.212-1.48 2.955a9.098 9.098 0 0 1-.01.009c-.038.033-.12.103-.186.175-.06.065-.3.327-.304.742-.003.425.242.819.625 1.002.351.168.67.092.783.06.099-.029.199-.072.238-.09.004 0 .007-.002.01-.003.773-.33 1.797-1.012 2.584-2.348.026 1.067-.167 2.163-.755 3.087l-.016.025-.014.026a4.206 4.206 0 0 1-1.226 1.37 4.469 4.469 0 0 1-1.735.75 4.58 4.58 0 0 1-1.912-.025 4.453 4.453 0 0 1-1.71-.798c-.5-.381-.903-.86-1.183-1.402a3.96 3.96 0 0 1-.081-3.483 4.158 4.158 0 0 1 1.1-1.439Zm-.784-.642a5.147 5.147 0 0 0-1.225 1.662 4.959 4.959 0 0 0 .101 4.361c.35.675.85 1.269 1.465 1.738.615.47 1.33.803 2.095.977.764.175 1.56.186 2.33.033a5.47 5.47 0 0 0 2.123-.92 5.205 5.205 0 0 0 1.516-1.696c1.125-1.77 1.02-3.94.686-5.476a9.987 9.987 0 0 0-.197-.757 8.275 8.275 0 0 0-.271-.758c-.036-.084-.054-.126-.092-.141a.107.107 0 0 0-.098.013c-.033.025-.04.074-.055.174a9.995 9.995 0 0 1-.142.768 8.417 8.417 0 0 1-.247.875c-.504 1.454-1.292 2.275-1.975 2.737a4.088 4.088 0 0 1-.675.37c-.11.046-.165.07-.206.05a.105.105 0 0 1-.057-.091c0-.045.052-.09.154-.178a5.06 5.06 0 0 0 .055-.048c.162-.144.318-.3.466-.466.638-.72 1.122-1.636 1.263-2.618.028-.191.042-.384.042-.58 0-2.438-1.635-4.474-4.218-5.024a8.352 8.352 0 0 0-.378-.068 6.786 6.786 0 0 0-.461-.054C6.107 1 6.07.996 6.044 1.01a.1.1 0 0 0-.048.055c-.01.028 0 .066.018.142a4.663 4.663 0 0 1-.103 2.509 4.827 4.827 0 0 1-1.571 2.27h-.001v-.001c-.054.045-.106.09-.157.137Z"></path>
                </g>
                </svg>
        },
        {
            name: "Trash",
            id: 'trash',
            icon:
                <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                <g id="ic-trash">
                <path fill-rule="evenodd" d="M6.5 1a.5.5 0 0 0-.447.276L5.19 3H2a.5.5 0 0 0 0 1h1.022l.435 9.568A1.5 1.5 0 0 0 4.956 15h6.088a1.5 1.5 0 0 0 1.499-1.432L12.978 4H14a.5.5 0 0 0 0-1h-3.191l-.862-1.724A.5.5 0 0 0 9.5 1h-3Zm3.191 2-.5-1H6.809l-.5 1h3.382ZM4.023 4h7.954l-.433 9.523a.5.5 0 0 1-.5.477H4.956a.5.5 0 0 1-.5-.477L4.023 4ZM7 6a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Zm3 0a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                </g>
                </svg>
        },
        {
            name: "All mail",
            id: 'allMail',
            icon:
                <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                <g id="ic-envelopes">
                <path fill-rule="evenodd" d="M4.2 2h7.6c.577 0 .949 0 1.232.024.272.022.373.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422.007.088.012.186.016.295a2.012 2.012 0 0 0-.084-.045C13.48 3 12.92 3 11.8 3H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.084.045c.004-.11.009-.207.016-.295.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437c.05-.025.15-.063.422-.085C3.25 2 3.623 2 4.2 2ZM2 8.217V11.8c0 .577 0 .949.024 1.232.022.272.06.373.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C3.25 14 3.623 14 4.2 14h7.6c.577 0 .949 0 1.232-.024.272-.022.373-.06.422-.085a1 1 0 0 0 .437-.437c.024-.046.058-.138.08-.373l.005-.049C14 12.75 14 12.377 14 11.8V8.217l-5.214 3.209a1.5 1.5 0 0 1-1.572 0L2 8.217ZM1 6.2v-2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C2.52 1 3.08 1 4.2 1h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C15 2.52 15 3.08 15 4.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C13.48 15 12.92 15 11.8 15H4.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C1 13.48 1 12.92 1 11.8V6.2ZM11.8 4H4.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422a6.034 6.034 0 0 0-.016.295 2 2 0 0 1 .084-.045C2.52 5 3.08 5 4.2 5h7.6c1.12 0 1.68 0 2.108.218l.084.045a6.048 6.048 0 0 0-.016-.295c-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C12.75 4 12.377 4 11.8 4Zm2.182 3.054-5.72 3.52a.5.5 0 0 1-.524 0l-5.72-3.52.006-.086c.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437c.05-.025.15-.063.422-.085C3.25 6 3.623 6 4.2 6h7.6c.577 0 .949 0 1.232.024.272.022.373.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422l.006.086Z"></path>
                </g>
                </svg>
        }
    ]

    const renderMoreFoldersContent = () => {
        if(isOpen) {
            return moreFoldersList.map( (folder, i) => {
                return (
                    <React.Fragment key={i}>
                        <MailSidebarFolder
                            folder={folder}
                            currentFolder={folder.id===currentOpenFolderID?true:false}
                        />
                    </React.Fragment>
                )
            } )
        }
    }

    return (
        <div className="sidebar_mail__more-folders">
            <div>
                <SidebarDropdown
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    labelOpen="LESS"
                    labelClosed="MORE"
                />
                <div className={`sidebar_mail__more-folders__content ${isOpen?'sidebar_mail__more-folders__content_margin':''}`}>
                    <div>
                        {renderMoreFoldersContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreFolders;