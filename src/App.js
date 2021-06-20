import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import AgriPurchase from './components/AgriPurchase';
function App() {
  return (

    <Switch>
      <Route exact path='/'  component={AgriPurchase}/>
      <Route exact path='/m'  component={''}/>
      <Route exact path='/s'  component={''}/>
    </Switch>
   
  );
}

export default App;
