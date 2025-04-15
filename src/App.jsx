import Length from './components/Length'
import Weight from './components/Weight'
import Temperature from './components/Temperature'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <div className='container'>
          <h1>Unit Converter</h1>
          <nav>
            <ul>
            <NavLink to="/length" className={({ isActive }) => isActive ? "active" : ""}>Length</NavLink>
            <NavLink to="/weight" className={({ isActive }) => isActive ? "active" : ""}>Weight</NavLink>
            <NavLink to="/temperature" className={({ isActive }) => isActive ? "active" : ""}>Temperature</NavLink>
            </ul>
          </nav>
          <Routes>
            <Route path="/length" element={<Length />} />
            <Route path="/weight" element={<Weight />} />
            <Route path="/temperature" element={<Temperature />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
