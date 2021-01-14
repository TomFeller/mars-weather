import React, {useState, useEffect} from "react";
import {Box} from "../../ui/box/box";
import {Navigation} from "../../ui/navigation/navigation";
import {ImagesSearch} from "./images-search";


export const ImagesGallery = () => {
    const [earthDate, setEarhDate] = useState("");
    const [images, setImages] = useState([]);
    const [groupImages, setGroupImages] = useState([]);
    const itemsPerPage = 15;

    const getImages = (earth_date = "") => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&${earth_date ? `earth_date=${earth_date}&`:""}api_key=nH66eeaBON75qSaWAydf2NSPQ77SfeUW4RBmb5eN`).then(
            response => response.json()
        ).then(
            success => {
                 setImages(success?.photos.map(item => item.img_src))

            }
        )
    }

    useEffect(() => {
        getImages();
    }, []);

    useEffect(() => {
        handleNavChange(1);
    }, [images]);

    useEffect(() => {
        if (earthDate) {

            getImages(earthDate);
        }
    }, [earthDate]);

    const handleNavChange = (value) => {
        setGroupImages(images.slice(value * itemsPerPage, value * itemsPerPage + itemsPerPage))
    };


    return (
        <>
            <ImagesSearch handleSearch={(value) => setEarhDate(value)}/>

            <div className={"page-images-gallery row"}>
                {groupImages.map((image, index) => {
                    return (
                        <Box key={index} className={"page-images-box"}>
                            <div className={"page-images-box-item"} style={{backgroundImage: `url(${image})`}}/>
                        </Box>
                    )
                })}
                {images.length > 15 &&
                <Navigation handleChange={handleNavChange}/>
                }

            </div>

        </>
    )
}