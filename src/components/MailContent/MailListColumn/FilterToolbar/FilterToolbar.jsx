import React from "react";
import FilterBtn from "../../../FilterBtn/FilterBtn";
import SortBtn from "../../../SortBtn/SortBtn";
import UtilityButton from "../../../UtilityButton/UtilityButton";

import './FilterToolbar.css';

const FilterToolbar = ({ className='' }) => {

    return (
        <div className={`filter-toolbar ${className}`}>
            <div>
                <FilterBtn
                    id="filter-toolbar__filter-btn"
                />
                <SortBtn
                    id="filter-toolbar__sort-btn"
                />
            </div>
        </div>
    )
}

export default FilterToolbar;