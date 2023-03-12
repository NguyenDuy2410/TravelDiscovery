import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { dataNewsTravel } from "../../JsonData/FakeData";
import { dataNewsTravelEN } from "../../JsonData/FakeData";
import classNames from "classnames/bind";
import style from "./NewTravel.module.scss";
import NewContent from "./news_Content/NewContent";
import { locales } from "i18n";
const cls = classNames.bind(style);
function NewTravel() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const currentLanguage = locales[i18n.language];
    const dataNewsFinal =
        currentLanguage === "Tiếng Việt" ? dataNewsTravel : dataNewsTravelEN;
    const [rota, setRota] = useState(1);
    return (
        <div data-aos="fade-down" className={cls("NewTravel")}>
            <div className={cls("h")}>
                <h1>{t("NEWS_TRAVEL.NEWS_TRAVEL_EXPERIENCES")}</h1>
                <h3>{t("NEWS_TRAVEL.GO_EXPERIENCES_EVERYTHING_YOU_LIKE")}</h3>
            </div>
            <div className={cls("NewsContent")}>
                {dataNewsFinal.map((v, i) => {
                    return (
                        <NewContent
                            key={v.dataNewsTravel_id}
                            rota={i}
                            img={v.dataNews.img}
                            title={v.dataNews.title}
                            content={v.dataNews.content}
                        />
                    );
                })}

                {/* <NewContent
                    img={"./image/anGiang.png"}
                    title={"10 địa điểm nổi tiếng"}
                    content={
                        "khám phá ang giang là lựa chọn tuyệt vời nhấtkhám phá ang giang là lựa chọn tuyệt vời nhấtkhám phá ang giang là lựa chọn tuyệt vời nhấtkhám phá ang giang là lựa chọn tuyệt vời nhấtkhám phá ang giang là lựa chọn tuyệt vời nhấtkhám phá ang giang là lựa chọn tuyệt vời nhất"
                    }
                /> */}
            </div>
        </div>
    );
}

export default NewTravel;
