import React from "react";
import {Box} from "../../ui/box/box";

export const WeatherItem = (props) => {
    const rows = [
        {label: "Data point", value: props.id},
        {label: "Data Temperature[AVG]", value: props.AT?.av},
        {label: "Wind[AVG]", value: props.HWS?.av},
        {label: "Pressure[AVG]", value: props.pressure},
        {label: "First UTC", value: props.First_UTC},
        {label: "Last UTC", value: props.Last_UTC},
    ]
    return <Box className={"weather-item"}>
        <div className={"weather-item-body"}>
        {rows.map((item, index) => {
            return (
                <div className={"weather-item-row"} key={index}>
                    <span className={"weather-item-label"}>{item.label}</span>
                    <span className={"weather-item-value"}>{item.value || "-"}</span>
                </div>
            )
        })}
        </div>
    </Box>
}