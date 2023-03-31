import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearEmailViewer } from "../../features/mail/mail";

import './MailContent.css';
import MailContentColumn from "./MailContentColumn/MailContentColumn";
import MailListColumn from "./MailListColumn/MailListColumn";
import Toolbar from "./Toolbar/Toolbar";

const MailContent = () => {
    const {currentOpenFolder} = useSelector(state => state.mail);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(ClearEmailViewer());
        },
        [currentOpenFolder]
    )

    return (
        <section className="app__mail__main__content">
            <div>
                <Toolbar/>
                <div className="app__mail__main__content__column">
                    <div>
                        <MailListColumn
                            className="app__mail__main__content__column__list"
                        />
                        <MailContentColumn
                            className="app__mail__main__content__column__content"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MailContent;