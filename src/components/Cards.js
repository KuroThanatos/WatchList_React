import React from 'react'
import Card from 'react-bootstrap/Card'
import "../css/App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash,faEye } from '@fortawesome/free-solid-svg-icons'

const CardContainer = (props) => {
//função que remove filmes (parametro id do filme)
async function removeMovie(movie) {
      
    let resposta = await fetch("/api/FilmeControllerAPI/" + movie.id, {
      method: "DELETE",
      body: {id: movie.id}
    });

    if (!resposta.ok) {
        // não obtivemos o 'código de erro' HTTP 200
        console.error(resposta);
        throw new Error('não foi possível remove o filme. Código= ' + resposta.status);
    }

    window.location.reload();
    
      // devolver os dados a serem usados na componente 
      return await resposta.json();
}

    if (props.FilmsData) {
        return props.FilmsData.map((movie, index) => {
            return (
                <div className="col-4" key={movie.id}>
                    <Card>
                        <Card.Img variant="top" src={"/Imagens/"+movie.poster} />
                        <Card.Body>
                            <Card.Title>
                            
                            <div className="row">
                                <div className="col-8">
                                    {movie.titulo}
                                </div>
                                <div className="col-4" style={{textAlign:"right"}}>
                                    <a href="#modalEdit" className="text-success" data-toggle="modal"><FontAwesomeIcon icon={faEdit} /></a>
                                    <a href="#modalDetails" className="text-info" data-toggle="modal"><FontAwesomeIcon icon={faEye} /></a>
                                    <button onClick={() => removeMovie(movie)} className="text-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                
                                </div>
                            </div>
                                </Card.Title>
                            <Card.Text className="truncate-overflow">
                            {movie.resumo}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div id="modalDetails" className="modal fade" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title" style={{textAlignLast: "center"}}>Register</h4>
                        </div>
                        <div className="modal-body">

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
                </div>

            
            )
        })
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

    /* removeReceita = (index) => {
        // recuperar os receitas que estão representados na tabela
        const { receitas } = this.state
    
        // alterar essa lista, retirando dela a receita identificado pelo 'index'
        this.setState({
          // filter é um método do 'state' que permite aplicar um filtro sobre os 
          // dados do state
          receitas: receitas.filter((receitas, i) => {
            // devolve todos os dados que não forem iguais ao index
            return i !== index
          })
        });
      } */
    
}

export default Cards