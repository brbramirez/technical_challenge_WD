import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import AllPhones from "../src/pages/AllPhones/AllPhones.jsx"
import PhoneDetails from "../src/pages/PhoneDetails/PhoneDetails.jsx"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<AllPhones />} />
        <Route path="/phones/:phoneId" element={<PhoneDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
