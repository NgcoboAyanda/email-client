import React from 'react';

import './InputSearch.css';

const InputSearch = ({value, setValue}) => {

    return (
        <div className="input input_search">
            <div>
                <div className="input__icon">
                    <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><g id="ic-magnifier">
                    <path fillRule="evenodd" d="M11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.98 4.227a5.5 5.5 0 1 1 .707-.707l3.127 3.126a.5.5 0 0 1-.708.708l-3.127-3.127Z"></path>
                    </g></svg>
                </div>
                <div className="input__box">
                    <input type="search" placeholder="Search messages" value={value} onChange={e=>setValue(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default InputSearch;