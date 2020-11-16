import React, { useState, useEffect } from 'react';
import style from './narbar.module.css'


function blogCard(props) {

    let seeallnews = (
        <div>
            <img className={style.newsimage} src={props.blog.img} alt="" />
            <div style={{ "textAlign": "left" }}>
                <h3>{props.blog.name}</h3>
                <p>{props.blog.author}  {props.blog.date}</p>
                <p>{props.blog.summary.substring(0, 200)}</p>
            </div>
        </div>
    )

    //no click newsx
    if (props.seeNews !== "") {
        seeallnews = (
            <div >
                <img className={style.newsimage} src={props.blog.img} alt="" />
                <div style={{ "textAlign": "left" }}>
                    <h3>{props.blog.name}</h3>
                    <p>{props.blog.author}  {props.blog.date}</p>
                </div>
                <p>{props.blog.description} </p>
                <img className={style.newsimage} src={props.blog.blogUrl} alt="" />
            </div>
        )
    }
    return (

        <div className={style.newsCard}>
            {seeallnews}
        </div>
    );
}

export default blogCard;