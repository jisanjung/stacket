import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from "./pages/Welcome";
import JobListings from "./pages/JobListings";
import { createStore, StoreProvider } from "easy-peasy";
import globalState from './model';

function App() {

  const store = createStore(globalState);

  return (
    <StoreProvider store={store}>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/listings/:user' element={<JobListings/>}></Route>
      </Routes>
    </StoreProvider>
  );
}

export default App;
