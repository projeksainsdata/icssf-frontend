import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import FaqPage from './pages/FaqPage';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/faq' element={<FaqPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
