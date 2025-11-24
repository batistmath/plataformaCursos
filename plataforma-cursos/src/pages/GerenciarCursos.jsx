import React, { useState /*, useEffect */ } from "react";
import "./GerenciarCursos.css";

const GerenciarCursos = () => {
  const [cursos, setCursos] = useState([
    { id: 1, nome: "Microsoft Word", categoria: "Pacote Office", nivel: "Básico", aulas: 10, status: "Ativo" },
    { id: 2, nome: "Microsoft Excel", categoria: "Pacote Office", nivel: "Intermediário", aulas: 18, status: "Ativo" },
    { id: 3, nome: "PowerPoint Apresentações", categoria: "Apresentações", nivel: "Básico", aulas: 8, status: "Rascunho" },
  ]);

  const [formulario, setFormulario] = useState({
    nome: "",
    categoria: "",
    nivel: "",
    aulas: "",
    status: "Ativo",
  });

  const [cursoEditandoId, setCursoEditandoId] = useState(null);

  // =========================================================
  // Funções para futura integração com backend (API REST)
  // =========================================================
  /*
  const API_BASE_URL = "http://localhost:3000/api/cursos";

  const carregarCursosDaApi = async () => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error("Erro ao buscar cursos");
    const data = await response.json();
    setCursos(data);
  };

  const criarCursoNaApi = async (payload) => {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Erro ao criar curso");
    const data = await response.json();
    return data;
  };

  const atualizarCursoNaApi = async (id, payload) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Erro ao atualizar curso");
    const data = await response.json();
    return data;
  };

  const excluirCursoNaApi = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Erro ao excluir curso");
  };

  useEffect(() => {
    carregarCursosDaApi().catch(console.error);
  }, []);
  */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cursoEditandoId) {
      setCursos((prev) =>
        prev.map((curso) =>
          curso.id === cursoEditandoId
            ? { ...curso, ...formulario, aulas: Number(formulario.aulas || 0) }
            : curso
        )
      );

      /*
      atualizarCursoNaApi(cursoEditandoId, {
        ...formulario,
        aulas: Number(formulario.aulas || 0),
      })
        .then((cursoAtualizado) => {
          setCursos((prev) =>
            prev.map((curso) =>
              curso.id === cursoEditandoId ? cursoAtualizado : curso
            )
          );
        })
        .catch(console.error);
      */
    } else {
      const novoCurso = {
        id: Date.now(),
        nome: formulario.nome,
        categoria: formulario.categoria,
        nivel: formulario.nivel,
        aulas: Number(formulario.aulas || 0),
        status: formulario.status,
      };

      setCursos((prev) => [novoCurso, ...prev]);

      /*
      criarCursoNaApi({
        nome: formulario.nome,
        categoria: formulario.categoria,
        nivel: formulario.nivel,
        aulas: Number(formulario.aulas || 0),
        status: formulario.status,
      })
        .then((cursoCriado) => {
          setCursos((prev) => [cursoCriado, ...prev]);
        })
        .catch(console.error);
      */
    }

    setFormulario({ nome: "", categoria: "", nivel: "", aulas: "", status: "Ativo" });
    setCursoEditandoId(null);
  };

  const handleEditar = (curso) => {
    setCursoEditandoId(curso.id);
    setFormulario({
      nome: curso.nome,
      categoria: curso.categoria,
      nivel: curso.nivel,
      aulas: curso.aulas,
      status: curso.status,
    });
  };

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este curso?")) {
      setCursos((prev) => prev.filter((curso) => curso.id !== id));

      /*
      excluirCursoNaApi(id)
        .then(() => {
          setCursos((prev) => prev.filter((curso) => curso.id !== id));
        })
        .catch(console.error);
      */

      if (cursoEditandoId === id) {
        setCursoEditandoId(null);
        setFormulario({ nome: "", categoria: "", nivel: "", aulas: "", status: "Ativo" });
      }
    }
  };

  const handleCancelar = () => {
    setCursoEditandoId(null);
    setFormulario({ nome: "", categoria: "", nivel: "", aulas: "", status: "Ativo" });
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header-flex">
          <div>
            <h1>Gerenciar Cursos</h1>
            <p>Crie, edite e organize todos os cursos da plataforma.</p>
          </div>

          <div className="course-selector-box highlight-box">
            <div>
              <strong>Total de cursos</strong>
              <p className="highlight-subtitle">{cursos.length} cursos cadastrados</p>
            </div>
          </div>
        </div>

        <div className="admin-grid">
          <div className="admin-card form-section">
            <h3 className="card-title">
              {cursoEditandoId ? "✏️ Editar Curso" : "➕ Adicionar Novo Curso"}
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome do Curso</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Ex: Curso de Excel Completo"
                  value={formulario.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Categoria</label>
                <input
                  type="text"
                  name="categoria"
                  placeholder="Ex: Pacote Office, Programação..."
                  value={formulario.categoria}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Nível</label>
                <input
                  type="text"
                  name="nivel"
                  placeholder="Básico, Intermediário, Avançado"
                  value={formulario.nivel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Quantidade de Aulas</label>
                <input
                  type="number"
                  name="aulas"
                  min="0"
                  className="short-input"
                  placeholder="Ex: 12"
                  value={formulario.aulas}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={formulario.status}
                  onChange={handleChange}
                  className="course-select"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Rascunho">Rascunho</option>
                  <option value="Arquivado">Arquivado</option>
                </select>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className={cursoEditandoId ? "btn-warning" : "btn-primary"}
                >
                  {cursoEditandoId ? "Salvar Alterações" : "Cadastrar Curso"}
                </button>

                {cursoEditandoId && (
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={handleCancelar}
                  >
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="admin-card list-section">
            <h3 className="card-title">Lista de Cursos ({cursos.length})</h3>

            {cursos.length === 0 ? (
              <div className="empty-state">
                Nenhum curso cadastrado ainda. Comece adicionando um curso ao lado. 🙂
              </div>
            ) : (
              <div className="table-wrapper">
                <table className="course-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Curso</th>
                      <th>Categoria</th>
                      <th>Nível</th>
                      <th>Aulas</th>
                      <th>Status</th>
                      <th style={{ textAlign: "right" }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cursos.map((curso, index) => (
                      <tr
                        key={curso.id}
                        className={cursoEditandoId === curso.id ? "row-editing" : ""}
                      >
                        <td>{index + 1}</td>
                        <td>{curso.nome}</td>
                        <td>{curso.categoria}</td>
                        <td>{curso.nivel}</td>
                        <td>{curso.aulas}</td>
                        <td>
                          <span className={`status-pill status-${curso.status.toLowerCase()}`}>
                            {curso.status}
                          </span>
                        </td>
                        <td>
                          <div className="lesson-actions table-actions">
                            <button
                              className="action-btn edit"
                              onClick={() => handleEditar(curso)}
                              title="Editar"
                            >
                              ✏️
                            </button>
                            <button
                              className="action-btn delete"
                              onClick={() => handleExcluir(curso.id)}
                              title="Excluir"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GerenciarCursos;
