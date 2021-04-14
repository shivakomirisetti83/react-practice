import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from './Redux/store';

import './App.css';
import Login from './components/assignment/Login';
import Clothes from './components/assignment/Clothes';
import Showfinder from './components/assignment/Showfinder';
import Home from './components/assignment/Home';
import Registration from './components/assignment/Registration';
import Crudoperater from './components/assignment/Crudoperater';
import ByteProgracess from './components/assignment/ByteProgracess';
import Hooks from './components/assignment/Hooks';

const App = () => {
  return (
    <Provider store={store}>
      
           
    <BrowserRouter>
     <ul className="link">
        <li><Link to="login">Login</Link></li>
        <li><Link to="cloths">Cloths</Link></li>
        <li><Link to="Showfinder">Showfinder</Link></li>
        <li><Link to="Home">Home</Link></li>
        <li><Link to="Registration">Registration</Link></li>
        <li><Link to="Crudoperater">Crud-Operater</Link></li>
        <li><Link to="ByteProgracess">Bytes</Link></li>
        <li><Link to="Hooks">Hooks</Link></li>
     </ul>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route path="/cloths" component={Clothes} />
      <Route path="/Showfinder" component={Showfinder} />
      <Route path="/Home" component={Home} />
      <Route path="/Registration" component={Registration}/>
      <Route path="/Crudoperater" component={Crudoperater}/>
      <Route path="/ByteProgracess" component={ByteProgracess}/>
      <Route path="/Hooks" component={Hooks}/>
      </BrowserRouter>
    
    </Provider>
  );
}

export default App;
