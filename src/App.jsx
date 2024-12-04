import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header>
        <h1>Ignacio Arancibia</h1>
        <p className="lead">Estudiante Ing. Civil Informática</p>
      </header>

      {/* Proyectos */}
      <section>
        <h2 className="text-center mb-">PROYECTOS</h2>
        <div className="row">

          {/* Proyecto 1 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={project1} className="card-img-top" alt="Proyecto 1" />
              <div className="card-body">
                <h5 className="card-title">Página Vite</h5>
                <p className="card-text">Página encargada de la gestión de lista de películas.</p>
                <a href="https://bowensito.github.io/pagina-peliculas/" className="btn btn-primary">Ver proyecto</a>
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={project2} className="card-img-top" alt="Proyecto 2" />
              <div className="card-body">
                <h5 className="card-title">To Do List</h5>
                <p className="card-text">Aplicación para crear tareas.</p>
                <a href="https://bowensito.github.io/mipagina/todolist" className="btn btn-primary">Ver proyecto</a>
              </div>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="#" className="card-img-top" alt="Proyecto 3" />
              <div className="card-body">
                <h5 className="card-title">Nuevo Proyecto</h5>
                <p className="card-text">Descripción del proyecto en blanco.</p>
                <a href="#" className="btn btn-primary">Ver proyecto</a>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Contacto */}
<section className="py-0">
  <div className="container text-center">
    <h2>Contacto</h2>
    <p><span className="text-primary">https://github.com/bowensito</span></p>
    <p><span className="text-primary">ignacio.earancibia@gmail.com</span></p>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Ignacio Arancibia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;