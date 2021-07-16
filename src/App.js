import React from 'react';
import MapScreen from './Screens/MapScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
 return (
  <div>
   <Router>
    <Switch>
     <Route path="/" exact>
      <MapScreen />
     </Route>
    </Switch>
   </Router>
  </div>
 );
}

export default App;
