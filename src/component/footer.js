import React from 'react';
// import style from './narbar.module.css'

const style = {
    backgroundColor: "#F8F8F8",
    textAlign: "center",
    padding: "20px",
    marginTop:"40px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  marginTop:'10px',
  height: '60px',
  width: '100%',
}

function footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                made by Helen Tsai 
            </div>
        </div>
    );
}

export default footer;
