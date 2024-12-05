import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';

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
        <h2 className="text-center mb-4">PROYECTOS</h2>
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
                  <img src={project3} className="card-img-top" alt="Proyecto 3" />
                  <div className="card-body">
                  <h5 className="card-title">Proyecto Laravel</h5>
                  <p className="card-text">Uso de laravel destinado a backend</p>
                  <a href="https://bowensito.github.io/peliculas-laravel" className="btn btn-primary">Ver proyecto</a>
                  </div>
                </div>
                </div>
              </div>
              </section>

              {/* Conocimientos y Contacto paralelos */}
              <section className="py-5 mt-5">
              <div className="container d-flex justify-content-between">
                {/* Conocimientos */}
                <div className="col-md-5">
                <h2 className="text-center mb-4">Conocimientos</h2>
                <ul>
                  <li><strong>JavaScript</strong></li>
                  <li><strong>React</strong></li>
                  <li><strong>Node.js</strong></li>
                  <li><strong>Python</strong></li>
                  <li><strong>MongoDB</strong></li>
                </ul>
                </div>

                {/* Contacto */}
                <div className="col-md-5">
                <h2 className="text-center mb-4">Contacto</h2>
                <p><span className="text-primary">https://github.com/bowensito</span></p>
                <p><span className="text-primary">ignacio.earancibia@gmail.com</span></p>
                </div>
              </div>
              </section>

              {/* Footer */}
      <footer className="text-white text-center py-3">
        <p>&copy; 2024 Ignacio Arancibia.</p>
      </footer>
    </div>
  );
}

export default App;
