import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './Components/LogIn';
import Layout from './Components/Layout';
import Index from './Components/Index';
import AdminDashboard from './Components/AdminDashboard';
import AccountSettings from "./Components/AccountSettings";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-responsive.min.css'

import { createStore } from 'redux';
import allReducers from './Reducers';
import { Provider } from 'react-redux';
import SignUp from "./Components/SignUp";
import AdminGraphs from "./Components/AdminGraphs";
import AllBillingDetails from "./Components/AllBillingDetails";
import ListAllUsers from "./Components/ListAllUsers";
import PsychologyTest from "./Components/PsychologyTest"
import ChatBot from "./Components/ChatBot";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
      <Route exact path="/adminDashboard" component={AdminDashboard} />
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={AccountSettings} />
        <Route exact path="/admingraphs" component={AdminGraphs} />
        <Route exact path="/allbillingdetails" component={AllBillingDetails} />
        <Route exact path="/listallusers" component={ListAllUsers} />
        <Route exact path="/chat" component={ChatBot} />
        <Route exact path="/psychologytest" component={PsychologyTest} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

