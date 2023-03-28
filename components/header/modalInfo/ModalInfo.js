import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./ModalInfo.module.scss";
import { FaFacebook } from "react-icons/fa";
import {
    AiFillGooglePlusCircle,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";

const cls = classNames.bind(style);
function ModalInfo({ isLogin, setIsLogin }) {
    const [count, setCount] = useState(0);
    const handleClose = () => {
        setIsLogin(false);
    };

    console.log(count);
    const handleClick = () => {
        setCount((prevState) => prevState + 1);
    };
    useEffect(() => {
        const modal = document.getElementById("ModalContent");
        window.onclick = function (event) {
            if (event.target == modal) {
                setIsLogin(false);
            }
        };
    }, []);

    const element =
        count % 2 == 0 ? (
            <div
                id="ModalInfo"
                className={cls("ModalInfo")}
                style={
                    isLogin
                        ? { visibility: "visible", opacity: 1, zIndex: 10 }
                        : { visibility: "hidden", opacity: 0, zIndex: 0 }
                }
            >
                <div id="ModalContent" className={cls("modalContent")}>
                    <div className={cls("modalSignIn")}>
                        <div className={cls("signInContent")}>
                            <h1>Sign in</h1>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    fontSize: "2em",
                                }}
                            >
                                <FaFacebook />
                                <AiFillGooglePlusCircle />
                                <AiFillLinkedin />
                                <AiFillGithub />
                            </div>
                            <p>of use your account </p>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Email..."
                                    style={{ marginBottom: "1em" }}
                                />
                                <input type="text" placeholder="Passworld..." />
                            </div>
                            <p>Forgot use password?</p>
                            <button>SINGIN</button>
                        </div>
                    </div>

                    <div className={cls("modalSignUp")}>
                        <span onClick={handleClick} className={cls("close")}>
                            &times;
                        </span>
                        <div className={cls("signUpContent")}>
                            <h1>HELLO Friend!</h1>
                            <button
                                onClick={handleClick}
                                style={{ margin: "0 auto" }}
                            >
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div
                id="ModalInfo"
                className={cls("ModalInfo")}
                style={
                    isLogin
                        ? { visibility: "visible", opacity: 1, zIndex: 10 }
                        : { visibility: "hidden", opacity: 0, zIndex: 0 }
                }
            >
                <div id="ModalContent" className={cls("modalContent")}>
                    <div className={cls("modalSignIn")}>
                        <div className={cls("signInContent")}>
                            <h1>Sign Up</h1>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    fontSize: "2em",
                                }}
                            >
                                <FaFacebook />
                                <AiFillGooglePlusCircle />
                                <AiFillLinkedin />
                                <AiFillGithub />
                            </div>
                            <p>of use your account </p>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Email..."
                                    style={{ marginBottom: "1em" }}
                                />
                                <input
                                    type="text"
                                    placeholder="Passworld..."
                                    style={{ marginBottom: "1em" }}
                                />
                                <input
                                    type="text"
                                    placeholder="Enter the password..."
                                />
                            </div>
                            <button>SING UP</button>
                        </div>
                    </div>
                    <div className={cls("modalSignUp")}>
                        <span onClick={handleClose} className={cls("close")}>
                            &times;
                        </span>
                        <div className={cls("signUpContent")}>
                            <h1>HELLO Friend!</h1>
                            <button
                                onClick={handleClick}
                                style={{ margin: "0 auto" }}
                            >
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );

    return element;
}

export default ModalInfo;
