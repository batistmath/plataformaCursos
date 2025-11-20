import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const cursos = [
    { id: 1, titulo: 'Word', aulas: 10, img: 'https://imgs.search.brave.com/znkpKu4pb3_tCd-VVILDpME-BwV8c6eoI6ShR0uyXYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk0LzUxLzIy/LzM2MF9GXzI5NDUx/MjI0NV8ySU9VTmU1/YjdSanloYnJpeWZD/NWM1RHN6cExyTEJ4/RS5qcGc' },
    { id: 2, titulo: 'Excel', aulas: 20, img: 'https://imgs.search.brave.com/954Zc0T-7-e-97IMYXA5lrbpEYOT6DV1Q38kAoU_ms4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMxL01pY3Jvc29m/dF9PZmZpY2VfRXhj/ZWxfKDIwMTMlRTIl/ODAlOTMyMDE5KS5z/dmc' },
    { id: 3, titulo: 'Power Ponint', aulas: 15, img: 'https://imgs.search.brave.com/JEsGerEKd85HfwUAT8IJ_Rv-7mR-j76CxfD4x2dTJ0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI5LzIvbWljcm9z/b2Z0LXBvd2VycG9p/bnQtMjAxMy1sb2dv/LXBuZ19zZWVrbG9n/by0yOTgzMDIucG5n'},
    { id: 4, titulo: 'HTML', aulas: 15, img: 'https://imgs.search.brave.com/RKj5IA4IhUK3_dsqXRShb83xQDPzCG1pN81lzx5whls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Rp/Z29mYWNpbC5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMTIvby1xdWUt/ZS1odG1sLWltYWdl/bS01NjR4MjgzLmpw/Zw' },
    { id: 5, titulo: 'CSS', aulas: 15, img: 'https://imgs.search.brave.com/i8OIZfAyBVkXgQyV0NrbLUqz9pL_XgEsOkCOXq-vGbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY3NzLXRy/aWNrcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMTAv/Y3NzMy1sb2dvLmpw/Zz9yZXNpemU9MTIw/MCw2MDAmc3NsPTE'},
  ];

  return (
    <div className="dashboard-content">
      <div className="dashboard-header-title">
        <h2>Meus Cursos Disponíveis</h2>
      </div>

      <div className="cards-container">
        {cursos.map((curso) => (
          <div key={curso.id} className="card">
            <div className="card-img-wrapper">
              <img src={curso.img} alt={curso.titulo} />
            </div>
            <div className="card-info">
              <h3>{curso.titulo}</h3>
              <span>{curso.aulas} aulas</span>
              {}
              <Link to="/cursos/player" className="btn-assistir">
                Assistir Agora
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;