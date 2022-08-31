import React from "react";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import 'boxicons'
import { BrowserRouter} from "react-router-dom";
import { } from "./componentes/Paginas";
import {Paginas} from "./componentes/Paginas";
import {DataProvider} from "./context/Dataprovider";
import {Carrito} from "./componentes/Carrito";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <BrowserRouter>
     
        <Header />
        <Carrito/>
        <Paginas/>
      </BrowserRouter>

    </div>
    </DataProvider>
  );
}

export default App;
