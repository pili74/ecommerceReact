import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";
import { ProductoDetalles } from './Productos/ProductoDetalles';

export const Paginas = () => {
    return (
      
        <Routes>
            <Route path="/productos" element={<ProductosLista/>}/>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/producto/:id" element={<ProductoDetalles/>}/>
        </Routes>
       
    )
}
