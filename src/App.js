import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import BookingData from './Components/BookingList/BookingData/BookingData';

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

        </Switch>
      </Router>
    </div>
  );
}

export default App;
