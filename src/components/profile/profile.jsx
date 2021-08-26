import React from 'react'
import MypostsContainer from './myposts/mypostsContainer'
import './profile.css'
import ProfilInfo from './profilInfo/profilInfo'


const Profile =(props)=>{
      return(
      <div className='content'>
      <ProfilInfo />  
      <MypostsContainer 
         store = {props.store}

          /* dispatch = {props.dispatch}
          post={props.postsPage} 
         /*  addPost = {props.addPost}  
          updateNewPost = {props.updateNewPost} */  />
      </div>
        )
    }
    
export default Profile;