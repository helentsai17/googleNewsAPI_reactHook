import React from 'react';
import NewsCard from './newscard'
import style from './narbar.module.css'


function Main(props) {

  function newslist() {
    const thenews = props.news.filter(news=>{
      return news.title.includes(props.seeNews);
    })

    return thenews.map(news => {
      return <div onClick={()=>{props.clickTitle(news.title)}}><NewsCard seeNews={props.seeNews} key={news.publishedAt} news={news} /></div>
    })
  }

  return (
    <div >
      <main className={style.newsmain} style={{"textAlign":"center"}}>
        <h1>NEWS</h1>
        <div onClick={()=>{props.seeall()}}>SEE ALL NEWS</div>
        {newslist()}
      </main>
    </div>
  );
}

export default Main;
