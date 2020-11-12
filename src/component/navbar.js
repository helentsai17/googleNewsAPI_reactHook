import React, { useState, useEffect } from 'react';
import style from './narbar.module.css'


function Navbar(props) {


    const [searchinput, setsearch] = useState('');
    const [search, setbuttonsearch] = useState('');


    function typeinsearch(e) {
        setsearch(e.target.value)
        console.log(searchinput);
    }

    function startSearch() {
        setbuttonsearch(searchinput)
        console.log(search);
    }

    function newslist() {
        const filternews = props.news.filter((filter) => {
            return filter.title.toLowerCase().includes(search.toLowerCase());
        })

        return filternews.map(news => {
            return <div className={style.newsTitle} onClick={() => { props.clickTitle(news.title) }} key={news.publishedAt}>{news.title.substring(0, 50)}...</div>

        })
    }


    return (
        <aside className={style.navbarleft}>
            <div style={{"padding":"5%"}}>
                <input type="text" className="form-control" placeholder="search news" value={searchinput} onChange={typeinsearch} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button onClick={startSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
                </div>
                
            </div>
            <h3>today's tech news</h3>
            {newslist()}
        </aside>
    );
}

export default Navbar;
