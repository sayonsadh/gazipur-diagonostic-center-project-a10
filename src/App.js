import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header/Header';
import Branches from './Pages/Home/BranchInfo/Branches/Branches';
import Doctors from './Pages/Home/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SignIn from './Pages/Login/SignIn/SignIn';
import Notfound from './Pages/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <AuthProvider> 
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path='/doctors'>
            <Doctors></Doctors>
            </Route>
            <Route path='/branches'>
              <Branches></Branches>
            </Route>
            <PrivateRoute path="/booking/:serviceName">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
