import React, { useState } from 'react';
import './GerenciarAulas.css';

const GerenciarAulas = () => {

  const [cursoSelecionado, setCursoSelecionado] = useState(1); 
  const [modoEdicao, setModoEdicao] = useState(null); 

  const cursos = [
    { id: 1, nome: "Microsoft Word" },
    { id: 2, nome: "Microsoft Excel" },
    { id: 3, nome: "PowerPoint" }
  ];

  const [aulas, setAulas] = useState([
    { id: 101, cursoId: 1, titulo: "Introdução e Interface", duracao: "10:00", link: "https://youtube.com/..." },
    { id: 102, cursoId: 1, titulo: "Formatando Fontes", duracao: "15:30", link: "https://youtube.com/..." },
    { id: 201, cursoId: 2, titulo: "Fórmulas Básicas", duracao: "12:00", link: "https://youtube.com/..." },
  ]);

  const [formulario, setFormulario] = useState({ titulo: '', duracao: '', link: '' });


  const aulasAtuais = aulas.filter(aula => aula.cursoId === Number(cursoSelecionado));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSalvarAula = (e) => {
    e.preventDefault();

    if (modoEdicao) {
  
      setAulas(aulas.map(aula => 
        aula.id === modoEdicao ? { ...aula, ...formulario } : aula
      ));
      alert("Aula editada com sucesso!");
    } else {
   
      const novaAula = {
        id: Date.now(),
        cursoId: Number(cursoSelecionado),
        ...formulario
      };
      setAulas([...aulas, novaAula]);
      alert("Aula cadastrada com sucesso!");
    }
 
    setFormulario({ titulo: '', duracao: '', link: '' });
    setModoEdicao(null);
  };

  const handleEditarClick = (aula) => {
    setModoEdicao(aula.id);
    setFormulario({ titulo: aula.titulo, duracao: aula.duracao, link: aula.link });
  };

  const handleDeletarClick = (id) => {
    if (window.confirm("Tem certeza que deseja remover esta aula?")) {
      setAulas(aulas.filter(aula => aula.id !== id));
    }
  };

  const handleCancelarEdicao = () => {
    setModoEdicao(null);
    setFormulario({ titulo: '', duracao: '', link: '' });
  };

  return (
    <div className="admin-page">
      <div className="container">
        
        <div className="admin-header-flex">
          <div>
            <h1>Gerenciar Aulas</h1>
            <p>Adicione, edite ou remova conteúdos dos cursos.</p>
          </div>

          <div className="course-selector-box">
            <label>Selecionar Curso:</label>
            <select 
              value={cursoSelecionado} 
              onChange={(e) => setCursoSelecionado(e.target.value)}
              className="course-select"
            >
              {cursos.map(c => (
                <option key={c.id} value={c.id}>{c.nome}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-grid">
 
          <div className="admin-card form-section">
            <h3 className="card-title">
              {modoEdicao ? `✏️ Editando Aula` : `➕ Adicionar Nova Aula`}
            </h3>
            
            <form onSubmit={handleSalvarAula}>
              <div className="form-group">
                <label>Título da Aula</label>
                <input 
                  type="text" name="titulo" required
                  placeholder="Ex: Aula 01 - Introdução"
                  value={formulario.titulo} onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label>Link do Vídeo (URL)</label>
                <input 
                  type="text" name="link" required
                  placeholder="https://youtube.com/..."
                  value={formulario.link} onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label>Duração</label>
                <input 
                  type="text" name="duracao" required
                  placeholder="Ex: 10:00"
                  className="short-input"
                  value={formulario.duracao} onChange={handleInputChange}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className={modoEdicao ? "btn-warning" : "btn-primary"}>
                  {modoEdicao ? "Salvar Alterações" : "Cadastrar Aula"}
                </button>
                
                {modoEdicao && (
                  <button type="button" className="btn-cancel" onClick={handleCancelarEdicao}>
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="admin-card list-section">
            <h3 className="card-title">Lista de Aulas ({aulasAtuais.length})</h3>
            
            {aulasAtuais.length === 0 ? (
              <div className="empty-state">Nenhuma aula cadastrada neste curso.</div>
            ) : (
              <ul className="lesson-list">
                {aulasAtuais.map((aula, index) => (
                  <li key={aula.id} className={`lesson-item ${modoEdicao === aula.id ? 'active-edit' : ''}`}>
                    <div className="lesson-info">
                      <span className="lesson-number">#{index + 1}</span>
                      <div>
                        <strong>{aula.titulo}</strong>
                        <div className="lesson-meta">⏱ {aula.duracao} • 🔗 Link configurado</div>
                      </div>
                    </div>
                    <div className="lesson-actions">
                      <button onClick={() => handleEditarClick(aula)} className="action-btn edit" title="Editar">✏️</button>
                      <button onClick={() => handleDeletarClick(aula.id)} className="action-btn delete" title="Excluir">🗑️</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GerenciarAulas;