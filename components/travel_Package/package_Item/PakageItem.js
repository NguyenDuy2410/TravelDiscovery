import React from "react";
import classNames from "classnames/bind";
import style from "./PackageItem.module.scss";
const cls = classNames.bind(style);
function PakageItem({ image, destination, title, price, content }) {
    return (
        <div className={cls("PakageItem")}>
            <img src={image} alt="" />
            <div className={cls("itemContent")}>
                <span>{destination}</span>
                <span>{title}</span>
                <span style={{ color: "blue" }}>{price} đ</span>
                <div className={cls("content")}>{content}</div>
            </div>
        </div>
    );
}

export default PakageItem;
