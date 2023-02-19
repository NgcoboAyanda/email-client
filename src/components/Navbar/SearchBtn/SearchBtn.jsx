import React from 'react';

import './SearchBtn.css';

const SearchBtn = () => {

    return (
        <button className="search-btn nav-btn">
            <div>
                <div className="search-btn__icon">
                    <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><g id="ic-magnifier">
                    <path fillRule="evenodd" d="M11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.98 4.227a5.5 5.5 0 1 1 .707-.707l3.127 3.126a.5.5 0 0 1-.708.708l-3.127-3.127Z"></path>
                    </g></svg>
                </div>
            </div>
        </button>
    )
}

export default SearchBtn;