import React from 'react';

import './UserBtn.css';
import { useSelector } from 'react-redux';

const UserBtn = () => {
    const {firstName="X"} = useSelector(state => state.user);

    return (
        <div className="user-btn nav-btn">
            <div>
                <div className="user-btn__initial">
                    <div>
                        {firstName[0]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBtn;