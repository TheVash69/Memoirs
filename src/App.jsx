import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LeftMenu } from './components/LeftMenu';
import { MainContainer } from './components/MainContainer';
import { Gallery } from './components/Gallery';
import { Letters } from './components/Letters';
import { Videos } from './components/Videos';
import { Sumone } from './components/Sumone';
import { HairGrowth } from './components/HairGrowth';

function App() {
  return (
    <Router>
      <div className="App">
        <LeftMenu />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/sumone" element={<Sumone />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/hairgrowth" element={<HairGrowth />} />
          </Routes>
        </div>
        <div className="background"></div>
      </div>
    </Router>
  );
}

export default App;