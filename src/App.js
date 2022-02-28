import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/home/home';
import Signup from './pages/signin/signin';
import Login from './pages/login/login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <h3>Hello</h3>

       <Navbar/>

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       </Routes>
    </div>
  );
}

export default App;
