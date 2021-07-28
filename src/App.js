import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Aboutus  from './routes/aboutus/Aboutus';
import Navbar  from './routes/navbar/navbar';
import Classroom  from './routes/classroom/Classroom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      <Navbar />
    <Switch>
      <Route path ='/about' component={ Aboutus } />
      <Route path='/' component={Classroom} />
    </Switch>
      
   </div>
   </Router>
  );

}

export default App;

