import React from "react";
import classNames from "classnames/bind";
import style from "./CompAttraction.module.scss";

const cls = classNames.bind(style);
function CompAttraction({ rota, img, title, content, city }) {
    const element =
        rota % 2 == 0 ? (
            <div className={cls("CompAttraction")}>
                <div className={cls("CompAttraction_Top")}>
                    <div className={cls("location_Image")}>
                        {img.map((value, index) => {
                            return <img key={index} src={value} alt="" />;
                        })}
                    </div>
                    <div className={cls("infor_Location_Right")}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <span>Các thành phố:</span>
                        <ul>
                            {city.map((value, index) => {
                                return <li key={index}>{value}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        ) : (
            <div className={cls("CompAttraction")}>
                <div className={cls("CompAttraction_Top")}>
                    <div className={cls("infor_Location_Left")}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <span>Các thành phố:</span>
                        <ul>
                            {city.map((value, index) => {
                                return <li key={index}>{value}</li>;
                            })}
                        </ul>
                    </div>
                    <div className={cls("location_Image")}>
                        {img.map((value, index) => {
                            return <img key={index} src={value} alt="" />;
                        })}
                    </div>
                </div>
            </div>
        );
    return element;
}

export default CompAttraction;
