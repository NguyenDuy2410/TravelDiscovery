import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import { CiFacebook } from "react-icons/ci";
import { TbBrandInstagram } from "react-icons/tb";
import { BsSearch, BsBorderRight } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import {
    TiSocialTwitterCircular,
    TiSocialLinkedinCircular,
} from "react-icons/ti";
import { TiMessages } from "react-icons/ti";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { locales } from "i18n";
const cls = classNames.bind(style);

function Header() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = locales[i18n.language];
    const router = useRouter();
    const [active, setActive] = React.useState("trangChu");

    const handleCroll = () => {
        setActive("trangChu");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handleCrollDiaDanh = () => {
        setActive("diaDanh");
        window.scrollTo({
            top: 1020,
            behavior: "smooth",
        });
    };
    const handleCrollGioiThieu = () => {
        setActive("gioiThieu");
        window.scrollTo({
            top: 3100,
            behavior: "smooth",
        });
    };
    const handleCrollTinTuc = () => {
        setActive("tinTuc");
        window.scrollTo({
            top: 2430,
            behavior: "smooth",
        });
    };
    const handleCrollLienHe = () => {
        setActive("lienHe");
        window.scrollTo({
            top: 4100,
            behavior: "smooth",
        });
    };
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={cls("Header")}>
            <div className={cls("Search")}>
                <div className={cls("search_Left")}>
                    <ul className={cls("social")}>
                        <li>
                            <CiFacebook />
                        </li>
                        <li>
                            <TbBrandInstagram />
                        </li>
                        <li>
                            <TiSocialTwitterCircular />
                        </li>
                        <li>
                            <TiSocialLinkedinCircular />
                        </li>
                        <li
                            className={cls("language")}
                            style={{
                                display: "flex",
                                color: "#fff",
                                width: "6em",
                            }}
                        >
                            {currentLanguage}
                            <AiOutlineCaretDown
                                style={{ marginTop: "4px", fontSize: "1em" }}
                            />
                            <ul className={cls("menu_Nav")}>
                                <li onClick={() => changeLanguage("vn")}>
                                    <img src="../image/vietnam.png" alt="" />{" "}
                                    {t("HEADER.VIETNAMES")}
                                </li>
                                <li onClick={() => changeLanguage("en")}>
                                    <img src="../image/america.png" alt="" />{" "}
                                    {t("HEADER.ENGLISH")}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={cls("search_right")}>
                    <div style={{ width: " 100%;" }}>
                        <input type="text" placeholder="T??m ki???m" />
                        <BsSearch />
                    </div>
                </div>
                <div className={cls("information")}>
                    <p>{t("HEADER.LOGIN")}</p>
                    <p>{t("HEADER.SIGN_UP")}</p>
                    <TiMessages style={{ fontSize: " 1.5em" }} />
                    <BiUserCircle style={{ fontSize: " 1.5em" }} />
                </div>
            </div>

            <div className={cls("header_bottom")}>
                <div className={cls("header_Left")}>
                    {/* <img src="./pngtree.png" alt="logo" /> */}
                    <div className={cls("title_Logo")}>
                        <span>Vi???t</span>
                        <span>Travel</span>
                    </div>
                </div>
                <div className={cls("header_menu")}>
                    <ul>
                        <li
                            className={cls(
                                active === "trangChu" ? "active" : ""
                            )}
                            onClick={handleCroll}
                        >
                            {t("HEADER.HOME_PAGE")}
                        </li>

                        <li
                            className={cls(
                                active === "diaDanh" ? "active" : ""
                            )}
                            onClick={handleCrollDiaDanh}
                        >
                            {t("HEADER.SITES")}
                        </li>

                        <li
                            className={cls(active === "tinTuc" ? "active" : "")}
                            onClick={handleCrollTinTuc}
                        >
                            {t("HEADER.NEWS")}
                        </li>
                        <li
                            className={cls(
                                active === "gioiThieu" ? "active" : ""
                            )}
                            onClick={handleCrollGioiThieu}
                        >
                            {t("HEADER.INTRODUCE")}
                        </li>
                        <li
                            className={cls(active === "lienHe" ? "active" : "")}
                            onClick={handleCrollLienHe}
                        >
                            {t("HEADER.CONTACT")}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
