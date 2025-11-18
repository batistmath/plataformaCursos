import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom'; 

function GerenciarAlunos() {
  const { alunos, setAlunos } = useOutletContext();
  
  const [formData, setFormData] = useState({ nome: '', email: '', matricula: '' });
  const [editId, setEditId] = useState(null); 

  const handleCadastrar = (e) => {
    e.preventDefault(); 
    console.log("PLACEHOLDER: Enviando para API (CADASTRO):", formData);
    
    const novoAluno = { ...formData, id: Date.now() };
    setAlunos([...alunos, novoAluno]);
    
    setFormData({ nome: '', email: '', matricula: '' }); 
    console.log("Aluno cadastrado (front-end):", novoAluno);
  };

  const handleEditar = (e) => {
    e.preventDefault();
    console.log(`PLACEHOLDER: Enviando para API (UPDATE ID: ${editId}):`, formData);

    setAlunos(alunos.map(aluno => 
      aluno.id === editId ? { ...aluno, ...formData } : aluno
    ));
    
    setFormData({ nome: '', email: '', matricula: '' });
    setEditId(null);
    console.log("Aluno atualizado (front-end)");
  };

  const handleRemover = (id) => {
    if (window.confirm("Tem certeza que deseja remover este aluno?")) {
      console.log(`PLACEHOLDER: Enviando para API (DELETE ID: ${id})`);
      
      setAlunos(alunos.filter(aluno => aluno.id !== id));
      console.log("Aluno removido (front-end)");
    }
  };

  const carregarParaEdicao = (aluno) => {
    setEditId(aluno.id);
    setFormData({ nome: aluno.nome, email: aluno.email, matricula: aluno.matricula });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const cancelarEdicao = () => {
    setEditId(null);
    setFormData({ nome: '', email: '', matricula: '' });
  };

  return (
    <div>
      <h2>Gerenciar Alunos</h2>
      
      <form onSubmit={editId ? handleEditar : handleCadastrar}>
        <h3>{editId ? 'Editar Aluno' : 'Cadastrar Aluno'}</h3>
        <input 
          type="text" name="nome" placeholder="Nome" 
          value={formData.nome} onChange={handleFormChange} required 
        />
        <input 
          type="email" name="email" placeholder="Email" 
          value={formData.email} onChange={handleFormChange} required 
        />
        <input 
          type="text" name="matricula" placeholder="Matrícula" 
          value={formData.matricula} onChange={handleFormChange} required 
        />
        <button type="submit">{editId ? 'Atualizar' : 'Cadastrar'}</button>
        {editId && <button type="button" className="cancel-btn" onClick={cancelarEdicao}>Cancelar</button>}
      </form>

      <h3>Lista de Alunos</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Matrícula</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.matricula}</td>
              <td>
                <button className="edit-btn" onClick={() => carregarParaEdicao(aluno)}>Editar</button>
                <button className="remove-btn" onClick={() => handleRemover(aluno.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GerenciarAlunos;