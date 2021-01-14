import React, {useEffect, useState} from "react";
import {WeatherItem} from "./weather-item";
import {fetchApi} from "../../../server/fetch";
import _ from "lodash";
import "./weather-gallery.scss";


export const WeatherGallery = ({sortBy}) => {
    const [renderItems, setRenderItems] = useState([]);

    const updateItems = (data) => {
        const items = data.sol_keys.map(id => {
            return {...data[id], id}
        })
        setRenderItems(items);
    };

    useEffect(() => {
        fetchApi("get",
            "insight_weather",
            (res) => {
                updateItems(res)
            })

    }, []);

    return (
        <div className={"container"}>
             <div className={"weather-gallery-row"}>
                {_.sortBy(renderItems, [(item) => item[sortBy]])?.map((item, index) => {
                    return <WeatherItem {...item} key={index}/>
                })}
            </div>
         </div>
    )
}