import "./App.css";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";

function App() {
  return (
    <div>
      <div
        className="jumbotron text-center mb-4"
        style={{ marginBottom: 0, background: "#6B196B" }}
      >
        <h1 style={{ color: "white" }}>API REST HTTP</h1>
        <p style={{ color: "white" }}>React & NodeJS</p>
      </div>

      <div className="container-fluid">
        <div className="text-center">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <h1>WebPay Plus</h1>
                </div>
                <div className="panel-body"></div>
                <div className="panel-footer">
                  <div class="form-group mt-2 ml-5 mr-5">
                    <label for="usr">Ingresar Monto:</label>
                    <input type="text" class="form-control" id="usr"></input>
                  </div>
                  <div className="row ml-1">
                    <div className="col-2"></div>
                    <a
                      href="https://www.transbankdevelopers.cl/documentacion/como_empezar#ambiente-de-integracion"
                      target="_blank"
                      className="btn btn-md col-3"
                    >
                      Test Cards
                    </a>
                    <div className="col-2"></div>
                    <a className="btn btn-md col-3">Comprar</a>
                    <div className="col-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <footer class="container-fluid bg-4 text-center">
        <div className="row">
          <div className="col-12">
            <p>
              Integration Made By <strong>Nicolás Poblete</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a target="_blank" href="https://www.linkedin.com/in/nipob/">
              <img
                src={linkedin}
                alt="linkedin"
                style={{ height: "55px", width: "55px" }}
              ></img>
            </a>
            <a target="_blank" href="https://github.com/yuNNNu">
              <img
                src={github}
                alt="linkedin"
                style={{ height: "55px", width: "55px" }}
              ></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
