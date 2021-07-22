import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faEye,faTrash } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import "../css/App.css";
import EditForm from './EditForm';


const RU = (props) => {

    const [showEdit,setEditShow] = useState(false);
    const [showDetail,setDetailShow] = useState(false);
    
    function onEditButton(event){
        event.preventDefault()
        setEditShow(true);
    }
    
    const onCloseEditModal = () =>{
        setEditShow(false);
    }
    

    function onDetailButton(event){
        event.preventDefault()
        setDetailShow(true);
    }
    
    const onCloseDetailModal = () =>{
        setDetailShow(false);
    }
    //função que remove filmes (parametro id do filme)
    async function removeMovie(movie) {
        let resposta = await fetch("/api/FilmeControllerAPI/" + movie.id, {
            method: "DELETE",
        });

        if (!resposta.ok) {
            // não obtivemos o 'código de erro' HTTP 200
            console.error(resposta);
            
            props.rud("removeMovie")
            window.alert("Existem utilizadores que já viram este filme, não é possível apaga-lo")
            //notify('não foi possível remove o filme. Código= ' + resposta.status);
        }else{
            window.location.reload();
        
            // devolver os dados a serem usados na componente 
            return await resposta.json();
        }
        
    }

    return (
        <div>
            <button onClick={onEditButton}  className="no-button text-success"><FontAwesomeIcon icon={faEdit} /></button>
            <button onClick={onDetailButton} className="no-button text-info"><FontAwesomeIcon icon={faEye} /></button>
            <button onClick={() => removeMovie(props.movie)} className="no-button text-danger"><FontAwesomeIcon icon={faTrash} /></button>
            <Modal size="lg" show={showEdit} onClose={onCloseEditModal} onHide={onCloseEditModal} aria-labelledby="example-modal-sizes-title-sm" className="darkModal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-light">
                        <h1>Editar Filme</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm dados={editMovie} movie={props.movie} />
                </Modal.Body>
            </Modal>
            <Modal size="lg" show={showDetail} onClose={onCloseDetailModal} onHide={onCloseDetailModal} aria-labelledby="example-modal-sizes-title-sm" className="darkModal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-light">
                        <h1>{props.movie.titulo}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-light">
                <div className="row">
                        <div className="col-12 text-center">
                            <img src={"/Imagens/"+props.movie.poster} alt={props.movie.titulo}/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <b>Ano:</b> {props.movie.ano}
                        </div>
                        <div className="col-5"></div>
                        <div className="col-3">
                            <span>Trailer:
                                <a href={props.movie.trailer} rel="noreferrer" target="_blank" className="text-danger"><FontAwesomeIcon icon={faYoutube} /></a>
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <h4>Sinopse:</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span>{props.movie.resumo}</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>   
        </div>
    )
    
}

/**
      * Adiciona os dados da nova receita ao 'state'
      * @param {*} movie - dados de um novo, 
      *                        recebidos do Formulário
      */
 async function editMovie(movie) {
    console.log(movie);
    let formData = new FormData();
        formData.append("Id", movie.id);
        formData.append("Titulo", movie.titulo);
        formData.append("Ano", movie.ano);
        formData.append("Resumo", movie.resumo);
        formData.append("Trailer", movie.trailer);
        formData.append("Poster", movie.poster);
  
    let resposta = await fetch("/api/FilmeControllerAPI/" + movie.id, {
      method: "PUT",
      body: formData
    });
  
    if (!resposta.ok) {
      // não obtivemos o 'código de erro' HTTP 200
      console.error(resposta);
      throw new Error('não foi possível enviar os dados da atualização do filme. Código= ' + resposta.status);
    }
    window.location.href = "/list";
    // devolver os dados a serem usados na componente 
    return await resposta.json();
  }

export default RU;
