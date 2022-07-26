import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Searcher from '../components/Searcher';
import Result from '../components/Result';

class Search extends Component {
    //Creamos un objeto
    state = {
        termino: '',
        //Guardamos el resultado de fletch url aqui
        publications: []
    }

    //CONSULTAR API
    consultarApi = () => {
        //Utuilizamore fetch
        const termino = this.state.termino; //consultamos aqui el termino
        const url1 = `https://api.plos.org/search?q=title:${termino}&fl=id&start=1&rows=100`; //con per page podemos ver lo resultados per pagina
        const url = `https://api.plos.org/search?q=title:${termino}&start=1&rows=100`;
        console.log(url1); //para ver la url
        //Creamos un fetch para url para mostrarla en json
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({ publications: resultado.response.docs })) //Search by response and after by docs

    }

    //Aquí se refleja el hijo tomado de buscador
    datosBusqueda = (termino) => {

        //Carga los datos de manera dinamica 
        this.setState({
            termino
        }
            //Pasamos un callback que agregue eso al state y una vez agregado ejecute tal función
            , () => {
                this.consultarApi(); //Una vz que busca el termino y lo pasa agrega esto a la funcion consular api
            }
        )
    }


    render() {
        return (

            <div className="app container">
                <Navigation />
                <div className="card text-white bg-primary mb-3" >
                    <div className="card-header">
                        <p className="lead text-center">Search documents information by title</p>
                    </div>
                    <div className="card-body">
                        <Searcher
                            datosBusqueda={this.datosBusqueda}
                        />
                        
                    </div>
                    
                </div>
                <div className="table">
                <Result
                        publications={this.state.publications}
                    />
                    </div>

            </div>

        )

    }
}

export default Search;