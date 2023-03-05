import React from "react";
import classNames from "classnames/bind";
import style from "../contact_Info/ContactInfo.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
const cls = classNames.bind(style);

function ContactInfo({ title_Contact, title_Info, info, contact }) {
    return (
        <div className={cls("ContactInfo")}>
            <div className={cls("title_Contact")}>
                <h2>{title_Contact}</h2>
                <div>
                    <ul>
                        {contact.map((value, index) => {
                            return <li key={index}>{value}</li>;
                        })}
                    </ul>
                </div>
            </div>
            <div className={cls("title_Info")}>
                <h2>{title_Info}</h2>
                <div>
                    <ul>
                        {info.map((value, index) => {
                            return <li key={index}>{value}</li>;
                        })}
                    </ul>
                </div>
            </div>
            <div className={cls("social_Network")}>
                <h2>Mạng xã hội</h2>
                <div className={"icon"}>
                    <FaFacebookF />
                    <BsInstagram />
                    <SiZalo />
                    <FiYoutube />
                    <AiFillLinkedin />
                    <TfiEmail />
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
