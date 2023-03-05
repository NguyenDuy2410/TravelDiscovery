import React from "react";
import classNames from "classnames/bind";
import { dataFooter } from "../../JsonData/dataTour";
import style from "../footer/Footer.module.scss";
import CompFooter from "./comp_Footer/CompFooter";
import ContactInfo from "./contact_Info/ContactInfo";
const cls = classNames.bind(style);
function Footer() {
    return (
        <div className={cls("Footer")}>
            {dataFooter.map((value, index) => {
                return (
                    <CompFooter
                        key={value.dataFooter_id}
                        southern={value.dataMienNam}
                        north={value.dataMienBac}
                    />
                );
            })}
            {dataFooter.map((value, index) => {
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
