import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import GerenciarAlunos from './pages/GerenciarAlunos.jsx'
import GerenciarProfessores from './pages/GerenciarProfessores.jsx'
import ClassPage from './pages/ClassPage.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "alunos",
        element: <GerenciarAlunos />,
      },
      {
        path: "professores",
        element: <GerenciarProfessores />,
      },
      {
        path: "cursos/player",
        element: <ClassPage />
        
      },
      {
        index: true, 
        element: <GerenciarAlunos />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)