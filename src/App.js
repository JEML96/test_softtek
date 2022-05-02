import './App.css';
import './CSS/cusBtrp.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Profile from './Views/Profile';
import Awesome from './Views/Awesome';
import ErrorNotFnd from './Views/Error';
import NavBar from './Components/Base/Navbar';
import Foot from './Components/Base/Foot';

function App() {
  const { isLoading } = useAuth0;

  if (isLoading) {
    return <div>Loading, please wait :)</div>;
  }

  return (
    <body>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/awesome' element={<Awesome />} />
          <Route path='*' element={<ErrorNotFnd />} />
        </Routes>
        <footer>
          <Foot></Foot>
        </footer>
      </Router>
    </body>
  );
}

export default App;
