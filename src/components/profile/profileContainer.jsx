import React from "react";
import "./profile.css";
import { connect } from "react-redux";
import Profile from "./profile";
import { setUsersProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { userAPI } from "../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userID;
    if (userId == null) {
      userId = 2;
    }
    userAPI.getProfile(userId).then((data) => {
      this.props.setUsersProfile(data);
    });
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.postsPage.profile,
});

let WithRouterData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(WithRouterData);
