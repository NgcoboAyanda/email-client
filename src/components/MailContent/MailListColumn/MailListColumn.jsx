import React from "react";
import FilterToolbar from "./FilterToolbar/FilterToolbar";

import './MailListColumn.css';

/* This column will list all emails in the currently selected folder (e.g Inbox, Outbox, Sent) */

const MailListColumn = ({className}) => {

    return (
        <section className={`mail-list-column ${className}`}>
            <div>
                <FilterToolbar/>
            </div>
        </section>
    )
}

export default MailListColumn;