// Formulario.js
// este ficheiro irá conter o código para
// representar o formulário no ecrã
// ***************************************************

import React from 'react'

/**
 * Formulário para adicionar (e fazer upload) de um filme
 */
class AddForm extends React.Component {

    constructor(props) {
        super(props);

        // variáveis para guardar os dados introduzidos pelo utilizador, no Formulário
        this.state = {
            poster: null,
            titulo: "",
            resumo: "",
            trailer: "",
            ano: ""
        }
    }

    /**
     * processar os dados fornecidos pelo utilizador na escolha de um cão
     * @param {*} event 
     */
    handlerTitleChange = (event) => {
        //neste sítio poderia ser efetuado algum tipo de validação dos id do cão escolhido...

        // guardar os dados recolhidos pelo <select></select>
        this.setState({
            titulo: event.target.value
        });
    }
    
    /**
     * processar os dados fornecidos pelo utilizador no ano do filme
     * @param {*} event 
     */
     handlerDataChange = (event) => {
        //neste sítio poderia ser efetuado algum tipo de validação dos id do cão escolhido...

        // guardar os dados recolhidos pelo <select></select>
        this.setState({
            ano: event.target.value
        });
    }


    /**
     * processar os dados fornecidos pelo utilizador no upload da poster do filme
     * @param {*} event - dados adicionados pelo utilizador
     */
    handlerPosterChange = (event) => {
        //neste sítio poderia ser efetuado algum tipo de validação da foto escolhida...

        // guardar os dados recolhidos pelo <select></select>
        this.setState({
            poster: event.target.files[0]
        });
    }

    /**
     * processar os dados fornecidos pelo utilizador no trailer do filme
     * @param {*} event
     */
     handlerTrailerChange = (event) => {

        // guardar os dados recolhidos
        this.setState({
            trailer: event.target.value
        });
    }

    /**
     * processar os dados fornecidos pelo utilizador no trailer do filme
     * @param {*} event
     */
     handlerResumeChange = (event) => {

        // guardar os dados recolhidos
        this.setState({
            resumo: event.target.value
        });
    }

    /**
     * handler para processar os dados fornecidos pelo Formulário
     * @param {*} event - dados recolhido pelo <form></form>
     */
    handlerSubmitForm = (event) => {
        // impedir o formulário de autoenviar os dados para o servidor
        // essa tarefa cabe, neste projeto, ao componente <App/>
        event.preventDefault();

        // preparar os dados para serem enviados para a <App/>
        // posso já enviar os dados prontos para serem adicionados à API
        let dadosForm = {
            titulo: this.state.titulo,
            poster: this.state.poster,
            ano: this.state.ano,
            trailer: this.state.trailer,
            resumo: this.state.resumo,
        };

        // concretizar a exportação de dados para a <App/>
        this.props.dados(dadosForm);
    }

    render() {
        // ler os dados que foram/são fornecidos à Tabela5,
        // como parâmetro de entrada/saída

        return (
            // o 'return' só consegue devolver UM objeto
            <form onSubmit={this.handlerSubmitForm} encType="multipart/form-data">
                <div className="row">
                    <div className="col-md-4">
                        Título: <input
                            type="text"
                            required
                            maxLength="100"
                            onChange={this.handlerTitleChange}
                            className="form-control" /><br />
                        Ano: <input
                            type="text"
                            required
                            maxLength="4"
                            minLength="4"
                            onChange={this.handlerDataChange}
                            className="form-control" /><br />
                        Poster: <input
                            type="file"
                            required
                            accept=".jpg,.png"
                            onChange={this.handlerPosterChange}
                            className="form-control" /><br />
                    </div>
                    <div className="col-md-4">
                        Resumo: <input
                           type="text"
                           required
                           maxLength="10000"
                           onChange={this.handlerResumeChange}
                           className="form-control" /><br />
                        Trailer: <input
                            type="text"
                            required
                            onChange={this.handlerTrailerChange}
                            className="form-control" /><br />
                        <br />
                    </div>
                </div>
                <input type="submit" value="Adicionar Filme" className="btn btn-outline-primary" />
            </form>
        )
    }
}

export default AddForm;