import { Route, Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import SignIn from './components/SignIn';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
