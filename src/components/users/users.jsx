import { fireEvent } from "@testing-library/react";
import React from "react";
import "./users.css";

let Users = (props) => {
       
     

  return (
    <div className='users'>
      {props.users.map((a) => (
        <div key={a.id}>
          <span>
            <div>
              <img src={a.photo} className="photo" />
            </div>
          </span>

          <span>
            <div>
                {a.followed 
                ? 
                <button onClick= {()=>{ props.unfollow (a.id) } } >Follow</button> : 
                <button onClick= {()=>{ props.follow (a.id) } } >UnFollowed</button>}
               
            </div>
          </span>

          <span>
              <div>{a.fullName}</div>
              <div>{a.status}</div>
          </span>
          <span>
              <div>{a.location.country}</div>
              <div>{a.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
