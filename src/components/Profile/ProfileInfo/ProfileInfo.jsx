import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://wallbox.ru/resize/2560x1440/wallpapers/main2/201742/zakat-more-plaz-tropiki12.jpg'/>
            </div>
            <div className={s.desriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;
