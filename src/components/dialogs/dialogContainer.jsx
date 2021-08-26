import React from "react";
import "./dialog.css";
import {
  addMessagesActionCreator,
  changeMessageActionCreator,
} from "../../redux/dialog-reducer";
import Dialog from "./dialog";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.messagesPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessages: () => {
      dispatch(addMessagesActionCreator());
    },
    changeMessage: (text) => {
      dispatch(changeMessageActionCreator(text));
    },
  };
};

let dialoqContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default dialoqContainer;
