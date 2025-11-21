import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
// Importe o Dashboard recém criado
import Dashboard from './pages/Dashboard.jsx' 
import GerenciarAlunos from './pages/GerenciarAlunos.jsx'
import GerenciarProfessores from './pages/GerenciarProfessores.jsx'
import ClassPage from './pages/ClassPage.jsx'
import PerfilAluno from './pages/PerfilAluno.jsx'
import './index.css'
import GerenciarAulas from './pages/GerenciarAulas.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Rota inicial agora aponta para o Dashboard
      {
        index: true,
        element: <Dashboard /> 
      },
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
      path: "perfil",
      element: <PerfilAluno />
    },
    {
  path: "gerenciar-aulas",
  element: <GerenciarAulas />
}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)