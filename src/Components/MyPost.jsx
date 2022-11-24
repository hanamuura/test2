import React from "react";

const MyPost = (props) => {
    return(
        <div className="post">
            <h1>{props.post.title}</h1>
            <h4>{props.post.describtion}</h4>
        </div>
    );
}

export default MyPost;