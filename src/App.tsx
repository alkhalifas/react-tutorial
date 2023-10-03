import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './containers/Home';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import DateTime from './components/DateTime'
import Navbar from './components/Navbar'
import NotFound from "./containers/NotFound"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Router>
            <Navbar/>
            <DateTime/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/page1" element={<Page1/>} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="/404" element={<NotFound/>} />
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
            {/*<Footer/>*/}
        </Router>
    </>
  )
}

export default App
