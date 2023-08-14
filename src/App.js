import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Card from './Pages/Card';
import ColorSelect from './Pages/ColorSelect';
import ShowCard from './Pages/ShowCard';
import OneLetter from './Pages/OneLetter';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Card' element={<Card/>}></Route>
      <Route exact path='/ColorSelect' element={<ColorSelect/>}></Route>
      <Route exact path='/ShowCard' element={<ShowCard/>}></Route>
      <Route exact path='/OneLetter' element={<OneLetter/>}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
