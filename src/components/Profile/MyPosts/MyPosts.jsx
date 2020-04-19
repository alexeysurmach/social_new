import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'hi', likesCount: 13},
        {id: 1, message: 'Hello', likesCount: 21}
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message={postsData[0].message} likes={postsData[0].likesCount}/>
                    <Post message={postsData[1].message} likes={postsData[1].likesCount}/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;