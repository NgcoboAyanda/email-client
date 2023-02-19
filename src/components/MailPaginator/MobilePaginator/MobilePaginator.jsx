import React from 'react';

import './MobilePaginator.css';

const MobilePaginator = ({className}) => {
    const currentPageNumber = 1


    return (
        <div className={`${className} mobile-paginator`}>
            <div>
                <button className="mobile-paginator__btn">
                    <div>
                        <div className="mobile-paginator__btn__page-number">
                            {currentPageNumber}
                        </div>
                        <div className="mobile-paginator__btn__icon">
                        <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-chevron-down-filled">
                        <path d="M7.627 9.846 4.502 6.72A.422.422 0 0 1 4.8 6h6.4c.376 0 .564.454.298.72L8.373 9.846a.527.527 0 0 1-.746 0Z"></path>
                        </g>
                        </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default MobilePaginator;