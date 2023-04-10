import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import './MailListColumn.css';

import FilterToolbar from "./FilterToolbar/FilterToolbar";
import EmailPreview from "./EmailPreview/EmailPreview";
import { updateMailFolder } from "../../../features/mail/mail";

/* This column will list all emails in the currently selected folder (e.g Inbox, Outbox, Sent) */

const MailListColumn = ({className}) => {
    const {currentOpenFolder} = useSelector(state => state.mail);
    const {folders} = useSelector(state=>state.mail)
    const {emails} = useSelector(state => state.mail.folders[currentOpenFolder])
    const {currentlyOpenEmail} = useSelector(state => state.mail.emailViewer)

    const dispatch = useDispatch()

    useEffect(
        ()=>{
            //this code will execute everytime folders state changes
            const foldersList = Object.keys(folders);
            foldersList.forEach( folderName => {
                dispatch( updateMailFolder({ folder: folderName }) )
            } )
        },
        [emails]
    )

    const renderEmailsInFolder = () => {
        return emails.map( (email, i) => {
            return (
                <React.Fragment key={i}>
                    <EmailPreview
                        email={email}
                    />
                </React.Fragment>
            )
        } );
    }

    return (
        <section className={`mail-list ${currentlyOpenEmail?'hidden_mobile':''}`}>
            <div>
                {/* If the EmailViewer is open on Mobile, we want to hide the toolbar  */}
                <FilterToolbar
                />
                <div className="mail-list__emails">
                    <div>
                        {renderEmailsInFolder()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MailListColumn;