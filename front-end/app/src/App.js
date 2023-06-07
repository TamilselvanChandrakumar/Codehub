import './App.css';
import Navbar from './components/navbar/Navbar';
import Coursedetail from './screens/coursedetails/Coursedetail';
import Createcourse from './screens/create/Createcourse';
import Editcourse from './screens/edit/Editcourse';
import Home from './screens/home/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes> 
  <Route path="/" element={<Home/>}></Route>
  <Route path="/create" element={<Createcourse/>}></Route>
  <Route path='/course/:id' element={<Coursedetail/>}></Route>
  <Route path='/edit/:id' element={<Editcourse/>}></Route>

  </Routes>
  </BrowserRouter>
  </> 
  );
}

export default App;
