import React from "react";
import classNames from "classnames/bind";
import style from "./PackageItem.module.scss";
const cls = classNames.bind(style);
function PakageItem({ image, destination, title, price, content }) {
    return (
        <div className={cls("PakageItem")}>
            <img src={image} alt="" />
            <div className={cls("itemContent")}>
                <h2 style={{ margin: "0.5em 0" }}>{destination}</h2>
                <span>{title}</span>
                <span style={{ color: "blue" }}>{price} đ</span>
                <div className={cls("content")}>{content}</div>
            </div>
        </div>
    );
}

export default PakageItem;
