import React, { useState } from "react";
import { dataNewsTravel } from "../../JsonData/dataTour";
import classNames from "classnames/bind";
import style from "./NewTravel.module.scss";
import NewContent from "./news_Content/NewContent";
const cls = classNames.bind(style);
function NewTravel() {
    const [rota, setRota] = useState(1);
    return (
        <div className={cls("NewTravel")}>
            <div className={cls("h")}>
                <h1>Tin tức & kinh nghiệm du lịch</h1>
                <h3>Đi & trả nghiệm mọi thứ bạn thích</h3>
            </div>
            <div className={cls("NewsContent")}>
                {dataNewsTravel.map((v, i) => {
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
