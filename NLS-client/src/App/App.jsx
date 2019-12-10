import React, { Component } from 'react';
//import axios from 'axios'
import './App.css';
import VenueCaroussel from '../venue-components/venue-caroussel'
import VenuePage from '../venue-components/venue-page'
import Header from '../header'
import Footer from '../footer'
import Favourites from '../favourites'
import Login from '../login'
import Logout from '../logout' 
import Register from '../register'
import ErrorPage from '../utils/error-page'
import NotFound from '../common/notFound';
import About from '../common/about'
import PrivacyPolicy from '../common/privacy-policy'
import TermsAndConditions from '../common/terms-and-conditions'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import User from '../user'
import {getSession} from '../utils/get-session'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
    this.connecToServer();
  }
 
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="App">
          <Switch>
          
            
            <Route path="/favourites" render ={()=>(
              getSession() ?(
                <Route path="/favourites" component={Favourites} />
              ) : (
                <Redirect to="/login"/>
              )
            )}/>

            <Route path="/user" render ={()=>(
              getSession() ?(
                <Route path="/user" component={User}/>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>
            <Route path="/" exact component={VenueCaroussel} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-and-conditions" component={TermsAndConditions} />
            <Route path="/venue/:id" component={VenuePage} />
            <Route component={ErrorPage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;