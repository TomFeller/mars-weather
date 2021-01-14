import React from "react";
import "./dropdown.scss";

export const Dropdown = ({handleChange, options}) => {
    return (
        <div className={"sorting"}>
            <label>Sort By:</label>
            <select onChange={(e) => {
                const name = options.find(option => option.value === e.target.value)?.name;
                handleChange(name)
            }}>
                {options.map((option, index) => <option key={index}>{option.value}</option>)}
            </select>
        </div>
    )
}