import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://wallbox.ru/resize/2560x1440/wallpapers/main2/201742/zakat-more-plaz-tropiki12.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;