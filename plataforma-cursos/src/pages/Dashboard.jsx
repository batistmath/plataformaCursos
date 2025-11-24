import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  // ✅ Mantido exatamente como você enviou
  const cursos = [
    { 
      id: 1, 
      titulo: 'Word', 
      aulas: 10, 
      img: 'https://imgs.search.brave.com/znkpKu4pb3_tCd-VVILDpME-BwV8c6eoI6ShR0uyXYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk0LzUxLzIy/LzM2MF9GXzI5NDUx/MjI0NV8ySU9VTmU1/YjdSanloYnJpeWZD/NWM1RHN6cExyTEJ4/RS5qcGc' 
    },
    { 
      id: 2, 
      titulo: 'Excel', 
      aulas: 20, 
      img: 'https://imgs.search.brave.com/954Zc0T-7-e-97IMYXA5lrbpEYOT6DV1Q38kAoU_ms4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMxL01pY3Jvc29m/dF9PZmZpY2VfRXhj/ZWxfKDIwMTMlRTIl/ODAlOTMyMDE5KS5z/dmc' 
    },
    { 
      id: 3, 
      titulo: 'Power Ponint', 
      aulas: 15, 
      img: 'https://imgs.search.brave.com/JEsGerEKd85HfwUAT8IJ_Rv-7mR-j76CxfD4x2dTJ0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI5LzIvbWljcm9z/b2Z0LXBvd2VycG9p/bnQtMjAxMy1sb2dv/LXBuZ19zZWVrbG9n/by0yOTgzMDIucG5n' 
    },
    { 
      id: 4, 
      titulo: 'HTML', 
      aulas: 15, 
      img: 'https://imgs.search.brave.com/RKj5IA4IhUK3_dsqXRShb83xQDPzCG1pN81lzx5whls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Rp/Z29mYWNpbC5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMTIvby1xdWUt/ZS1odG1sLWltYWdl/bS01NjR4MjgzLmpw/Zw' 
    },
    { 
      id: 5, 
      titulo: 'CSS', 
      aulas: 15, 
      img: 'https://imgs.search.brave.com/i8OIZfAyBVkXgQyV0NrbLUqz9pL_XgEsOkCOXq-vGbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY3NzLXRy/aWNrcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMTAv/Y3NzMy1sb2dvLmpw/Zz9yZXNpemU9MTIw/MCw2MDAmc3NsPTE' 
    },
  ];

  //  Estado para controlar o curso aberto no modal
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  //  Detalhes extras por curso (sem mexer no array original)
  const detalhesCursos = {
    1: {
      descricao: "Curso completo de Microsoft Word para criar documentos profissionais.",
      professor: "João Silva",
      cargaHoraria: "10h",
      aulasLista: [
        { titulo: "Introdução ao Word", duracao: "12:00" },
        { titulo: "Formatando Textos", duracao: "18:30" },
        { titulo: "Listas e Tabelas", duracao: "15:10" },
      ],
    },
    2: {
      descricao: "Aprenda fórmulas, gráficos, dashboards e automações no Excel.",
      professor: "Maria Souza",
      cargaHoraria: "20h",
      aulasLista: [
        { titulo: "Conhecendo a Interface", duracao: "10:00" },
        { titulo: "Fórmulas Básicas", duracao: "20:15" },
        { titulo: "Funções Avançadas", duracao: "25:40" },
      ],
    },
    3: {
      descricao: "Crie apresentações impactantes com animações e transições modernas.",
      professor: "Ana Lima",
      cargaHoraria: "15h",
      aulasLista: [
        { titulo: "Slides e Layouts", duracao: "11:20" },
        { titulo: "Transições e Animações", duracao: "17:05" },
      ],
    },
    4: {
      descricao: "Fundamentos de HTML para quem quer começar no desenvolvimento web.",
      professor: "Carlos Eduardo",
      cargaHoraria: "15h",
      aulasLista: [
        { titulo: "Estrutura básica de uma página", duracao: "13:00" },
        { titulo: "Tags principais", duracao: "19:40" },
      ],
    },
    5: {
      descricao: "Estilização moderna de páginas com CSS, incluindo layout e responsividade.",
      professor: "Julia Andrade",
      cargaHoraria: "15h",
      aulasLista: [
        { titulo: "Seletores e Propriedades", duracao: "14:10" },
        { titulo: "Layout com Flexbox", duracao: "21:00" },
      ],
    },
  };

  const abrirModal = (curso) => {
    const detalhes = detalhesCursos[curso.id];
    if (detalhes) {
      setCursoSelecionado({
        ...curso,
        ...detalhes,
      });
    } else {
      setCursoSelecionado({
        ...curso,
        descricao: "Descrição em breve.",
        professor: "Professor não informado",
        cargaHoraria: `${curso.aulas}h`,
        aulasLista: [],
      });
    }
  };

  const fecharModal = () => {
    setCursoSelecionado(null);
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header-title">
        <h2>Meus Cursos Disponíveis</h2>
      </div>

      <div className="cards-container">
        {cursos.map((curso) => (
          <div 
            key={curso.id} 
            className="card"
            onClick={() => abrirModal(curso)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-img-wrapper">
              <img src={curso.img} alt={curso.titulo} />
            </div>
            <div className="card-info">
              <h3>{curso.titulo}</h3>
              <span>{curso.aulas} aulas</span>

              
              <Link 
                to="/cursos/player" 
                className="btn-assistir"
                onClick={(e) => e.stopPropagation()} 
              >
                Assistir Agora
              </Link>
            </div>
          </div>
        ))}
      </div>
      {cursoSelecionado && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={fecharModal}>×</button>

            <h2>{cursoSelecionado.titulo}</h2>
            <p className="curso-desc">{cursoSelecionado.descricao}</p>

            <div className="curso-meta">
              <p><strong>Professor:</strong> {cursoSelecionado.professor}</p>
              <p><strong>Carga horária:</strong> {cursoSelecionado.cargaHoraria}</p>
              <p><strong>Total de aulas:</strong> {cursoSelecionado.aulasLista?.length || 0}</p>
            </div>

            <h3>Conteúdo do Curso</h3>
            {cursoSelecionado.aulasLista && cursoSelecionado.aulasLista.length > 0 ? (
              <ul className="lista-aulas">
                {cursoSelecionado.aulasLista.map((aula, index) => (
                  <li key={index} className="aula-item">
                    <span className="aula-num">#{index + 1}</span>
                    <div>
                      <strong>{aula.titulo}</strong>
                      <p className="aula-duracao">⏱ {aula.duracao}</p>
                    </div>
                    <Link 
                      to="/cursos/player" 
                      className="btn-assistir-aula"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Assistir
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma aula cadastrada ainda.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
