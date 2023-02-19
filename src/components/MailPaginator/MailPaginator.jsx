import React from "react";
import DesktopPaginator from "./DesktopPaginator/DesktopPaginator";

import './MailPaginator.css';
import MobilePaginator from "./MobilePaginator/MobilePaginator";

const MailPaginator = () => {

    return (
        <div className="mail-paginator">
            <div>
                <MobilePaginator
                    className="mail-paginator_mobile"
                />
                <DesktopPaginator
                    className="mail-paginator_desktop"
                />
            </div>
        </div>
    )
}

export default MailPaginator;