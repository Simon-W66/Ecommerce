
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from "././pages/shoppage/shoppage.component.jsx";
import { Route ,Switch } from 'react-router-dom';
import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <HomePage exact path="/" component={HomePage} />
          <ShopPage path="/shop" component={ShopPage} />
        </Switch>
        
    </div>
  );
}

export default App;
