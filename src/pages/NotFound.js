import "../css/NotFound.css";

function NotFound() {
  return (
    <section className="notFound">
        <div className="img">
          <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
          <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div className="text">
          <h1>404</h1>
          <h2>PÁGINA NÃO FOI ENCONTRADA</h2>
          <h3><a className="yes" href="/">REGRESSAR AO INICIO?</a></h3>
        </div>
    </section>
  );
}

export default NotFound;
