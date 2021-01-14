import React from "react";
import {AppHeader} from "../../ui/header/app-header";
import {AboutMain} from "./page-about-main";
import {AboutImages} from "./about-images";
import "./page-about.scss";

export const PageAbout = () => {


    return (
        <div className={"page page-about"}>
            <AppHeader title={"About The Program"}/>
            <AboutMain/>
            <AboutImages/>
        </div>
    )
}
