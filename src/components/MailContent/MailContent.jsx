import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearEmailViewer } from "../../features/mail/mail";

import './MailContent.css';
import MailContentColumn from "./MailContentColumn/MailContentColumn";
import MailListColumn from "./MailListColumn/MailListColumn";
import Toolbar from "./Toolbar/Toolbar";

const MailContent = () => {
    const {currentOpenFolder} = useSelector(state => state.mail);
    const {currentlyOpenEmail} = useSelector(state => state.mail.emailViewer);
    const {emails: folderEmails} = useSelector(state => state.mail.folders[currentOpenFolder]);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(ClearEmailViewer());
        },
        [currentOpenFolder]
    )

    const renderNoMessages = () => {
        if(folderEmails.length === 0){
            //if there are NO emails in the current folder
            return (
                <div className="app__mail__main__content__column__no-messages">
                    <div>
                        <img className="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODAiIGhlaWdodD0iMTYwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTgwIDE2MCI+CiAgPHBhdGggZmlsbD0iI0YyRUZFOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTA1LjA4Ny0uMDAxSDM4LjI1OUE2LjI1OSA2LjI1OSAwIDAwMzIgNi4yNThWMTM3Ljc0YTYuMjU5IDYuMjU5IDAgMDA2LjI1OSA2LjI1OUgxNDEuNzRBNi4yNTkgNi4yNTkgMCAwMDE0OCAxMzcuNzRWNDIuOTEyTDEwNS4wODctLjAwMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9IiNGQUY3RjAiIGQ9Ik0xMDUgMGw0MyA0My0zNi4zOTItLjAwMWE2LjQwMyA2LjQwMyAwIDAxLTYuNDA4LTYuMzk4TDEwNSAweiIvPgogIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2ZfNTc0MV8xODY3MSkiIG9wYWNpdHk9Ii4zNiI+CiAgICA8cGF0aCBmaWxsPSIjM0QzQTMzIiBkPSJNOTYuMDU1IDExMy40OEEzMC4wNTUgMzAuMDU1IDAgMDE2MS4yOCA5MS43OTZsLS4wNzUtLjI3NmEzMC43MDUgMzAuNzA1IDAgMDEzLjcxLTI0LjQxMUw3Ni43IDQ4LjVsLTMuNDM2IDIyLjkwNkExOC44MDUgMTguODA1IDAgMDA5MS44NjEgOTNoNC4wODNjNC4zNjggMCA4LjU5OSAxLjUxOCAxMS45NzEgNC4yOTVMMTExLjIgMTAwbDE2LjUgMTUuNSAyMC41IDI4LjVoLTcuNWwtMzQuNS0zMi41LTEwLjE0NSAxLjk4eiIvPgogIDwvZz4KICA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTc0MV8xODY3MSkiIGQ9Ik0xMTQuMDMxIDExNC4xNDRhMiAyIDAgMDEwLTIuODI5bDcuNzc4LTcuNzc4YTIgMiAwIDAxMi44MjkgMGwzMC45MTkgMzAuOTJhNy41IDcuNSAwIDAxMCAxMC42MDYgNy41IDcuNSAwIDAxLTEwLjYwNiAwbC0zMC45Mi0zMC45MTl6Ii8+CiAgPHBhdGggZmlsbD0iIzgwN0M3NSIgZD0iTTEwNy42NjkgMTAyLjEyNGw0Ljk1LTQuOTUgNy43NzggNy43NzgtNC45NSA0Ljk1LTcuNzc4LTcuNzc4eiIvPgogIDxwYXRoIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl81NzQxXzE4NjcxKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEzLjMyNCAxMDIuMTIzYzEzLjI3OC0xMy4yNzggMTMuMjc4LTM0LjgwNiAwLTQ4LjA4NC0xMy4yNzgtMTMuMjc3LTM0LjgwNi0xMy4yNzctNDguMDgzIDAtMTMuMjc4IDEzLjI3OC0xMy4yNzggMzQuODA2IDAgNDguMDg0IDEzLjI3NyAxMy4yNzggMzQuODA1IDEzLjI3OCA0OC4wODMgMHptLTMuNTM2LTMuNTM2YzExLjMyNi0xMS4zMjUgMTEuMzI2LTI5LjY4NyAwLTQxLjAxMi0xMS4zMjUtMTEuMzI1LTI5LjY4Ny0xMS4zMjUtNDEuMDEyIDBzLTExLjMyNSAyOS42ODcgMCA0MS4wMTIgMjkuNjg3IDExLjMyNSA0MS4wMTIgMHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl81NzQxXzE4NjcxKSIgZD0iTTEwOS43OSA1Ny41NzZjMTEuMzI1IDExLjMyNSAxMS4zMjUgMjkuNjg3IDAgNDEuMDEycy0yOS42ODcgMTEuMzI1LTQxLjAxMiAwLTExLjMyNS0yOS42ODcgMC00MS4wMTIgMjkuNjg3LTExLjMyNSA0MS4wMTIgMHoiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAxLjA5MSA1NC42NzZjNC44NDIgMi41ODMgNy42MiA2LjgyNyA2LjIwNSA5LjQ4LTEuNDE2IDIuNjUxLTYuNDg4IDIuNzA3LTExLjMzLjEyNC00Ljg0LTIuNTgzLTcuNjE4LTYuODI3LTYuMjAzLTkuNDggMS40MTUtMi42NTEgNi40ODctMi43MDcgMTEuMzI4LS4xMjR6Ii8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTc0MV8xODY3MSIgeDE9IjEzNy4yIiB4Mj0iMTIyLjYxMSIgeTE9IjEyMi40OTkiIHkyPSIxMzguMjAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkExODAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODQwRDBEIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzU3NDFfMTg2NzEiIHgxPSI5Mi4yMzYiIHgyPSI2OC4yIiB5MT0iMTEyLjUzNSIgeTI9IjQzLjQ5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTU5MTg5Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0UzRTBEQSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl81NzQxXzE4NjcxIiB4MT0iMTA1LjciIHgyPSI3MC4xNDciIHkxPSIxMDMuOTk5IiB5Mj0iNDYuNzIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGM0YxRUUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGQ0Y1IiBzdG9wLW9wYWNpdHk9Ii43NCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9ImZpbHRlcjBfZl81NzQxXzE4NjcxIiB3aWR0aD0iMTE4LjA1MSIgaGVpZ2h0PSIxMjUuNSIgeD0iNDUuMTQ5IiB5PSIzMy41IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgICAgIDxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzU3NDFfMTg2NzEiIHN0ZERldmlhdGlvbj0iNy41Ii8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+Cjwvc3ZnPgo=" alt=""/>
                        <div className="bolded-text">
                            No messages found
                        </div>
                        <div className="normal-text">
                            You do not have any messages here
                        </div>
                    </div>
                </div>
            )
        }
        else{
            //if there are emails in the current folder
            return (
                <>
                    <MailListColumn
                        className={`app__mail__main__content__column__list`}
                    />
                    <MailContentColumn
                        className={`app__mail__main__content__column__content`}
                    />
                </>
            )
        }
    }

    return (
        <section className="app__mail__main__content">
            <div>
                <Toolbar
                    className={currentlyOpenEmail?'hidden_mobile':''}
                />
                <div className="app__mail__main__content__column">
                    <div>
                        {renderNoMessages()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MailContent;