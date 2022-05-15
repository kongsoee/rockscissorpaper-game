import React from 'react'

const Box = (props) => {
  let result;
  if(
    props.title === "COMPUTER" &&
    props.result !== "tie" &&
    props.result !==""
  ){
    result =props.result === "win" ? "lose" :"win";
  }else{
    result = props.result;
  }
  if(props.title === "COMPUTER"){
    console.log("computer", result);
  }
  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
      
        <img className='item-img' src={props.item && props.item.img} alt="v"/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box