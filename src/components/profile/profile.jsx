import React from "react";
import MypostsContainer from "./myposts/mypostsContainer";
import "./profile.css";
import ProfilInfo from "./profilInfo/profilInfo";

const Profile = (props) => {
  return (
    <div className="content">
      <ProfilInfo profile={props.profile} />
      <MypostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
