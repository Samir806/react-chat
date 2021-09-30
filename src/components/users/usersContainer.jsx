import React from "react";
import {
  followAC,
  unfollowAC,
  setUsers,
  getUsers,
  setcurrentPage,
  setUsersCount,
} from "../../redux/users-reducer";
import Users from "./users";
import { connect } from "react-redux";
import { userAPI } from "../api/api";

class UsersComponent extends React.Component {
  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize)
     

  }

  changePage = (pageNumber) => {
    this.props.setcurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
  };

  render() {
    return (
      <Users
        currentPage={this.props.currentPage}
        users={this.props.users}
        pageSize={this.props.pageSize}
        changePage={this.changePage}
        userCount={this.props.userCount}
        followAC={this.props.followAC}
        unfollowAC={this.props.unfollowAC}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    userCount: state.usersPage.userCount,
    currentPage: state.usersPage.currentPage,
  };
};

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow : (userID)=>{
            dispatch (followAC(userID))
        },

        unfollow : (userID)=>{
            dispatch (unfollowAC(userID))
        },
        setUsers : (users)=>{
            dispatch (setUsersAC(users))
        },
        setcurrentPage: (page)=>{
            dispatch(setcurrentPageAC(page))
        },
        setUsersCount: (count)=>{
            dispatch(setUsersCountAC(count))
        }
    }
}; */

export default connect(mapStateToProps, {
  followAC,
  unfollowAC,
  setUsers,
  setcurrentPage,
  setUsersCount,
  getUsers
})(UsersComponent);
