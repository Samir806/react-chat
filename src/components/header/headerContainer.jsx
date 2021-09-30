import React from "react";
import "./header.css";
import Header from "./header";
import { connect } from "react-redux";
import { setNewUser } from "../../redux/auth-reducer";
import { userAPI } from "../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setNewUser(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setNewUser })(HeaderContainer);
