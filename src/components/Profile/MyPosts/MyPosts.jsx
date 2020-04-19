import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'hi', likesCount: 13},
        {id: 1, message: 'Hello', likesCount: 21}
    ];

    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

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
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;