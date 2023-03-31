import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileSidebar } from '../../features/mail/mail';
import Button from '../Button/Button';
import CloseBtn from '../CloseBtn/CloseBtn';
import Logo from '../Logo/Logo';
import CustomFolders from './CustomFolders/CustomFolders';
import LabelFolders from './LabelFolders/LabelFolders';

import './MailSidebar.css';
import MoreFolders from './MoreFolders/MoreFolders';
import SystemFolders from './SystemFolders/SystemFolders';

const MailSidebar = () => {
    const {mobileSidebarOpen} = useSelector(state=>state.mail);

    const dispatch = useDispatch();

    return (
        <section className={`sidebar sidebar_mail ${mobileSidebarOpen?'sidebar_open':'sidebar_closed'}`}>
            <div>
                <div className="sidebar__header">
                    <div>
                        <Logo/>
                        <CloseBtn
                            size="normal"
                            onClick={()=>dispatch(toggleMobileSidebar({}))}
                        />
                    </div>
                </div>
                <div className="sidebar__msg-btn">
                    <div>
                        <Button
                            text="New message"
                            variant="filled"
                            size="big"
                        />
                    </div>
                </div>
                <div className="sidebar__folders">
                    <SystemFolders/>
                    <MoreFolders/>
                    <CustomFolders/>
                    <LabelFolders/>
                </div>
            </div>
        </section>
    )
}

export default MailSidebar;