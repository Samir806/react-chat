const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
  posts: [
    { id: 1, message: "This is react lesson", likeCount: 12 },
    { id: 2, message: "Learn JavaScript", likeCount: 2 },
    { id: 3, message: "React is the best", likeCount: 33 },
  ],

  newPost: "First project",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let firstPost = {
        id: 4,
        message: state.newPost,
        likeCount: 4,
      };

      return {
        ...state,
        posts: [...state.posts, firstPost],
        newPost: " ",
      };
      /*  stateCopy.posts = [...state.posts]
      stateCopy.posts.push(firstPost)
      stateCopy.newPost = " "; */
    }
    case UPDATE_POST:
      return { ...state, newPost: action.messages };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changePostActionCreator = (text) => ({
  type: UPDATE_POST,
  messages: text,
});

export default profileReducer;
