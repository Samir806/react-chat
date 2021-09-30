import React from "react";
import "./users.css";
import userPhoto from "./logo.png";
import { NavLink } from "react-router-dom";


let Users = (props) => {
  let pageCount = Math.ceil(props.userCount / props.pageSize);

  let page = [];
  for (let a = 1; a <= pageCount; a++) {
    page.push(a);
  }

  return (
    <div className="users">
      <div>
        {page.map((p) => {
          return (
            <span
              className={props.currentPage === p && "selected"}
              onClick={(e) => {

                props.changePage(p);
                
              }}
            >
              {" "}
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((a) => (
        <div key={a.id}>
          <span>
            <NavLink to={"/profile/" + a.id}>
              <div>
                <img
                  src={a.photos.small != null ? a.photos.small : userPhoto}
                  className="photo"
                />
              </div>
            </NavLink>
          </span>

          <span>
            <div>
              {a.followed ? (
                <button
                  onClick={() => {
                    props.unfollowAC(a.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.followAC(a.id);
                  }}
                >
                  Followed
                </button>
              )}
            </div>
          </span>

          <span>
            <div>{a.name}</div>
            <div>{a.status}</div>
          </span>
          <span>
            <div>{"a.location.country"}</div>
            <div>{"a.location.city"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
