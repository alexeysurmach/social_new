import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://wallbox.ru/resize/2560x1440/wallpapers/main2/201742/zakat-more-plaz-tropiki12.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                  <div className={s.posts}>
                      <div className={s.item}>
                          post1
                      </div>
                      <div className={s.item}>
                          post2
                      </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;