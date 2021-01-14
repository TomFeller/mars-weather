import React, {useState, useEffect} from "react";
import {Box} from "../../ui/box/box";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const AboutImages = () => {
    const [images, setImages] = useState([]);
    const [group, setGroup] = useState(0);

    const getImages = (earth_date = "") => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&${earth_date ? `earth_date=${earth_date}&` : ""}api_key=nH66eeaBON75qSaWAydf2NSPQ77SfeUW4RBmb5eN`).then(
            response => response.json()
        ).then(
            success => {
                setImages(success?.photos.map(item => item.img_src))
            }
        )
    };

    useEffect(() => {
        getImages();
    }, []);
    return (
        <div className={"about-images container"}>
            <div className={"row"}>
                <div className={"about-images-title"}>
                    Curiosity rover images <span>from today</span>
                </div>
                <div className={"about-images-slider-wrapper"}>
                    <div className={"about-images-slider"}>
                        {group > 0 && <Box className={"about-images-slider-nav"}
                                           onClick={() => setGroup(group - 1)}>
                            <FaAngleLeft color={"#8d6338"}/>

                        </Box>}

                        {images.slice(group * 5, group * 5 + 5).map((image, index) => {
                            return <Box className={"about-images-slider-item"} key={index}>
                                <div style={{height: "100%", width: "100%", backgroundImage: `url(${image})`}}></div>
                            </Box>
                        })}
                        {images.length > 0 &&
                        <Box className={"about-images-slider-nav"} onClick={() => setGroup(group + 1)}>
                            <FaAngleRight color={"#8d6338"}/>
                        </Box>}

                    </div>
                </div>
            </div>
        </div>
    )
}