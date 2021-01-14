import React from "react";
import "./app-header.scss";

export const AppHeader = (
    {title = "Title", right}
) => {
    return (
        <div className={"app-header"}>
            <div className={"container"}>
                <div className={"app-header-title"}>
                    <h1>{title}</h1>
                    {right && <div className={"app-header-right"}>
                        {right}
                    </div> }
                </div>
            </div>
        </div>
    )
};