import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomeNewsSection from './components/HomeNewsSection/HomeNewsSection';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <HomeNewsSection/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
