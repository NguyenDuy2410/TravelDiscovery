import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./InfoCity.module.scss";
import { RiCloudWindyLine } from "react-icons/ri";
import { MdOutlineWaterDrop } from "react-icons/md";
const cls = classNames.bind(style);
function InfoCity({ city, date, windPower, amountOfWater, img, temperature }) {
    let day = new Date().getUTCDay();

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className={cls("InfoCity")}>
            <div className={cls("InfoLeft")}>
                <h1>{city}</h1>
                <h3>{date[day]}</h3>
                <p>
                    <RiCloudWindyLine />
                    {windPower}
                </p>
                <p>
                    <MdOutlineWaterDrop />
                    {amountOfWater}
                </p>
            </div>
            <div>
                <img
                    className={cls(
                        "animate__animated animate__bounce animate__flip"
                    )}
                    src={img}
                    alt=""
                />
            </div>
            <div className={cls("InfoRight")}>
                <h2>
                    {temperature}
                    <sup>o</sup>C
                </h2>
                <h1>
                    {dateState.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </h1>
            </div>
        </div>
    );
}

export default InfoCity;
