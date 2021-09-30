const SET_AUTH = "SET_AUTH";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth:false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    }
    default:
        return state;
  }
};
export const setNewUser = (userId, email, login) => ({ type: SET_AUTH, data:{userId, email, login} });

export default authReducer;
