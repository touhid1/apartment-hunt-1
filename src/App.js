import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import BookingData from './Components/BookingList/BookingData/BookingData';
import Navbar from './Components/ShareComponents/Navbar/Navbar';
import AddHows from './Components/AddHows/AddHows/AddHows';
import MyRentData from './Components/MyRent/MyRentData/MyRentData';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
              <Sidebar></Sidebar>
          </Route>

          <Route path='/booking'>
              <BookingData></BookingData>
          </Route>

          <Route path='/navbar'>
              <Navbar></Navbar>
          </Route>

          <Route path='/addHows'>
              <AddHows></AddHows>
          </Route>

          <Route path='/myRent'>
              <MyRentData></MyRentData>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
