import React from "react";
import classNames from "classnames/bind";
import style from "./Background_Content.module.scss";

const cls = classNames.bind(style);
function Background_Content() {
    return (
        <div className={cls("Background_Content")}>
            <img src="./image/vietnamguide.png" alt="" />
            <div className={cls("discount_Tickets")}>
                <div>
                    <p>PACKAGE</p>
                    <p>SALE</p>
                    <p>-50%</p>
                    <div className={cls("button_buy")}>Shop now</div>
                </div>
            </div>
        </div>
    );
}

export default Background_Content;
