import React from "react";
import UtilityButton from "../../UtilityButton/UtilityButton";

import './DesktopPaginator.css';

const DesktopPaginator = ({className, currentPageNumber, lastPageNumber}) => {

    return (
        <div className={`${className} desktop-paginator`}>
            <div>
                <UtilityButton
                    label="Previous page"
                    className="desktop-paginator__btn"
                    id="desktop-paginator__prev-btn"
                    icon={
                        <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-chevron-left">
                        <path fill-rule="evenodd" d="M10.335 3.13a.5.5 0 0 1 .036.705L6.605 8l3.766 4.165a.5.5 0 1 1-.742.67L5.681 8.468a.697.697 0 0 1 0-.936l3.948-4.367a.5.5 0 0 1 .706-.036Z"></path>
                        </g>
                        </svg>
                    }
                />
                <div className="desktop-paginator__count">
                    <div>
                        <span className="desktop-paginator__count__current-page">
                            {currentPageNumber}
                        </span>
                        <span className="desktop-paginator__count__divider">
                            of
                        </span>
                        <span className="desktop-paginator__count__last-page">
                            {lastPageNumber}
                        </span>
                    </div>
                </div>
                <UtilityButton
                    label="Next page"
                    className="desktop-paginator__btn"
                    id="desktop-paginator__next-btn"
                    icon={
                        <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true">
                        <g id="ic-chevron-right">
                        <path fill-rule="evenodd" d="M5.665 3.13a.5.5 0 0 0-.036.705L9.395 8l-3.766 4.165a.5.5 0 1 0 .742.67l3.948-4.367a.697.697 0 0 0 0-.936L6.371 3.165a.5.5 0 0 0-.706-.036Z"></path>
                        </g>
                        </svg>
                    }
                />
            </div>
        </div>
    )
}

export default DesktopPaginator;