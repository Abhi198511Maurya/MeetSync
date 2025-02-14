import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Authentication from './pages/Authentication.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import VideoMeetComponent from './pages/VideoMeet.jsx';
import HomeComponenet from './pages/Home.jsx';
import History from './pages/History.jsx';

function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<Authentication />} />
              <Route path="/home" element={<HomeComponenet />} />
              <Route path="/history" element={<History />} />

              <Route path="/:url" element={<VideoMeetComponent />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </>
  )
}

export default App
