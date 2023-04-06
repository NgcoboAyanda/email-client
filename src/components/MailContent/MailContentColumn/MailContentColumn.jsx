import React from 'react';
import { useSelector } from 'react-redux';
import EmailViewer from '../../EmailViewer/EmailViewer';

import './MailContentColumn.css';

/* This column will show the currently selected email*/

const MailContentColumn = ({className}) => {
    const {currentOpenFolder} = useSelector(state=> state.mail);
    const {unread: numberOfUnreadEmails} = useSelector(state => state.mail.folders[currentOpenFolder]);
    const {currentlyOpenEmail} = useSelector(state => state.mail.emailViewer);

    const userFirstName = "Ayanda";

    const renderEmailViewer = () => {
        if(!currentlyOpenEmail){
            //if there's no email open
            return (
                <div className="mail-content__welcome">
                    <div>
                        <div className="mail-content__welcome__text">
                            <span className="name">
                                Welcome {userFirstName}
                            </span>
                            <span className="unread">
                                You have <b>{numberOfUnreadEmails} unread conversation{numberOfUnreadEmails>1?'s':''}</b> in {currentOpenFolder==='allMail'?'all mail': `your ${currentOpenFolder}`}. 
                            </span>
                        </div>

                        <div className="mail-content__welcome__icon">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjgiIGhlaWdodD0iMTY0IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTY4IDE2NCI+CiAgPHBhdGggZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzU3NDFfMTg2NjIpIiBkPSJNMTU3LjcyNyAxNjRIMTAuMTA3QzQuNDc1IDE2NCAwIDE1OS41MjcgMCAxNTMuODkzVjU3aDE2OHY5Ni44OTNjLS4xNjYgNS40NjgtNC42NCAxMC4xMDctMTAuMjczIDEwLjEwN3oiLz4KICA8cGF0aCBmaWxsPSIjNEQzNEIzIiBkPSJNMCA1N2w4My42NzcgNTkuMTE0TDE2OCA1N0gwek0xNjggNTdMODguNjQ5IDEuNjE2YTguNDU1IDguNDU1IDAgMDAtOS45NDIgMEwwIDU3aDE2OHoiLz4KICA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfNTc0MV8xODY2MikiIGQ9Ik0xNDQgNzMuODQ0bC02MC4zMjMgNDIuMjY5TDI0IDczLjk2MVYxNWgxMjB2NTguODQ0eiIvPgogIDxwYXRoIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl81NzQxXzE4NjYyKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMTQ4IDE2My44NzZoMTQxLjA5OWM1LjYzNCAwIDEwLjEwNy00LjY0IDEwLjI3My0xMC4xMDh2LTk2LjQzTDE2LjE0NyAxNjMuODc2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50M19yYWRpYWxfNTc0MV8xODY2MikiIGQ9Ik02My44NzkgNzQuMzUzdjE0LjU2aDEwLjIyVjc0Ljk4NWE1LjExIDUuMTEgMCAwMTUuMTEtNS4xMWgxMC40NzlhMTguNDM2IDE4LjQzNiAwIDAwMTguNDM1LTE4LjQzNyAxOC40NDcgMTguNDQ3IDAgMDAtNS4zOTgtMTMuMDM3QTE4LjQzOCAxOC40MzggMCAwMDg5LjY4OCAzM2gtMjUuODF2MTguMmgxMC4yMnYtOC41ODJoMTQuODk4YTguNzI0IDguNzI0IDAgMTEwIDE3LjQ0NUg3OC4xNjVhMTQuMjgxIDE0LjI4MSAwIDAwLTE0LjI4NiAxNC4yOXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjcGFpbnQ0X2xpbmVhcl81NzQxXzE4NjYyKSIgZD0iTTc5LjIwNiA2OS44NzNBMTUuMzI4IDE1LjMyOCAwIDAwNjMuODggODUuMnYzLjcxMmgxMC4yMlY3NC45ODNhNS4xMSA1LjExIDAgMDE1LjEwNy01LjExeiIvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81NzQxXzE4NjYyIiB4MT0iNzEuNSIgeDI9IjAiIHkxPSI2OCIgeTI9IjE2NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUVCRUZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZENEFGRiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81NzQxXzE4NjYyIiB4MT0iODMuNzYiIHgyPSI4My43NiIgeTE9IjE0LjcwNSIgeTI9IjExNi4xMTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkYzRUYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNTc0MV8xODY2MiIgeDE9IjE5OS41IiB4Mj0iNDUiIHkxPSI3NC41IiB5Mj0iMTY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRUJFRkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkQ0QUZGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDRfbGluZWFyXzU3NDFfMTg2NjIiIHgxPSI3MS41NDMiIHgyPSI3MS41NDMiIHkxPSI4Ni4xNTgiIHkyPSI2NC43NjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZENEJGRCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxQzA1NTQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50M19yYWRpYWxfNTc0MV8xODY2MiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOC4yOCAyNS4yMzcpIHNjYWxlKDU2LjI3NTgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBOTk1RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjY1MkY1Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+Cg==" alt="" />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <EmailViewer
                    email={currentlyOpenEmail}
                />
            )
        }
    }

    return (
        <section className="mail-content">
            <div>
                {renderEmailViewer()}
            </div>
        </section>
    )
}

export default MailContentColumn;