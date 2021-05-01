
import React from "react";
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from "././pages/shoppage/shoppage.component.jsx";
import { Route ,Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth} from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();

     this.state = {
      currentUser: null
     }

  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
    })
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() { 
    return ( 
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <HomePage exact path="/" component={HomePage} />
            <ShopPage path="/shop" component={ShopPage} />
            <SignInAndSignUpPage path="/signin" component={SignInAndSignUpPage}/>
          </Switch>
      </div>
     );
  }
}
 


export default App;
