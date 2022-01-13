import React from "react";
import Reasons from "./Reasons";
import "./Page.css";
export default function Page({header,content}) {
    return (
        <div id="Page">
           
                <div class="PageHeader">
                    <h1> {header}</h1>
                </div>
                <div class="PageContent">
                    <p>
                    {content}
                    </p>
                </div>
            
        </div>
    );
}
