const ADD_DIALOQ = "ADD-DIALOQ";
const UPDATE_DIALOQ = "UPDATE-DIALOQ";

let initialState = {
  dialoq: [
    { name: "Samir", id: "1" },
    { name: "Orxan", id: "2" },
    { name: "Azer", id: "3" },
    { name: "Emin", id: "4" },
    { name: "Adil", id: "5" },
  ],
  messages: [
    { message: "Hello" },
    { message: "This is a first lesson" },
    { message: "How are you" },
    { message: "Today is a sunny day" },
    { message: "What would you like?" },
  ],
  newMessage: "Add text...",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOQ: {
      let newMessage = {
        message: state.newMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessage: "",
      };
    }
    case UPDATE_DIALOQ: {
      return { ...state, newMessage: action.dialoq };
    }
    default:
      return state;
  }
};
export const addMessagesActionCreator = () => ({ type: ADD_DIALOQ });
export const changeMessageActionCreator = (text) => ({
  type: UPDATE_DIALOQ,
  dialoq: text,
});

export default dialogReducer;
