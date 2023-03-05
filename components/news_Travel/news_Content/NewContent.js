import React from "react";
import classNames from "classnames/bind";
import style from "./news_Content.module.scss";
const cls = classNames.bind(style);
function NewContent({ rota, img, title, content }) {
    const element =
        rota % 2 === 0 ? (
            <div className={cls("NewContent")}>
                <div className={cls("contentContainer")}>
                    <img src={img} alt="" />

                    <div className={cls("content")}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <i>Đọc thêm</i>
                    </div>
                </div>
            </div>
        ) : (
            <div className={cls("NewContent")}>
                <div
                    style={{ marginLeft: "4%", marginRight: "4%" }}
                    className={cls("contentContainer")}
                >
                    <div className={cls("content")}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <i>Đọc thêm</i>
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
        );

    return element;
}

export default NewContent;
