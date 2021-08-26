import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state'
import {addPost} from './redux/state'
import {addMessage} from './redux/state'
import {updateNewPost} from './redux/state'
import {updateDialog} from './redux/state'
 
export const rerender = ()=>{
    ReactDOM.render(
      <App state={state} addPost={addPost}  
            addMessage = {addMessage} 
            updateNewPost={updateNewPost} 
            updateDialog={updateDialog}
            />,
      document.getElementById('root')
    );
  }