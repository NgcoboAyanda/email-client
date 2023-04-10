import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Navbar.css'; //style

import HamburgerBtn from './HamburgerBtn/HamburgerBtn';
import SearchBtn from './SearchBtn/SearchBtn';
import UpgradeBtn from './UpgradeBtn/UpgradeBtn';
import ContactsBtn from './ContactsBtn/ContactsBtn';
import SettingsBtn from './SettingsBtn/SettingsBtn';
import UserBtn from './UserBtn/UserBtn';
import InputSearch from '../InputSearch/InputSearch';
import SidebarBtn from './SidebarBtn/SidebarBtn';
import Logo from '../Logo/Logo';
import { toggleMobileSidebar } from '../../features/mail/mail';


const Navbar = () => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const {currentlyOpenEmail} = useSelector(state => state.mail.emailViewer);

    const dispatch = useDispatch();

    return (
        /* If the EmailViewer is open on Mobile we want to hide the nav bar */
        <nav className={`nav ${currentlyOpenEmail?'hidden_mobile':''}`}>
            <div>
                <div className="nav__sidebar">
                    <div>
                        <div className="nav__sidebar__logo">
                            <Logo/>
                        </div>
                        <div className="nav__sidebar__btn">
                            <SidebarBtn/>
                        </div>
                    </div>
                </div>
                <div className="nav__searchbar">
                    <div>
                        <InputSearch
                            value={inputSearchValue}
                            setValue={setInputSearchValue}
                        />
                    </div>
                </div>
                <div className="nav__links">
                    <div>
                        <div className="nav__links__item nav__links__hamburger">
                            <div>
                                <HamburgerBtn
                                    onClick={()=>dispatch(toggleMobileSidebar({}))}
                                />
                            </div>
                        </div>
                        <div className="nav__links__item nav__links__label">
                            <div>
                                <div className="nav__links__label__text">
                                    Inbox
                                </div>
                            </div>
                        </div>
                        <div className="nav__links__item nav__links__search nav__links_spaced">
                            <div>
                                <SearchBtn/>
                            </div>
                        </div>
                        <div className="nav__links__item nav__links__upgrade">
                            <div>
                                <UpgradeBtn/>
                            </div>
                        </div>
                        <div className="nav__links__item nav__links__contacts nav__links_spaced">
                            <div>
                                <ContactsBtn/>
                            </div>
                        </div>
                        <div className="nav__links__item nav__links__settings nav__links_spaced">   
                            <div>
                                <SettingsBtn/>
                            </div>
                        </div>
                        <div className="nav__links__item nav__links__user">
                            <div>
                                <UserBtn/>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;