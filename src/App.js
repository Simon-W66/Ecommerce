
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from "././pages/shoppage/shoppage.component.jsx";
import { Route ,Switch } from 'react-router-dom';



function App() {
  return (
    <div>
        <Switch>
          <HomePage exact path="/" component={HomePage} />
          <ShopPage path="/shop" component={ShopPage} />
        </Switch>
        
    </div>
  );
}

export default App;
