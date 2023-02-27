import React from "react";
import classNames from "classnames/bind";
import style from "./TourItem.module.scss";
const cls = classNames.bind(style);
function TourItem({ image, location, quantity }) {
    return (
        <div className={cls("TourItem")}>
            <img alt="" src={image} />
            <div className={cls("item_title")}>
                <p>{location}</p>
                <p>Số lượng tour: {quantity}</p>
            </div>
        </div>
    );
}

export default TourItem;
