import React from "react";
import { followAC, unfollowAC, setUsers } from "../../redux/users-reducer";
import Users from "./users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow : (userID)=>{
            dispatch (followAC(userID))
        },

        unfollow : (userID)=>{
            dispatch (unfollowAC(userID))
        },
        setUsers : (users)=>{
            dispatch (setUsers(users))
        }
    }
};

let usersContainter = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainter;
