import React,{Component} from 'react';

export default class Resumen extends Component{
    
    mostrarResumen = ()=>{
        const {marca, year, plan} = this.props.datos;
        if(!marca) return '';
        return(<div className="resumen"> 
                <h2> Resumen de la Cotizacion</h2>
                <li>Marca : {marca}</li>    
                <li>Plan : {plan}</li>    
                <li>Año : {year}</li>    
            </div>
        );

    }

    render(){
        return(<div >
                {this.mostrarResumen()}
                </div>
            );
        }
}