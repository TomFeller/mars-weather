import React, {useState} from "react";
import {AppHeader} from "../../ui/header/app-header";
import {WeatherGallery} from "./weather-gallery";
import {Dropdown} from "../../ui/dropdown/dropdown";

export const PageWeather = () => {
    const [sortBy, setSortBy] = useState("temprature");

    const handleSortChange = (value) => {
        setSortBy(value);
    }

    const sorting = <Dropdown handleChange={handleSortChange} options={options}/>;

    return (
        <div className={"page page-weather"}>
            <AppHeader title={"Mars Weather"} right={sorting}/>
            <WeatherGallery sortBy={sortBy}/>
        </div>
    )
}

const options = [
    {value: "Temprature", name: "AT"},
    {value: "Wind", name: "HWS"},
    {value: "Pressure", name: "PRE"},
    {value: "First UTC", name: "First_UTC"},
    {value: "Last UTC", name: "Last_UTC"},
];