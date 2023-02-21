import React from "react";
import {useSelector} from "react-redux";

import './MailListColumn.css';

import FilterToolbar from "./FilterToolbar/FilterToolbar";
import EmailPreview from "./EmailPreview/EmailPreview";

/* This column will list all emails in the currently selected folder (e.g Inbox, Outbox, Sent) */

const MailListColumn = ({className}) => {
    const {currentOpenFolder} = useSelector(state => state.mail);
    const {emails} = useSelector(state => state.mail.folders[currentOpenFolder])

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
        <section className={`mail-list-column ${className}`}>
            <div>
                <FilterToolbar/>
                <div className="mail-list-column__emails">
                    <div>
                        {renderEmailsInFolder()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MailListColumn;