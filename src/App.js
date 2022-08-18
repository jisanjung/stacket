import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from "./pages/Welcome";
import JobListings from "./pages/JobListings";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/listings/:user' element={<JobListings/>}></Route>
    </Routes>
  );
}

export default App;
