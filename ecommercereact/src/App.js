import React from "react";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import 'boxicons'
import { BrowserRouter} from "react-router-dom";
import { } from "./componentes/Paginas";
import {Paginas} from "./componentes/Paginas";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Header />
        <Paginas/>
      </BrowserRouter>

    </div>
  );
}

export default App;
