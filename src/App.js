import React, { useState } from 'react';
import Navbar from '../src/component/Navbar';
import { Typography, Title, Space } from '@material-ui/core';
import Form from '../src/component/Form';
import Main from '../src/component/Main';
import Footer from '../src/component/Footer';
import About from '../src/component/Cards';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className='header'>
      <Navbar />
      <Main />
      <About />
      <Routes>
        <Route exact path='/main' element={<Main />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
