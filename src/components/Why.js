import React from "react";
import Reasons from "./Reasons";
import "./Why.css";
export default function Why() {
    return (
        <div id="why">
            <div class="whyHeader">
                <h1> Why falcon tech?</h1>
            </div>
            <div class="whyContent">
                <Reasons />
            </div>
        </div>
    );
}
