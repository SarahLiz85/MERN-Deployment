import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Display from './components/display';
import { Router, Link } from '@reach/router';
import PetForm from './components/newpetform';
import EditPet from './components/editform';
import ViewPet from './components/viewpet';

function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-primary text-light">
        <h1>Pet Shelter</h1>
      </div>
      <Router>
        <Display path='/' />
        <PetForm path='/new' />
        <EditPet path="/edit/:_id" />
        <ViewPet path="/view/:_id" />      
      </Router>
    </div>
  );
}

export default App;
