import Cards from "../components/Cards";
import "../css/App.css";

const List = () => {
    return (
        <div className="container">
            <div className="row">
                <div className ="col-12 pl-5 text-light">
                    <h3>Lista de Filmes</h3>
                </div>
                <Cards />
            </div>
        </div>
    );
}

export default List;
