import React from 'react';
import NewsCard from './newscard'
import style from './narbar.module.css'

import BlogCards from './blogCard'


function Main(props) {

  function newslist() {
    const thenews = props.news.filter(news=>{
      return news.title.includes(props.seeNews);
    })

    return thenews.map(news => {
      return <div onClick={()=>{props.clickTitle(news.title)}}><NewsCard seeNews={props.seeNews} key={news.publishedAt} news={news} /></div>
    })
  }

  function bloglist() {
    const theblog = props.blog.filter(blog=>{
      return blog.name.includes(props.seeNews);
    })
    // console.log(blog.data[1])
    return theblog.map(blog =>{
       return <div onClick={()=>{props.clickTitle(blog.name)}}><BlogCards seeNews={props.seeNews} key={blog.id} blog={blog}/></div>
    })
  }

  return (
    <div >
      <main className={style.newsmain} style={{"textAlign":"center"}}>
      <h1>NEWS</h1>
        <div onClick={()=>{props.seeall()}}>SEE ALL NEWS</div>
        {bloglist()}
        {newslist()}
      </main>
    </div>
  );
}

export default Main;
