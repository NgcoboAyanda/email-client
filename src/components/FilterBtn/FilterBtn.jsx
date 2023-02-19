import React from 'react';
import { useSelector } from 'react-redux';

import './FilterBtn.css';

import UtilityButton from '../UtilityButton/UtilityButton';


const FilterBtn = ({id=''}) => {
    const {filterEmails: currentFilterValue} = useSelector(state=>state.mail)

    return (
        <div className="filter-btn" id={id}>
            <div>
                <button className="filter-btn__button   filter-btn__item    filter-btn__item_mobile">
                    <div>
                        <div className="filter-btn__button__icon">
                            <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                            <g id="ic-filter">
                            <path fill-rule="evenodd" d="M7.003 9.123v3.568l1.994.998V9.123L14.377 3H1.623l5.38 6.123Zm-6.3-5.655 5.3 6.032V13a.5.5 0 0 0 .276.447l2.995 1.5a.5.5 0 0 0 .723-.447v-5l5.3-6.032A.9.9 0 0 0 14.6 2H1.4a.9.9 0 0 0-.697 1.468Z"></path>
                            </g>
                            </svg>
                        </div>
                        <div className="filter-btn__button__label">
                            {currentFilterValue}
                        </div>
                    </div>
                </button>
                <UtilityButton
                    id="filter-all-btn"
                    icon="All"
                    className="filter-btn__item filter-btn__item_desktop"
                    size="small"
                    iconCentered={true}
                />
                <UtilityButton
                    id="filter-read-btn"
                    icon="Read"
                    className="filter-btn__item filter-btn__item_desktop"
                    size="small"
                    iconCentered={true}
                />
                <UtilityButton
                    id="filter-unread-btn"
                    icon="Unread"
                    className="filter-btn__item filter-btn__item_desktop"
                    size="small"
                    iconCentered={true}
                />
            </div>
        </div>
    )
}

export default FilterBtn;