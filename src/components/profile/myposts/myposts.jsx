import React from "react";
import "./myposts.css";
import Post from "./post/post";


const Myposts = (props) => {
 

  let postsElements = props.state.posts.map((data) => (
    <Post message={data.message} key = {data.id} likeCount={data.likeCount} />
  ));

  let newPostElement = React.useRef();

  let addPost = ()=>{
     props.addPost()
  } 

  let changePost = ()=>{
    let text = newPostElement.current.value
    props.changePost(text)
    
  }

  return (
    <div className="myposts">
      <div>My post</div>

      <div>
        <textarea 
        ref={newPostElement}
        onChange={changePost}
        value={props.state.newPost}
        />
      </div>

      <div>
        <button onClick={addPost} >Add</button>
        <button>Delete</button>
      </div>

      {postsElements}
    </div>
  );
};

export default Myposts;
