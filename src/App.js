import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import ServiceBook from './components/ServiceBook/ServiceBook';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Information from './components/Information/Information';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/information' element={<Information/>}/>
        <Route path='servicebook/:bookId' element={<ServiceBook/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
