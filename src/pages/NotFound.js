import "../css/NotFound.css";

function NotFound() {
  return (
    <section class="notFound">
        <div class="img">
          <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
          <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div class="text">
          <h1>404</h1>
          <h2>PÁGINA NÃO FOI ENCONTRADA</h2>
          <h3><a className="yes" href="/">REGRESSAR AO INICIO?</a></h3>
        </div>
    </section>
  );
}

export default NotFound;
