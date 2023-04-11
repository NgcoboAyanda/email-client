import React from "react";
import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
import UtilityButton from "../UtilityButton/UtilityButton";

import './EmailViewer.css';
import UserBtn from "./UserBtn/UserBtn";
import { ClearEmailViewer } from "../../features/mail/mail";


const EmailViewer = ({email=null}) => {

    const {sender, time, subject, content, isFromMailingList=false} = email;

    const currentUserEmail = "johndoe@doemail.com";

    const dispatch = useDispatch();

    const renderMailingListMsg = () => {
        if(!isFromMailingList){
            return (
                <>
                    <span className="icon">
                        <Icon
                            size={"small"}
                            element={<svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><g id="ic-envelope">
                            <path fill-rule="evenodd" d="M2 6.217V10.8c0 .577 0 .949.024 1.232.022.272.06.373.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C3.25 13 3.623 13 4.2 13h7.6c.577 0 .949 0 1.232-.024.272-.022.373-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C14 11.75 14 11.377 14 10.8V6.217L8.786 9.426a1.5 1.5 0 0 1-1.572 0L2 6.217Zm11.982-1.163-5.72 3.52a.5.5 0 0 1-.524 0l-5.72-3.52.006-.086c.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437c.05-.025.15-.063.422-.085C3.25 4 3.623 4 4.2 4h7.6c.577 0 .949 0 1.232.024.272.022.373.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422l.006.086ZM1.218 4.092C1 4.52 1 5.08 1 6.2v4.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C2.52 14 3.08 14 4.2 14h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C15 12.48 15 11.92 15 10.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C13.48 3 12.92 3 11.8 3H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874Z"></path>
                          </g></svg>}
                        />
                    </span>
                    <span className="msg">
                        This message is from a mailing list.
                    </span>
                </>
            )
        }
    }

    const clickGoBackBtn = () => {
        dispatch( ClearEmailViewer() );
    }

    return (
        <div className="email-viewer">
            <div>
                <div className="email-viewer__header">
                    <div>
                        <UtilityButton
                            label="Go back"
                            icon={<svg viewBox="0 0 16 16" class="icon-16p topnav-icon mr0-5" role="img" focusable="false" aria-hidden="true">
                                <g id="ic-arrow-left">
                                <path d="m2.637 8 3.71-3.643a.5.5 0 1 0-.7-.714L1.208 8.001a.7.7 0 0 0 0 .998l4.437 4.357a.5.5 0 0 0 .701-.713L2.637 9h11.86a.5.5 0 1 0 0-1H2.637Z"></path>
                                </g>
                            </svg>}
                            color="light"
                            onClick={clickGoBackBtn}
                        />
                        <UserBtn/>
                    </div>
                </div>
                <div className="email-viewer__subject">
                    {subject}
                </div>
                <div className="email-viewer__content">
                    <div>
                        <div className="email-viewer__content__info">
                            <div>
                                <div className="email-viewer__content__info__address">
                                    <div>
                                        <div className="email-viewer__content__info__address__item  email-viewer__content__info__address__from">
                                            <div className="label">
                                                From
                                            </div>
                                            <div className="address">
                                                {sender.name }
                                                <span className="address__highlight">
                                                    {sender.email}
                                                </span>
                                            </div>
                                            <span className="time">
                                                {time}
                                            </span>
                                        </div>
                                        <div className="email-viewer__content__info__address__item  email-viewer__content__info__address__to">
                                        <span className="label">
                                                To
                                            </span>
                                            <div className="address">
                                                {currentUserEmail}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="email-viewer__content__info__mailing-list">
                                    {renderMailingListMsg()}
                                </div>
                                <div className="email-viewer__content__info__actions">
                                    <UtilityButton
                                        label="Mark as unread"
                                        size="small"
                                        iconCentered={true}
                                        icon={
                                            <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                                            <g id="ic-envelope-dot">
                                            <path fill-rule="evenodd" d="M13.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4.2 3h6.137c-.148.31-.251.647-.302 1H4.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422a4.518 4.518 0 0 0-.006.086l5.72 3.52a.5.5 0 0 0 .524 0l2.701-1.662c.247.258.532.48.846.653l-3.023 1.86a1.5 1.5 0 0 1-1.572 0L2 6.218V10.8c0 .577 0 .949.024 1.232.022.272.06.373.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C3.25 13 3.623 13 4.2 13h7.6c.577 0 .949 0 1.232-.024.272-.022.373-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C14 11.75 14 11.377 14 10.8V7.965c.353-.051.69-.154 1-.302V10.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C13.48 14 12.92 14 11.8 14H4.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C1 12.48 1 11.92 1 10.8V6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C2.52 3 3.08 3 4.2 3Z"></path>
                                            </g>
                                            </svg>
                                        }
                                    />
                                    <span className="divider"></span>
                                    <UtilityButton
                                        label="Move to trash"
                                        size="small"
                                        iconCentered={true}
                                        icon={
                                            <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                                            <g id="ic-trash">
                                            <path fill-rule="evenodd" d="M6.5 1a.5.5 0 0 0-.447.276L5.19 3H2a.5.5 0 0 0 0 1h1.022l.435 9.568A1.5 1.5 0 0 0 4.956 15h6.088a1.5 1.5 0 0 0 1.499-1.432L12.978 4H14a.5.5 0 0 0 0-1h-3.191l-.862-1.724A.5.5 0 0 0 9.5 1h-3Zm3.191 2-.5-1H6.809l-.5 1h3.382ZM4.023 4h7.954l-.433 9.523a.5.5 0 0 1-.5.477H4.956a.5.5 0 0 1-.5-.477L4.023 4ZM7 6a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Zm3 0a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                                            </g>
                                            </svg>
                                        }
                                    />
                                    <span className="divider"></span>
                                    <UtilityButton
                                        label="Move to archive"
                                        size="small"
                                        iconCentered={true}
                                        icon={
                                            <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                                            <g id="ic-folder-arrow-in">
                                            <path fill-rule="evenodd" d="M7.793 9H1V8h6.793L6.646 6.854a.5.5 0 1 1 .708-.708l1.858 1.859a.7.7 0 0 1 0 .99l-1.858 1.859a.5.5 0 0 1-.708-.708L7.793 9Z"></path>
                                            <path d="M3 2a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1h2.528a1.5 1.5 0 0 1 .67.158l1.156.578A2.5 2.5 0 0 0 8.472 4H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2H1v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8.472a1.5 1.5 0 0 1-.67-.158l-1.156-.578A2.5 2.5 0 0 0 5.528 2H3Z"></path>
                                            </g>
                                            </svg>
                                        }
                                    />
                                    <span className="divider"></span>
                                    <UtilityButton
                                        label="Move to spam"
                                        size="small"
                                        iconCentered={true}
                                        icon={
                                            <svg viewBox="0 0 16 16" class="icon-16p toolbar-icon mauto" role="img" focusable="false" aria-hidden="true">
                                            <g id="ic-fire">
                                            <path fill-rule="evenodd" d="M4.966 6.764a5.839 5.839 0 0 0 1.896-2.74 5.664 5.664 0 0 0 .276-1.839c1.954.548 3.1 2.134 3.1 3.966 0 1.099-.62 2.212-1.48 2.955a9.098 9.098 0 0 1-.01.009c-.038.033-.12.103-.186.175-.06.065-.3.327-.304.742-.003.425.242.819.625 1.002.351.168.67.092.783.06.099-.029.199-.072.238-.09.004 0 .007-.002.01-.003.773-.33 1.797-1.012 2.584-2.348.026 1.067-.167 2.163-.755 3.087l-.016.025-.014.026a4.206 4.206 0 0 1-1.226 1.37 4.469 4.469 0 0 1-1.735.75 4.58 4.58 0 0 1-1.912-.025 4.453 4.453 0 0 1-1.71-.798c-.5-.381-.903-.86-1.183-1.402a3.96 3.96 0 0 1-.081-3.483 4.158 4.158 0 0 1 1.1-1.439Zm-.784-.642a5.147 5.147 0 0 0-1.225 1.662 4.959 4.959 0 0 0 .101 4.361c.35.675.85 1.269 1.465 1.738.615.47 1.33.803 2.095.977.764.175 1.56.186 2.33.033a5.47 5.47 0 0 0 2.123-.92 5.205 5.205 0 0 0 1.516-1.696c1.125-1.77 1.02-3.94.686-5.476a9.987 9.987 0 0 0-.197-.757 8.275 8.275 0 0 0-.271-.758c-.036-.084-.054-.126-.092-.141a.107.107 0 0 0-.098.013c-.033.025-.04.074-.055.174a9.995 9.995 0 0 1-.142.768 8.417 8.417 0 0 1-.247.875c-.504 1.454-1.292 2.275-1.975 2.737a4.088 4.088 0 0 1-.675.37c-.11.046-.165.07-.206.05a.105.105 0 0 1-.057-.091c0-.045.052-.09.154-.178a5.06 5.06 0 0 0 .055-.048c.162-.144.318-.3.466-.466.638-.72 1.122-1.636 1.263-2.618.028-.191.042-.384.042-.58 0-2.438-1.635-4.474-4.218-5.024a8.352 8.352 0 0 0-.378-.068 6.786 6.786 0 0 0-.461-.054C6.107 1 6.07.996 6.044 1.01a.1.1 0 0 0-.048.055c-.01.028 0 .066.018.142a4.663 4.663 0 0 1-.103 2.509 4.827 4.827 0 0 1-1.571 2.27h-.001v-.001c-.054.045-.106.09-.157.137Z"></path>
                                            </g>
                                            </svg>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="email-viewer__content__message">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailViewer;