import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store'
/* import {addPost} from './redux/state'
import {addMessage} from './redux/state'
import {updateNewPost} from './redux/state'
import {updateDialog} from './redux/state'
import {subscribe} from './redux/state' */

 

    ReactDOM.render( 
      <BrowserRouter>
      <Provider /* state={state}  dispatch = {store.dispatch.bind(store)} */ store={store}> 
        <App  /* addPost={store.addPost.bind(store)}    
              addMessage = {store.addMessage.bind(store)} 
              /* updateNewPost={store.updateNewPost.bind(store)}  
              updateDialog={store.updateDialog.bind(store)}*/ />
      </Provider>   
    </BrowserRouter>   
     ,
      document.getElementById('root')
    );
  