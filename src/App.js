import logo from './logo.svg';
import EmployeeDashboard from './components/EmployeeDashboard';
import './App.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  return ( 
    <div>
      <EmployeeDashboard></EmployeeDashboard>
    </div>
  );
}

export default App;
