import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Home.jsx';

function Main() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} /> */}
    </Routes>
  );
}

function App() {
  return (
    <Router basename="/emoil">
      <Main />
    </Router>
  );
}

export default App;