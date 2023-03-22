import React from "react";

import './EmailPreviewIcon.css';

const EmailPreviewIcon = ({sender, selected, onClick=null}) => {
    //if the current email is selected we wanna show a checkmark inside the box

    const renderCheckmark = () => {
        if(selected){
            return (
                <svg viewBox="0 0 16 16" class="icon-16p checkbox-fakecheck-img" role="img" focusable="false" aria-hidden="true"><g id="ic-checkmark"><path fill-rule="evenodd" d="M13.854 4.148a.51.51 0 0 1 0 .714l-6.859 6.93a.695.695 0 0 1-.99 0L3.146 8.905a.509.509 0 0 1 0-.714.496.496 0 0 1 .708 0L6.5 10.864l6.646-6.716a.496.496 0 0 1 .708 0Z"></path></g></svg>
            )
        }
        else {
            return (
                <>
                    {sender.name[0]}
                </>
            )
        }
    }

    return (
        <div className={`email-preview__icon email-preview__icon_${selected?'checked':'empty'}`} onClick={()=>{
            if(onClick){
                onClick();
            }
        }} >
            <div>
                {renderCheckmark()}
            </div>
        </div>
    )
}

export default EmailPreviewIcon;