import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './components/Login'
import {Provider} from 'react-redux'
import {store} from './components/Redux/Store'
import Appbar from './Appbar'
import SignUp from './components/Signup'
import Profile from './components/Profile'

function App() {
  return (
    
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
      <Appbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
      </BrowserRouter>
      </Provider>
    </div>
    
  );
}

export default App;
