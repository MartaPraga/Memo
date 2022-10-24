import './App.css';
import {Layout} from "./components/Layout/Layout";
import {Scores} from "./components/Scores/Scores";
import {Game} from "./components/Game/Game";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // <Layout />
      <Router>
        <Routes>
          <Route   path="/"     element={<Layout />}>
            <Route path="/game"     element={<Game />} />
            <Route path="/scores"   element={<Scores />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
