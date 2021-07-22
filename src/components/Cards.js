import React from 'react'
import {Card,Toast} from 'react-bootstrap'
import "../css/App.css";

import RUD from './RUD';


const CardContainer = (props) => {
    const HandlerAnswer = (message) =>{
        
        if(message === "removeMovie"){
            return (
                <Toast show={true} delay={3000} autohide>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Erro</strong>
                  </Toast.Header>
                  <Toast.Body>Existem utilizadores que já viram este filme, não é possível apaga-lo</Toast.Body>
                </Toast>
          );
        }
        
    }
    if (props.FilmsData){
        return props.FilmsData.map(
            (movie, index) => {
                return (
                    <div className="col-4" key={movie.id}>
                        <Card>
                            <Card.Img variant="top" src={"/Imagens/"+movie.poster} />
                            <Card.Body>
                                <Card.Title>
                                    <div className="row">
                                        <div className="col-9 truncate-title"> {movie.titulo} </div>
                                        <div className="col-3" style={{textAlign:"right"}}>
                                            <RUD movie={movie} rud={HandlerAnswer}/>
                                        </div>
                                    </div>
                                </Card.Title>
                                <Card.Text className="truncate-overflow">
                                {movie.resumo}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        )
    }
}

async function getMovies() {
    //ler os dados da API
    let resposta = await fetch('/api/FilmeControllerAPI');
    if (!resposta.ok) {
        //não foi recebido o código 200 do HTTP
        console.error("Não conseguimos ler os dados da API. Código: " + resposta.status);
    }
    return await resposta.json();
}

// componente que junta os dois sub-componentes, formando um novo 'componente'
class Cards extends React.Component {

    constructor(props) {
        super(props); // esta é sempre a primeira instrução

        this.state = {
            /**
            * array que irá conter os dados das receitas, vindas da API
            */
            movies: []
        }
    }

    componentDidMount() {
        this.LoadMovies();
    }

    async LoadMovies() {
        /**
         * Tarefas:
         * 1- Ler os dados da API
         * 2- Atualizar os dados na var. state
         */
        try {
            let returnedMovies = await getMovies();
            this.setState({ movies: returnedMovies });
        } catch (error) {
            console.error("Erro na leitura da API", error)
        }
    }

    render() {
        const { movies } = this.state;
        // estamos a ler os dados que são recebidos pelo componente

        return (
                <CardContainer FilmsData={movies} />
        ) 
    }
}

export default Cards