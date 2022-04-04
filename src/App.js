import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import DashBorad from './Component/DashBorad/DashBorad';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='./' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<DashBorad></DashBorad>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
