import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>

        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Home" element={<Home/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
