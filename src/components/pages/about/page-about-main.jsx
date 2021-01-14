import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const AboutMain = () => {
    const [image, setImage] =useState({});
    const getImages = (earth_date = "") => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&${earth_date ? `earth_date=${earth_date}&` : ""}api_key=nH66eeaBON75qSaWAydf2NSPQ77SfeUW4RBmb5eN`).then(
            response => response.json()
        ).then(
            success => {
                setImage(success?.photos[Math.floor(Math.random() * 10)])

            }
        )
    };

    useEffect(() => {
        getImages();
    }, []);
    return (
        <div className={"about-main container"}>
            <div className={"about-image-wrapper"}>
                <div className={"about-image"} style={{backgroundImage:`url(${image?.img_src})`}}>
                </div>
                <div className={"about-image-label"}>{image?.rover?.name}</div>
            </div>
            <div className={"about-description"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={"about-nav"}>
                    <button className={"about-nav-btn"}><Link to={"images"}>View Images By Date</Link></button>
                    <button className={"about-nav-btn"}><Link to={"weather"}>View Weather</Link></button>
                </div>
            </div>
        </div>
    )
}