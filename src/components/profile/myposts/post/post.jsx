import React from 'react'
import './post.css'


const Post =(props)=>{
    return(
        <div>
        <div className='post'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" />
          {props.message}
         
        </div>
           like {props.likeCount}
        </div>
         

       

        )
    }
    
export default Post;