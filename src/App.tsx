import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Bar, Bars, Home, Login, Profile, Register } from './pages'
import { MantineProvider } from '@mantine/core';
import { Shell } from './features';

import '@mantine/core/styles.css';
import './index.css';

function App() {

  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Shell />}>
            <Route path="" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/bars' element={<Bars />} />
          </Route>
          <Route path='/bars/:id' element={<Bar />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
