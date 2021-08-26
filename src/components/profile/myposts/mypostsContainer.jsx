import React from "react";
import "./myposts.css";
import {
  addPostActionCreator,
  changePostActionCreator,
} from "../../../redux/profile-reducer";
import Myposts from "./myposts";
import { connect } from "react-redux";
/* 
const MypostsContainer = (props) => {
  let state = props.post;

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let changePost = (text) => {
    props.dispatch(changePostActionCreator(text));
  };

  return (
    <>
      <Myposts addPost={addPost} changePost={changePost} state={state} />
    </>
  );
}; */

let mapStateToProps = (state) => {
  return {
    state: state.postsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    changePost: (text) => {
      dispatch(changePostActionCreator(text));
    },
  };
};

let MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;
