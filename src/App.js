import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import APIContextProvider from './Context/apiContext';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Profile from './Pages/Login/Profile/Profile';
import Register from './Pages/Login/Resgister/Register';
import NotFound from './Pages/NotFound/NotFound';
import Explores from './Pages/Explores/Explores';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import MyOrders from './Pages/MyOrder/MyOrder';
import Admin from './Pages/Admin/Admin';
import AddNewReview from './Pages/AddNewReview/AddNewReview';
import AddNewApartment from './Pages/AddNewApartment/AddNewApartment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Pay from './Pages/Dashboard/Pay/Pay';

function App() {
  return (
    <div>

      <APIContextProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explores></Explores>
            </Route>

            {/* Private Route */}
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>

            {/* Private Route */}
            <PrivateRoute path="/apartments/:apartmentId">
              <Booking></Booking>
            </PrivateRoute>


            {/* Private Route */}
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            {/* Private Route */}
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            {/* Private Route */}
            <PrivateRoute path="/allorders">
              <Admin></Admin>
            </PrivateRoute>

            {/* Private Route */}
            <PrivateRoute path="/addnewapartment">
              <AddNewApartment></AddNewApartment>
            </PrivateRoute>
            {/* Private Route */}
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>

            {/* Private Route */}
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>

            {/* Private Route */}
            <PrivateRoute path="/addreview">
              <AddNewReview></AddNewReview>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </APIContextProvider>


    </div>
  );
}

export default App;
