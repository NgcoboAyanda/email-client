import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAllEmailSelected } from '../../../features/mail/mail';
import Checkbox from '../../Checkbox/Checkbox';
import MailPaginator from '../../MailPaginator/MailPaginator';
import UtilityButton from '../../UtilityButton/UtilityButton';

import './Toolbar.css';

const Toolbar = () => {
    const {currentOpenFolder} = useSelector(state => state.mail)
    const [selectCheckboxChecked, setSelectCheckboxChecked] = useState(false);
    const {totalNumber: totalNumberOfEmails, selected: numberOfSelectedEmails} = useSelector(state => state.mail.folders[currentOpenFolder]);
    

    const dispatch = useDispatch();

    const dispatchToggleAllEmailSelected = () => {
        dispatch( toggleAllEmailSelected({folder: currentOpenFolder}) )
    }

    return (
        <div id="mail-toolbar" className="mail-toolbar">
            <div>
                <Checkbox
                    checked={totalNumberOfEmails===numberOfSelectedEmails?true:false}
                    setChecked={setSelectCheckboxChecked}
                    onClick={dispatchToggleAllEmailSelected}
                />
                <UtilityButton
                    label="More Selections"
                    className="mail-toolbar__item"
                    id="more-selections-btn"
                    icon={
                        <svg viewBox="0 0 16 16"role="img" focusable="false" aria-hidden="true">
                            <g id="ic-chevron-down-filled">
                            <path d="M7.627 9.846 4.502 6.72A.422.422 0 0 1 4.8 6h6.4c.376 0 .564.454.298.72L8.373 9.846a.527.527 0 0 1-.746 0Z"></path>
                            </g>
                        </svg>
                    }
                />
                <UtilityButton
                    label="Mark as read"
                    className="mail-toolbar__item   mail-toolbar__item_desktop"
                    id="mark-as-read-btn"
                    icon={
                        <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-envelope-open">
                        <path fillRule="evenodd" d="M14 8.195V11.8c0 .577 0 .949-.024 1.232-.022.272-.06.373-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085C12.75 14 12.377 14 11.8 14H4.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C2 12.75 2 12.377 2 11.8V8.195l5.213 3.218a1.497 1.497 0 0 0 1.574 0L14 8.195Zm-.004-1.173-5.735 3.54a.497.497 0 0 1-.522 0l-5.735-3.54a1.39 1.39 0 0 1 .032-.348 1 1 0 0 1 .157-.323c.062-.084.154-.167.645-.555l3.8-2.995c.365-.287.598-.47.787-.598.178-.12.262-.153.311-.166a1 1 0 0 1 .528 0c.05.013.133.046.311.166.19.128.422.31.787.598l3.8 2.995c.491.388.583.471.645.555a1 1 0 0 1 .156.323c.018.065.028.139.033.348ZM1 7.524c0-.57 0-.855.073-1.117a2 2 0 0 1 .314-.647c.16-.22.385-.396.832-.749l3.8-2.995c.708-.558 1.062-.837 1.453-.944a2 2 0 0 1 1.056 0c.391.107.745.386 1.453.944l3.8 2.995c.447.353.671.53.832.75.143.194.25.413.314.646.073.262.073.547.073 1.117V11.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C13.48 15 12.92 15 11.8 15H4.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C1 13.48 1 12.92 1 11.8V7.524Z"></path>
                        </g>
                        </svg>
                    }
                />
                <span className="mail-toolbar__item   mail-toolbar__item_desktop   mail-toolbar__separator"></span>
                <UtilityButton
                    label="Move to trash"
                    className="mail-toolbar__item   mail-toolbar__item_desktop"
                    id="move-to-trash-btn"
                    icon={
                        <svg viewBox="0 0 16 16" class="icon-16p toolbar-icon mauto" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-trash">
                        <path fill-rule="evenodd" d="M6.5 1a.5.5 0 0 0-.447.276L5.19 3H2a.5.5 0 0 0 0 1h1.022l.435 9.568A1.5 1.5 0 0 0 4.956 15h6.088a1.5 1.5 0 0 0 1.499-1.432L12.978 4H14a.5.5 0 0 0 0-1h-3.191l-.862-1.724A.5.5 0 0 0 9.5 1h-3Zm3.191 2-.5-1H6.809l-.5 1h3.382ZM4.023 4h7.954l-.433 9.523a.5.5 0 0 1-.5.477H4.956a.5.5 0 0 1-.5-.477L4.023 4ZM7 6a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Zm3 0a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                        </g>
                        </svg>
                    }
                />
                <UtilityButton
                    label="Move to archive"
                    className="mail-toolbar__item   mail-toolbar__item_desktop"
                    id="move-to-archive-btn"
                    icon={
                        <svg viewBox="0 0 16 16" class="icon-16p toolbar-icon mauto" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-archive-box">
                        <path d="M5.5 8.5A.5.5 0 0 1 6 8h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Z"></path>
                        <path fill-rule="evenodd" d="M2 6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm0-3h12v2H2V3Zm1 3v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6H3Z"></path>
                        </g>
                        </svg>
                    }
                />
                <UtilityButton
                    label="Move to spam"
                    className="mail-toolbar__item   mail-toolbar__item_desktop"
                    id="move-to-spam-btn"
                    icon={
                        <svg viewBox="0 0 16 16" class="icon-16p toolbar-icon mauto" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-fire">
                        <path fill-rule="evenodd" d="M4.966 6.764a5.839 5.839 0 0 0 1.896-2.74 5.664 5.664 0 0 0 .276-1.839c1.954.548 3.1 2.134 3.1 3.966 0 1.099-.62 2.212-1.48 2.955a9.098 9.098 0 0 1-.01.009c-.038.033-.12.103-.186.175-.06.065-.3.327-.304.742-.003.425.242.819.625 1.002.351.168.67.092.783.06.099-.029.199-.072.238-.09.004 0 .007-.002.01-.003.773-.33 1.797-1.012 2.584-2.348.026 1.067-.167 2.163-.755 3.087l-.016.025-.014.026a4.206 4.206 0 0 1-1.226 1.37 4.469 4.469 0 0 1-1.735.75 4.58 4.58 0 0 1-1.912-.025 4.453 4.453 0 0 1-1.71-.798c-.5-.381-.903-.86-1.183-1.402a3.96 3.96 0 0 1-.081-3.483 4.158 4.158 0 0 1 1.1-1.439Zm-.784-.642a5.147 5.147 0 0 0-1.225 1.662 4.959 4.959 0 0 0 .101 4.361c.35.675.85 1.269 1.465 1.738.615.47 1.33.803 2.095.977.764.175 1.56.186 2.33.033a5.47 5.47 0 0 0 2.123-.92 5.205 5.205 0 0 0 1.516-1.696c1.125-1.77 1.02-3.94.686-5.476a9.987 9.987 0 0 0-.197-.757 8.275 8.275 0 0 0-.271-.758c-.036-.084-.054-.126-.092-.141a.107.107 0 0 0-.098.013c-.033.025-.04.074-.055.174a9.995 9.995 0 0 1-.142.768 8.417 8.417 0 0 1-.247.875c-.504 1.454-1.292 2.275-1.975 2.737a4.088 4.088 0 0 1-.675.37c-.11.046-.165.07-.206.05a.105.105 0 0 1-.057-.091c0-.045.052-.09.154-.178a5.06 5.06 0 0 0 .055-.048c.162-.144.318-.3.466-.466.638-.72 1.122-1.636 1.263-2.618.028-.191.042-.384.042-.58 0-2.438-1.635-4.474-4.218-5.024a8.352 8.352 0 0 0-.378-.068 6.786 6.786 0 0 0-.461-.054C6.107 1 6.07.996 6.044 1.01a.1.1 0 0 0-.048.055c-.01.028 0 .066.018.142a4.663 4.663 0 0 1-.103 2.509 4.827 4.827 0 0 1-1.571 2.27h-.001v-.001c-.054.045-.106.09-.157.137Z"></path>
                        </g>
                        </svg>
                    }
                />
                <span className="mail-toolbar__item   mail-toolbar__item_desktop   mail-toolbar__separator"></span>
                <UtilityButton
                    label="Move to"
                    className="mail-toolbar__item   mail-toolbar__item_desktop"
                    id="move-to-btn"
                    icon={
                        <svg viewBox="0 0 16 16" class="icon-16p toolbar-icon" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-folder-arrow-in">
                        <path fill-rule="evenodd" d="M7.793 9H1V8h6.793L6.646 6.854a.5.5 0 1 1 .708-.708l1.858 1.859a.7.7 0 0 1 0 .99l-1.858 1.859a.5.5 0 0 1-.708-.708L7.793 9Z"></path>
                        <path d="M3 2a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1h2.528a1.5 1.5 0 0 1 .67.158l1.156.578A2.5 2.5 0 0 0 8.472 4H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2H1v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8.472a1.5 1.5 0 0 1-.67-.158l-1.156-.578A2.5 2.5 0 0 0 5.528 2H3Z"></path>
                        </g>
                        </svg>
                    }
                />
                <UtilityButton
                    label="Label as"
                    className="mail-toolbar__item   mail-toolbar__item_desktop"
                    id="label-as-btn"
                    icon={
                        <svg viewBox="0 0 16 16" class="icon-16p toolbar-icon" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-tag">
                        <path fill-rule="evenodd" d="m9.425 14.375 4.95-4.95L7.95 3.002H3v4.95l6.425 6.424Zm-.707.707a1 1 0 0 0 1.414 0l4.95-4.95a1 1 0 0 0 0-1.414L8.657 2.294A1 1 0 0 0 7.95 2H3a1 1 0 0 0-1 1v4.95a1 1 0 0 0 .293.707l6.425 6.425ZM5.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                        </g>
                        </svg>
                    }
                />
                <UtilityButton
                    label="More"
                    className="mail-toolbar__item   mail-toolbar__item_mobile"
                    id="more-btn"
                    icon="..."
                />
                <span className="mail-toolbar__item   mail-toolbar__item_mobile    mail-toolbar__separator"></span>
                <MailPaginator/>
            </div>
        </div>
    )
}

export default Toolbar;