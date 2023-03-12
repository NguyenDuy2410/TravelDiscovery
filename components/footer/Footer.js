import React from "react";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
import { dataFooter } from "../../JsonData/FakeData";
import { dataFooterEN } from "../../JsonData/FakeData";
import style from "../footer/Footer.module.scss";
import CompFooter from "./comp_Footer/CompFooter";
import ContactInfo from "./contact_Info/ContactInfo";
import { locales } from "i18n";

const cls = classNames.bind(style);

function Footer() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = locales[i18n.language];
    const dataFooterFinal =
        currentLanguage === "Tiếng Việt" ? dataFooter : dataFooterEN;
    return (
        <div className={cls("Footer")}>
            {dataFooterFinal.map((value, index) => {
                return (
                    <CompFooter
                        key={value.dataFooter_id}
                        southern={value.dataMienNam}
                        north={value.dataMienBac}
                    />
                );
            })}
            {dataFooterFinal.map((value, index) => {
                return (
                    <ContactInfo
                        key={value.dataFooter_id}
                        contact={value.dataContact}
                        info={value.dataInfo}
                        title_Info={value.dataTitle.title_Info}
                        title_Contact={value.dataTitle.title_Contact}
                    />
                );
            })}
        </div>
    );
}

export default Footer;
