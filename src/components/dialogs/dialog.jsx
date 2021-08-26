import React from "react";
import "./dialog.css";
import { NavLink } from "react-router-dom";


const DialoqItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div>{props.message}</div>;
};

const Dialog = (props) => {
  
  let dialogsElements = props.state.dialoq.map((data) => (
    <DialoqItem name={data.name} key = {data.id} id={data.id} />
  ));
  let messagesElemets = props.state.messages.map((data) => (
    <Message message={data.message} key = {data.id}/>
  ));

  let addRef = React.useRef();

  let addMessages = ()=> {
    props.addMessages()
  
  }

  let changeMessage = ()=> {
    let text = addRef.current.value
    props.changeMessage(text)
  }
  
  return (
    <div className="dialoq">
      <div className="dialoq-item">{dialogsElements}</div>

      <div className="messages">
        {messagesElemets}
        <textarea 
          ref={addRef}
          value={props.state.newMessage}
          onChange={changeMessage}
        />
        <div>
        <button onClick={addMessages}>Add</button>
      </div>
      </div>
      
    </div>
  );
};

export default Dialog;
