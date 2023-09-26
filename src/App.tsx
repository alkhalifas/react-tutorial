import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './containers/Home';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Router>
            {/*<MenuAppBar/>*/}
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/page1" element={<Page1/>} />
                <Route path="/page2" element={<Page2/>} />
                {/*<Route path="/404" element={<NotFound/>} />*/}
                {/*<Route path="*" element={<Navigate replace to="/404" />} />*/}
            </Routes>
            {/*<Footer/>*/}
        </Router>

      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </>
  )
}

export default App
