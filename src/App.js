import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'  title="Login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
