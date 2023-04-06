import React from "react";
import DesktopPaginator from "./DesktopPaginator/DesktopPaginator";

import './MailPaginator.css';
import MobilePaginator from "./MobilePaginator/MobilePaginator";

const MailPaginator = () => {

    const currentPageNumber = 1;
    const lastPageNumber = 1;

    return (
        <div className="mail-paginator">
            <div>
                <MobilePaginator
                    className="mail-paginator_mobile"
                    currentPageNumber={currentPageNumber}
                />
                <DesktopPaginator
                    className="mail-paginator_desktop"
                    currentPageNumber={currentPageNumber}
                    lastPageNumber={lastPageNumber}
                />
            </div>
        </div>
    )
}

export default MailPaginator;