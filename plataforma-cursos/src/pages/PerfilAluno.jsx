import React, { useState } from 'react';
import './PerfilAluno.css'; 

const PerfilAluno = () => {

  const [usuario, setUsuario] = useState({
    nome: 'Aluno Teste',
    email: 'AlunoTeste@exemplo.com',
    telefone: '(64) 99999-9999',
    matricula: '2025-001',
    foto: null 
  });


  const [editando, setEditando] = useState(false);

  
  const meusCursos = [
    { 
      id: 1, 
      titulo: "Microsoft Word", 
      aulasTotais: 10, 
      aulasAssistidas: 3, 
      img: "https://imgs.search.brave.com/znkpKu4pb3_tCd-VVILDpME-BwV8c6eoI6ShR0uyXYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk0LzUxLzIy/LzM2MF9GXzI5NDUx/MjI0NV8ySU9VTmU1/YjdSanloYnJpeWZD/NWM1RHN6cExyTEJ4/RS5qcGc" 
    },
    { 
      id: 2, 
      titulo: "Microsoft Excel", 
      aulasTotais: 20, 
      aulasAssistidas: 18, 
      img: "https://imgs.search.brave.com/954Zc0T-7-e-97IMYXA5lrbpEYOT6DV1Q38kAoU_ms4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMxL01pY3Jvc29m/dF9PZmZpY2VfRXhj/ZWxfKDIwMTMlRTIl/ODAlOTMyMDE5KS5z/dmc" 
    }
  ];

 
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      const fotoUrl = URL.createObjectURL(file);
      setUsuario({ ...usuario, foto: fotoUrl });
    }
  };


  const handleSalvar = () => {
    setEditando(false);
    alert("Dados atualizados com sucesso!");
  };

  return (
    <div className="perfil-page">
      <div className="container">
        
        <div className="perfil-layout">

          <aside className="perfil-sidebar">
            <div className="user-card">
              <div className="avatar-container">
                <img 
                  src={usuario.foto || "https://via.placeholder.com/150"} 
                  alt="Foto de Perfil" 
                  className="avatar-img"
                />

                <label htmlFor="foto-upload" className="edit-avatar-btn" title="Alterar foto">
                   📷
                </label>
                <input 
                  type="file" 
                  id="foto-upload" 
                  accept="image/*" 
                  onChange={handleFotoChange} 
                  style={{ display: 'none' }}
                />
              </div>
              
              <h3>{usuario.nome}</h3>
              <p className="user-role">Aluno Iniciante</p>
              
              <button 
                className={`btn-action ${editando ? 'btn-save' : 'btn-edit'}`}
                onClick={() => editando ? handleSalvar() : setEditando(true)}
              >
                {editando ? '💾 Salvar Alterações' : '✏️ Editar Perfil'}
              </button>
            </div>
          </aside>

          <main className="perfil-content">

            <section className="content-section">
              <h2 className="section-header">Minhas Informações</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Nome Completo</label>
                  <input 
                    type="text" 
                    value={usuario.nome} 
                    disabled={!editando} 
                    onChange={(e) => setUsuario({...usuario, nome: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={usuario.email} 
                    disabled={!editando}
                    onChange={(e) => setUsuario({...usuario, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Telefone</label>
                  <input 
                    type="text" 
                    value={usuario.telefone} 
                    disabled={!editando}
                    onChange={(e) => setUsuario({...usuario, telefone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Matrícula</label>
                  <input type="text" value={usuario.matricula} disabled className="input-disabled-fixed"/>
                </div>
              </div>
            </section>

 
            <section className="content-section">
              <h2 className="section-header">Cursos em Andamento</h2>
              <div className="courses-grid">
                {meusCursos.map(curso => {
                    const progresso = (curso.aulasAssistidas / curso.aulasTotais) * 100;
                    return (
                    <div className="course-card-modern" key={curso.id}>
                        <div className="card-header-mini">
                            <img src={curso.img} alt={curso.titulo} />
                            <h5>{curso.titulo}</h5>
                        </div>
                        <div className="card-body-mini">
                            <div className="progress-wrapper-mini">
                                <div className="progress-bar-bg">
                                    <div className="progress-fill" style={{ width: `${progresso}%` }}></div>
                                </div>
                                <small>{Math.round(progresso)}% concluído</small>
                            </div>
                            <button className="btn-continue-mini">Continuar</button>
                        </div>
                    </div>
                    );
                })}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default PerfilAluno;