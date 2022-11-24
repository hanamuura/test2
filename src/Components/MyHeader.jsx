import React from "react";
import classes from "./MyHeader.module.css"

const MyHeader = (props) => {
    return(
        <div className={classes.MyHeader}>
            <img className={classes.Img} {...props}/>
        </div>
    );
}

export default MyHeader;