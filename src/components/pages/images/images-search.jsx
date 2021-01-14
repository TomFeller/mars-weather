import React, {useState} from "react";

export const ImagesSearch = ({handleSearch}) => {
    const [value, setValue] = useState("");

    const handleSubmit = () => {
        handleSearch(value)
    };
    return (
        <div className={"images-search"}>
            <label>Earth date:</label>
            <div className={"images-search-field"}>
            <input type={"text"}
                   placeholder={"Please enter date"}
                   onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleSubmit}>search</button>
            </div>
        </div>
    )
}