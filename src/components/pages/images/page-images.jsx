import React from "react";
import {AppHeader} from "../../ui/header/app-header";
import {ImagesGallery} from "./images-gallery";
import "./page-images.scss";

export const PageImages = () => {


    return (
        <div className={"page page-images"}>
            <AppHeader title={"Mars Images By Date"}/>

            <div className={"container"}>
                <ImagesGallery/>

            </div>

        </div>
    )
}
