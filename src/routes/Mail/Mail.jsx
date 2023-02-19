import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import './Mail.css';
import MailSidebar from "../../components/MailSidebar/MailSidebar";
import MailContent from "../../components/MailContent/MailContent";
import { useSelector } from "react-redux";

const Mail = () => {
    return (
        <div className="app__mail">
            <div>
                <header className="app__mail__header">
                    <div>
                        <Navbar/>
                    </div>
                </header>
                <main className="app__mail__main">
                    <div>
                        <MailSidebar/>
                        <MailContent/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Mail;