import {PageHome} from "./components/pages/home/page-home";
import {PageAbout} from "./components/pages/about/page-about";
import {PageImages} from "./components/pages/images/page-images";
import {PageWeather} from "./components/pages/weather/page-weather";

export const pages = [
    {path:"", Component: PageHome},
    {path:"about", Component: PageAbout},
    {path:"weather", Component: PageWeather},
    {path:"images", Component: PageImages},
];