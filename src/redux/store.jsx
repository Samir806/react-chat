import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
   _state : {
    postsPage: {
      posts: [
        { id: 1, message: "This is react lesson", likeCount: 12 },
        { id: 2, message: "Learn JavaScript", likeCount: 2 },
        { id: 3, message: "React is the best", likeCount: 33 },
      ],
      newPost: 'First project',
      },
  
    messagesPage: {
      
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
      newMessage: 'Add text...'
    },
},
    getState(){
      return this._state
    },

    rerender(){},
    subscribe(observ){
      this.rerender = observ
},
    dispatch(action){
      this._state.postsPage = profileReducer(this._state.postsPage, action)
      this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
      this.rerender(this._state)
    }
};

export default store;
