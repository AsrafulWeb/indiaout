import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomeNewsSection from './components/HomeNewsSection/HomeNewsSection';
import Login from './components/login/login';
import HomeIndianProducts from './components/HomeIndianProducts/HomeIndianProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <HomeNewsSection />
            <HomeIndianProducts />
          </>
        } />
        <Route path='/login' element={
          <>
            <Login />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
