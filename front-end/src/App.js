import "./App.css";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Paid from "./components/paid/Paid";

function App() {
  return (
    <BrowserRouter>
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
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/voucher/:token" component={Paid}></Route>
              </Switch>
              {/* FORM */}

              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>

        <footer className="container-fluid bg-4 text-center">
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
    </BrowserRouter>
  );
}

export default App;
