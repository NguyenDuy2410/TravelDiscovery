import React from "react";
import classNames from "classnames/bind";
import style from "../comp_Footer/CompFooter.module.scss";
const cls = classNames.bind(style);
function CompFooter({ southern, north }) {
    return (
        <div className={cls("CompFooter")}>
            <div className={cls("footer_Top")}>
                <div className={cls("tourSouthern")}>
                    <h2>Khám phá miền nam</h2>
                    <div className={cls("location")}>
                        <ul>
                            {southern.map((value, index) => {
                                return <li key={index}>{value}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className={cls("tourNorth")}>
                    <h2>Khám phá miền bắc</h2>
                    <div className={cls("location")}>
                        <ul>
                            {north.map((value, index) => {
                                return <li key={index}>{value}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompFooter;
