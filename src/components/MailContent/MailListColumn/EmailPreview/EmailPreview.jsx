import React from "react";

import './EmailPreview.css';

const EmailPreview = ({id='', email}) => {
    const {sender, time, subject, read} = email;

    const renderEmailPreviewIcon = () => {
        if(!sender.logo){
            return (
                <span className="email-preview__icon__empty">
                    {sender.name[0]}
                </span>
            )
        }
    }

    return (
        <div className={`email-preview email-preview_${read?'read':'unread'}`} id={id}>
            <div>
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
                            {email.subject}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailPreview;