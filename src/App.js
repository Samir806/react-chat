import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DialoqContainer from "./components/dialogs/dialogContainer";
import UserContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <Route
          path="/dialog"
          render={() => <DialoqContainer store={props.store} />}
        />

        <Route
          path="/profile/:userID?"
          render={() => (
            <ProfileContainer
              

              /*  dispatch = {props.store.dispatch}
                  state = {props.state} 
                   dispatch = {props.dispatch}/* addPost = {props.addPost} updateNewPost = {props.updateNewPost} */
            />
          )}
        />

        <Route
          path="/users"
          render={() => <UserContainer /> }
        />
        
      </div>
    </Router>
  );
};

export default App;
