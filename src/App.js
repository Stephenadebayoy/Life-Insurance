import React, { useState } from 'react';
import Navbar from '../src/component/Navbar';
import Form from '../src/component/Form';
import Main from '../src/component/Main';
import Footer from '../src/component/Footer';
import About from '../src/component/Cards';
import ProtectedRoute from './component/ProtectedRoute';
import Error from './component/Error';
import Dashboard from './component/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className='header'>
      <Navbar />
      <Main />
      <About />
      <Routes>
        <Route exact path='main' element={<Main />} />
        <Route path='form' element={<Form setUser={setUser}></Form>} />
        <Route
          path='dashboard'
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
