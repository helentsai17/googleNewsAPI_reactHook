import React, { useState, useEffect } from 'react';
import style from './narbar.module.css'


function newsCard(props) {

    const thedaytime = props.news.publishedAt.substring(0, 10);

    let seeallnews = (
        <p>{props.news.content.substring(0, 200)}</p>
    )
    if (props.seeNews !== "") {
        seeallnews = (
            <div >
                <p>{props.news.description} 
                <a href={props.news.url}>read more from the website</a>
                </p>
            </div>
        )
    }
    return (
        <div className={style.newsCard}>
            <img className={style.newsimage} src={props.news.urlToImage} alt="" />
        <div style={{"textAlign":"left"}}>
            <h3>{props.news.title}</h3>
            <p>{props.news.author}  {thedaytime}</p>
            {seeallnews}
            </div>
        </div>
    );
}

export default newsCard;