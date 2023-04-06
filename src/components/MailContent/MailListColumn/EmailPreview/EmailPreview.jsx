import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSingleEmailSelected, ViewEmail } from "../../../../features/mail/mail";

import './EmailPreview.css';
import EmailPreviewIcon from "./EmailPreviewIcon/EmailPreviewIcon";

const EmailPreview = ({id='', email}) => {
    const {sender, time, subject, read, selected, id: emailId} = email;
    const {currentOpenFolder} = useSelector(state => state.mail)
    const {currentlyOpenEmail} = useSelector(state => state.mail.emailViewer)

    const dispatch = useDispatch();

    const renderEmailPreviewBullet = () => {
        //if email has not been read we want to show a bullet symbol on the left side of the icon
        if(!read){
            return (
                <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                    <g id="ic-circle-filled">
                    <path d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0Z"></path>
                    </g>
                </svg>
            )
        }
    }

    const dispatchToggleSingleEmailSelected = () => {
        dispatch( toggleSingleEmailSelected({
            id: emailId,
            folder: currentOpenFolder,
            previousState: selected
        }) )
    }

    const renderEmailPreviewIcon = () => {
        if(!sender.logo){
            return (
                <EmailPreviewIcon
                    sender={sender}
                    selected={selected}
                    onClick={dispatchToggleSingleEmailSelected}
                />
            )
        }
    }

    return (
        <div className={`email-preview email-preview_${read?'read':'unread'} ${currentlyOpenEmail &&currentlyOpenEmail.id === emailId ? 'email-preview_current': ''}`} id={id} onClick={()=>dispatch(ViewEmail({ email }))}>
            <div>
                <div className="email-preview__bullet">
                    {renderEmailPreviewBullet()}
                </div>
                <div className="email-preview__icon">
                    <div>
                        {renderEmailPreviewIcon()}
                    </div>
                </div>
                <div className="email-preview__content">
                    <div>
                        <div className="email-preview__content__sender">
                            {sender.name}
                        </div>
                        <div className="email-preview__content__subject">
                            <div>
                                <div className="email-preview__content__subject__text">
                                    <div>
                                        {email.subject}
                                    </div>
                                </div>
                                <div className="email-preview__content__subject__elipses">
                                    {
                                        /*
                                            Will only render if subject text  is overflowing
                                        */
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailPreview;