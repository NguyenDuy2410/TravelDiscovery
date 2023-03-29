import React, { useEffect } from "react";
import classNames from "classnames/bind";
import style from "./ModalMessage.module.scss";
import { BsThreeDots, BsSearch } from "react-icons/bs";
import { BiLinkExternal, BiMessageAltEdit } from "react-icons/bi";
import { MdVideoCall } from "react-icons/md";
const cls = classNames.bind(style);
function ModalMessage({ isMess }) {
    return (
        <div
            style={
                isMess % 2 == 0
                    ? { visibility: "visible", opacity: 1, zIndex: 9999 }
                    : { visibility: "hidden", opacity: 0, zIndex: 0 }
            }
            className={cls("ModalMessage")}
            id="ModalMess"
        >
            <div className={cls("title")}>
                <h2>Chat</h2>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "50%",
                    }}
                >
                    <BsThreeDots />
                    <BiLinkExternal />
                    <MdVideoCall />
                    <BiMessageAltEdit />
                </div>
            </div>
            <div className={cls("searchMessage")}>
                <div style={{ width: " 100%" }}>
                    <BsSearch />
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
            </div>
            <div className={cls("contentMessage")}></div>
            <div className={cls("seeMore")}>
                <h3>Xem tất cả trong Message</h3>
            </div>
        </div>
    );
}

export default ModalMessage;
