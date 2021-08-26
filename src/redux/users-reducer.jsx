const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
  users: [
    {
      id: 1,
      photo:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      followed: false,
      fullName: "Sasha",
      status: "I am a boss",
      location: { country: "Russia", city: "Moscow" },
    },

    {
      id: 2,
      photo:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      followed: true,
      fullName: "Dima",
      status: "I am a big boss",
      location: { country: "USA", city: "Vashington" },
    },

    {
      id: 3,
      photo:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      followed: false,
      fullName: "Oleq",
      status: "I am a little boss",
      location: { country: "Azerbaijan", city: "Baku" },
    },
  ], 
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
        users: [ action.users ]
      }


    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;
