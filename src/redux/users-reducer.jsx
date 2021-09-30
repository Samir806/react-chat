import { userAPI } from "../components/api/api"

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENTPAGE = "SET_CURRENTPAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";

let initialState = {
  users: [],
  pageSize: 50,
  userCount: 0,
  currentPage: 3,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((a) => {
          if (a.id === action.userId) {
            return { ...a, followed: true };
          }
          return a;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((d) => {
          if (d.id === action.userId) {
            return { ...d, followed: false };
          }
          return d;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_USERS_COUNT: {
      return {
        ...state,
        userCount: action.count,
      };
    }

    case SET_CURRENTPAGE: {
      return {
        ...state,
        currentPage: action.page,
      };
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setcurrentPage = (page) => ({ type: SET_CURRENTPAGE, page });
export const setUsersCount= (count) => ({ type: SET_USERS_COUNT, count });


export const followAC = (userID) =>{
  return (dispatch) =>{
    userAPI.follow(userID)
    .then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(follow(userID));
      }
    });
  }
}

export const unfollowAC = (userID) =>{
  return (dispatch) =>{
    userAPI.unfollow(userID)
    .then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(unfollow(userID));
      }
    });
  }
}

export const getUsers= (currentPage, pageSize)=>{
  return (dispatch) =>{
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
    });
  }
}

export default usersReducer;
 