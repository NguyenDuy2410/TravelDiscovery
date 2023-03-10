import React from "react";
import classNames from "classnames/bind";
import style from "../background/Background.module.scss";
const cls = classNames.bind(style);
function Background() {
    return (
        <div className={cls("Background")}>
            <img src="../image/halong.jpg" alt="" />
        </div>
    );
}

export default Background;
