import React from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import JsonData from "../../JsonData/home_Page.json";
import { CiFacebook } from "react-icons/ci";
import { TbBrandInstagram } from "react-icons/tb";
import { BsSearch, BsCart4, BsBorderRight } from "react-icons/bs";
import {
    TiSocialTwitterCircular,
    TiSocialLinkedinCircular,
} from "react-icons/ti";
import { TiMessages } from "react-icons/ti";
import { AiOutlineCaretDown } from "react-icons/ai";
const cls = classNames.bind(style);
const HeaderData = JsonData.find((i) => i.header_id === "Header_id");
// const BlockCSData = JSONData.find(
//     (i) => i.block_id === "block_customers_contributers"
// );

function Header() {
    const [active, setActive] = React.useState("trangChu");

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
                            style={{ display: "flex", color: "#fff" }}
                        >
                            {HeaderData.language}
                            <AiOutlineCaretDown
                                style={{ marginTop: "4px", fontSize: "1em" }}
                            />
                        </li>
                    </ul>
                </div>
                <div className={cls("search_right")}>
                    <div style={{ width: " 100%;" }}>
                        <input type="text" placeholder="Tìm kiếm" />
                        <BsSearch />
                    </div>
                </div>
                <div className={cls("information")}>
                    <p>Login</p>
                    <p>Sign up</p>
                    <TiMessages />
                    <BsCart4 />
                </div>
            </div>

            <div className={cls("header_bottom")}>
                <div className={cls("header_Left")}>
                    {/* <img src="./pngtree.png" alt="logo" /> */}
                    <div className={cls("title_Logo")}>
                        <span>Viet</span>
                        <span>Travel</span>
                    </div>
                </div>
                <div className={cls("header_menu")}>
                    <ul>
                        <li
                            className={cls(
                                active === "trangChu" ? "active" : ""
                            )}
                            onClick={() => setActive("trangChu")}
                        >
                            Trang chủ
                        </li>

                        <li
                            className={cls(
                                active === "diaDanh" ? "active" : ""
                            )}
                            onClick={() => setActive("diaDanh")}
                        >
                            Địa danh
                        </li>
                        <li
                            className={cls(
                                active === "gioiThieu" ? "active" : ""
                            )}
                            onClick={() => setActive("gioiThieu")}
                        >
                            Giới thiệu
                        </li>
                        <li
                            className={cls(active === "tinTuc" ? "active" : "")}
                            onClick={() => setActive("tinTuc")}
                        >
                            Tin tức
                        </li>
                        <li
                            className={cls(active === "lienHe" ? "active" : "")}
                            onClick={() => setActive("lienHe")}
                        >
                            Liên hệ
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
