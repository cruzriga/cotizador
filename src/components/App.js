import React,{Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helpers';
import Resultado from './Resultado';
import Resumen from './Resumen';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {datos:{}, resultado: ''};
  }
  cotizarSeguro = (data)=>{
    const {marca,plan,year} = data;
    let resultado = 2000;
    const diferencia = obtenerDiferenciaAnio(year);
    resultado -= ((diferencia*3)*resultado)/100;
    resultado = calcularMarca(marca) * resultado;
    let incremento  = obtenerPlan(plan);
    resultado  = parseFloat(incremento * resultado).toFixed(2);
    console.log(`resultado es = a : ${resultado} - ${incremento}`);
    const datosAuto = {
      marca :  marca,
      year  :  year,
      plan  :  plan
    }
    this.setState({resultado : resultado, datos : datosAuto});
  }
    render(){
    return (
      <div className="contenedor">
        <Header titulo = 'COTIZADOR DE SEGUROS DE AUTOS' />
        <div className = 'contenedor-formulario'>
          <Formulario cotizarSeguro = {this.cotizarSeguro}/>
            <Resultado/>
            <Resumen datos={this.state.datos} resultado = {this.state.resultado}/>
        </div>
      </div>
    
    );
  }
}

