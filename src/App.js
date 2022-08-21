import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from "./pages/Welcome";
import { createStore, StoreProvider } from "easy-peasy";
import globalState from './model';
import UserPage from './pages/UserPage';

function App() {

  const store = createStore(globalState);

  return (
    <StoreProvider store={store}>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/listings/:user' element={<UserPage/>}></Route>
      </Routes>
    </StoreProvider>
  );
}

export default App;
