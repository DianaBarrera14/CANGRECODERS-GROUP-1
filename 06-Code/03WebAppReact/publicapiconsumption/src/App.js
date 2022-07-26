import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchId from './pages/SearchId';
import Search from './pages/Search';
import ShowClient from './pages/ShowClient';
class App extends Component {
  
  
  render() {
    return (
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/SearchId" element={<SearchId />} />
          <Route exact path="/ShowClient" element={<ShowClient />} />
        </Routes>
      </BrowserRouter>
      
      /*<Router>
        <Navigation />
        <div className="container p-4">
          <Route path="/" exact component={Buscador} />

    

        </div>
      </Router>*/


      /* <div className="app container">
 
         <div className="card text-white bg-primary mb-3" >
           <div className="card-header">
             <p className="lead text-center">Search by tittle</p>
           </div>
           <div className="card-body">
             <Buscador
               datosBusqueda={this.datosBusqueda}
             />
           </div>
         </div>
         <div className="row justify-content-center">
           <Resultado
             publications={this.state.publications}
           />
         </div>
 
       </div>*/

    );
  }


}

export default App;
