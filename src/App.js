import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'  title="Login">
          <LoginPage />
        </Route>
        <Route exact path='/dashboard'  title="Dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
