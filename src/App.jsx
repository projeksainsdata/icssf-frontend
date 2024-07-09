import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import FaqPage from './pages/FaqPage';
import Committee from './pages/Committee';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/information' element={<FaqPage/>}/>
          <Route path='/committee' element={<Committee/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
