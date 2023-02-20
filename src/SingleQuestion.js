import React,{useState} from 'react'
import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai";



const SingleQuestion = ({question,answer}) => {
  const [showAnswer,setShowAnswer]=useState(false);
  return (
   
<article className="question">
<header>
  <h4>  {question} </h4>
  <button className="btn" onClick={()=>setShowAnswer(!showAnswer)} 
  >
{showAnswer ? < AiFillMinusCircle/>:<AiFillPlusCircle/>}


  </button>
 
</header>
{showAnswer && <p>{answer}</p>}


</article>



  )
}

export default SingleQuestion