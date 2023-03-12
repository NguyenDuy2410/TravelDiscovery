import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";
import style from "../comp_Footer/CompFooter.module.scss";
const cls = classNames.bind(style);
function CompFooter({ southern, north }) {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    return (
        <div className={cls("CompFooter")}>
            <div className={cls("footer_Top")}>
                <div className={cls("tourSouthern")}>
                    <h2>{t("FOOTER.EXPLORE_SOUTH_SOUTH")}</h2>
                    <div className={cls("location")}>
                        <ul>
                            {southern.map((value, index) => {
                                return <li key={index}>{value}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className={cls("tourNorth")}>
                    <h2>{t("FOOTER.EXPLORE_THE_NORTH")}</h2>
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
