import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";
import { ProductoDetalles } from './Productos/ProductoDetalles';
import Nosotros from './aboutUs/Nosotros';

export const Paginas = () => {
    return (
      
        <Routes>
            <Route path="/productos" element={<ProductosLista/>}/>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/producto/:id" element={<ProductoDetalles/>}/>
            <Route path='/Nosotros' element={<Nosotros/>}/>
        </Routes>
       
    )
}
