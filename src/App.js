import logo from './logo.svg';
import './App.css';
import Registrationpage from './Registrationpage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Home';
import Header from './Header';


//siva
function App() {
  return (
    <div className="App">
      
      {/* <Registrationpage /> */}
      <Routes>

      <Route exact path='/' element={<Registrationpage />}/>
      <Route exact path='/LoginPage' element={<LoginPage />}/>
      <Route exact path='/home' element={<Home />}/>
      <Route exact path='/header' element={<Header />}/>
      </Routes>
      
    </div>
  );
}

export default App;
