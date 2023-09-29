import { createRoot } from "react-dom/client";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="container">
    <h1 className="container-text"> Congratulations </h1>
    <div className="card-list">
      <div className="card">
        <img
          src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1695986018/istockphoto-1300512215-170667a_gflgsv.webp"
          alt=""
        />
        <div className="card-text">
          <p> Jon k</p>
        </div>
        <img
          src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1695986018/istockphoto-1154642632-612x612_kb8zhf.jpg"
          alt=""
        />
        <div className="card-text">
          <p> Amika k</p>
        </div>
      </div>
    </div>
  </div>
);
