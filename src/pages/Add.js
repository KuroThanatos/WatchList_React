import React from 'react'
import "../css/App.css";
import AddForm from '../components/AddForm';

const Add = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 text-light">
                <h2>Adicionar Novo Filme</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-light">
                <AddForm dados={addMovie} />
            </div>
        </div>
    </div>
  );
};

/**
      * Adiciona os dados da nova receita ao 'state'
      * @param {*} newMovie - dados de um novo, 
      *                        recebidos do Formulário
      */
async function addMovie(newMovie) {

  let formData = new FormData();
  formData.append("Titulo", newMovie.titulo);
  formData.append("Ano", newMovie.ano);
  formData.append("Resumo", newMovie.resumo);
  formData.append("Trailer", newMovie.trailer);
  formData.append("Poster", newMovie.poster);

  let resposta = await fetch("/api/FilmeControllerAPI", {
    method: "POST",
    body: formData
  });

  if (!resposta.ok) {
    // não obtivemos o 'código de erro' HTTP 200
    console.error(resposta);
    throw new Error('não foi possível enviar os dados do novo filme. Código= ' + resposta.status);
  }
  window.location.href = "/list";
  // devolver os dados a serem usados na componente 
  return await resposta.json();
}

export default Add