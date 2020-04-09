import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
                <div className={s.posts}>
                    <Post message='hi' likes ='13'/>
                    <Post message='Hello' likes ='21'/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;