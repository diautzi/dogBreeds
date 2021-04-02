import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  withRouter,
  Switch,
  Route,
} from 'react-router-dom';

// import components
import DogBreedIndex from './components/DogBreedIndex';
import DogBreedDetail from './components/DogBreedDetail';

function App() {
  
  return (
    <Switch>
      <Route exact path='/' component={DogBreedIndex}/>
      <Route exact path={`/:breed`} component={DogBreedDetail}/>
    </Switch>
  );
};

export default withRouter(App);