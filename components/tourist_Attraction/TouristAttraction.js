import React from "react";
import { dataTourist } from "../../JsonData/dataTour";
import classNames from "classnames/bind";
import style from "./TouristAttraction.module.scss";
import CompAttraction from "./comp_Attraction/CompAttraction";
const cls = classNames.bind(style);
function TouristAttraction() {
    return (
        <div className={cls("TouristAttraction")}>
            <div className={cls("h")}>
                <h1>CÁC THÀNH PHỐ DU LỊCH</h1>
                <h3>Khám phá tất cả các thành phố trong Việt Nam</h3>
            </div>
            <div style={{ height: "80%" }}>
                {dataTourist.map((v, i) => {
                    return (
                        <CompAttraction
                            key={v.dataTourist_id}
                            rota={i}
                            img={v.dataTouristComt.img}
                            title={v.dataTouristComt.title}
                            content={v.dataTouristComt.content}
                            city={v.dataTouristComt.city}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TouristAttraction;
