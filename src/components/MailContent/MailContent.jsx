import React from "react";

import './MailContent.css';
import MailContentColumn from "./MailContentColumn/MailContentColumn";
import MailListColumn from "./MailListColumn/MailListColumn";
import Toolbar from "./Toolbar/Toolbar";

const MailContent = () => {

    return (
        <section className="app__mail__content">
            <div>
                <Toolbar/>
                <div className="app__mail__content__column">
                    <div>
                        <MailListColumn
                            className="app__mail__content__column__list"
                        />
                        <MailContentColumn
                            className="app__mail__content__column__content"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MailContent;