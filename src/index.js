import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Study from './pages/Study';
import Readme from './pages/Readme';
import Theme from './pages/Theme';
import ThemeProvider from './context/ThemeProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/skills', element: <Skills /> },
      { path: '/study', element: <Study /> },
      { path: '/projects', element: <Projects /> },
      { path: '/readme', element: <Readme /> },
      { path: '/theme', element: <Theme /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
