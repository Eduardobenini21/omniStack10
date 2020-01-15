import React, { useEffect, useState } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                required
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/37725197?s=460&v=4"
                alt="Vinícius Fraga"
              />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Web Developer. Sempre em busca de informação, desafios e
              aprendizado, principalmente no que se refere às tecnologias
              baseadas em JS.
            </p>
            <a href="https://github.com/vinifraga">Acessar perfil</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/37725197?s=460&v=4"
                alt="Vinícius Fraga"
              />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Web Developer. Sempre em busca de informação, desafios e
              aprendizado, principalmente no que se refere às tecnologias
              baseadas em JS.
            </p>
            <a href="https://github.com/vinifraga">Acessar perfil</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/37725197?s=460&v=4"
                alt="Vinícius Fraga"
              />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Web Developer. Sempre em busca de informação, desafios e
              aprendizado, principalmente no que se refere às tecnologias
              baseadas em JS.
            </p>
            <a href="https://github.com/vinifraga">Acessar perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
