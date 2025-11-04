import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function GerenciarProfessores() {
  const { professores, setProfessores } = useOutletContext();
  
  const [formData, setFormData] = useState({ nome: '', email: '', disciplina: '' });
  const [editId, setEditId] = useState(null);

  const handleCadastrar = (e) => {
    e.preventDefault(); 
    console.log("PLACEHOLDER: Enviando para API (CADASTRO):", formData);
    
    const novoProfessor = { ...formData, id: Date.now() }; 
    setProfessores([...professores, novoProfessor]);
    
    setFormData({ nome: '', email: '', disciplina: '' }); 
    console.log("Professor cadastrado (front-end):", novoProfessor);
  };

  const handleEditar = (e) => {
    e.preventDefault();
    console.log(`PLACEHOLDER: Enviando para API (UPDATE ID: ${editId}):`, formData);

    setProfessores(professores.map(professor => 
      professor.id === editId ? { ...professor, ...formData } : professor
    ));
    
    setFormData({ nome: '', email: '', disciplina: '' });
    setEditId(null);
    console.log("Professor atualizado (front-end)");
  };

  const handleRemover = (id) => {
    if (window.confirm("Tem certeza que deseja remover este professor?")) {
      console.log(`PLACEHOLDER: Enviando para API (DELETE ID: ${id})`);
      
      setProfessores(professores.filter(professor => professor.id !== id));
      console.log("Professor removido (front-end)");
    }
  };

  const carregarParaEdicao = (professor) => {
    setEditId(professor.id);
    setFormData({ nome: professor.nome, email: professor.email, disciplina: professor.disciplina });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const cancelarEdicao = () => {
    setEditId(null);
    setFormData({ nome: '', email: '', disciplina: '' });
  };

  return (
    <div>
      <h2>Gerenciar Professores</h2>
      
      <form onSubmit={editId ? handleEditar : handleCadastrar}>
        <h3>{editId ? 'Editar Professor' : 'Cadastrar Professor'}</h3>
        <input 
          type="text" name="nome" placeholder="Nome" 
          value={formData.nome} onChange={handleFormChange} required 
        />
        <input 
          type="email" name="email" placeholder="Email" 
          value={formData.email} onChange={handleFormChange} required 
        />
        <input 
          type="text" name="disciplina" placeholder="Disciplina" 
          value={formData.disciplina} onChange={handleFormChange} required 
        />
        <button type="submit">{editId ? 'Atualizar' : 'Cadastrar'}</button>
        {editId && <button type="button" className="cancel-btn" onClick={cancelarEdicao}>Cancelar</button>}
      </form>

      <h3>Lista de Professores</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Disciplina</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor) => (
            <tr key={professor.id}>
              <td>{professor.nome}</td>
              <td>{professor.email}</td>
              <td>{professor.disciplina}</td>
              <td>
                <button className="edit-btn" onClick={() => carregarParaEdicao(professor)}>Editar</button>
                <button className="remove-btn" onClick={() => handleRemover(professor.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GerenciarProfessores;