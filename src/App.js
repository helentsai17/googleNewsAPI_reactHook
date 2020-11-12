import React, { useState, useEffect } from 'react';
import Header from './component/header'
import Main from './component/main'
import Navbar from './component/navbar'
import Footer from './component/footer'
import axios from 'axios'

function App() {

  const [news, setNews] = useState([])
  const [seenews, setseenews] =useState('')

  useEffect(() => {
    axios({
        method: 'Get',
        url: 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9fa5654718a846f3a98f878580f71ce2'
    }).then(res => {
        setNews(res.data.articles)
        console.log(res.data.articles)
    })
}, 5000)

 function clicktitle(title){
      setseenews(title)
 }

 function seeAll(){
    setseenews('')
    console.log("seeAll")
 }

  return (
    <div >
      <Header />
      <Main news={news} seeNews={seenews} seeall={seeAll} clickTitle={clicktitle}/>
      <Navbar news={news} clickTitle={clicktitle}/>
      <Footer />
    </div>
  );
}

//9fa5654718a846f3a98f878580f71ce2 apikey 

export default App;
