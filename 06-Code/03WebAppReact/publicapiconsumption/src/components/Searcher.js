import React, {Component} from 'react';

class Searcher extends Component {
    //Creamos un ref que permite leer los valores de los imput con reac
    busquedaRef = React.createRef();
    //Creamos método obtener datos para obetner los datos al hacer submit
    obtenerDatos = (e) => {
        e.preventDefault();
        //Tomamos el valor de imput
        const termino = this.busquedaRef.current.value;
        //Lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }


    render(){
        return ( 
            
            <form onSubmit={this.obtenerDatos}> 
                <div className="row">
                    {this.props.mensaje}
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" //Creamos un ref para leer valores
                        placeholder='Search by tittle. Example: GitHub' />

                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="bt btn-lg btn-danger bnt-bllock" 
                        value="Search" />

                    </div>
                </div>
            </form>
         );
    }
}

export default Searcher;