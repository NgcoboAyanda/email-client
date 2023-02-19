import React from 'react';
import { useSelector } from 'react-redux';

import './SortBtn.css';

const SortBtn = ({id=''}) => {
    const {sortEmailsBy: currentSortValue} = useSelector(state => state.mail);

    return (
        <div className="sort-btn" id={id}>
            <div>
                <button className="sort-btn__button">
                    <div>
                        <div className="sort-btn__button__label">
                            {currentSortValue}
                        </div>
                        <div className="sort-btn__button__icon">
                            <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                            <g id="ic-arrow-down-arrow-up">
                            <path fill-rule="evenodd" d="M10.984 2.206a.699.699 0 0 1 .992 0l1.98 1.99a.5.5 0 1 1-.71.705l-1.264-1.27.018 9.848a.5.5 0 1 1-1 .002l-.018-9.855L9.713 4.9a.5.5 0 1 1-.709-.705l1.98-1.99ZM4.5 2.08a.5.5 0 0 1 .5.5v9.793l1.267-1.273a.5.5 0 1 1 .709.705l-1.98 1.99a.699.699 0 0 1-.992 0l-1.98-1.99a.5.5 0 1 1 .71-.705L4 12.372V2.579a.5.5 0 0 1 .5-.5Z"></path>
                            </g>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SortBtn;