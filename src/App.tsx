// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/component/Page/home/Home';
import Header from '../src/component/layout/header/Header';
import Footer from '../src/component/layout/footer/Footer';
import { useState } from 'react';


function App() {
  const [view, setView] = useState<boolean>(true);
  return (
    <>
      <BrowserRouter>
        <Header view={view} setView={setView} />
        <Routes>
          <Route path='/' element={<Home />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
