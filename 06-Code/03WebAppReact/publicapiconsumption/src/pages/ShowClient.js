import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import ClientSearch from '../components/ClientSearch';

class ShowClient extends Component {
    

    render() {
        return (


            <div className="app container">
                <Navigation />
                <div className="card text-white bg-primary mb-3" >
                    <div className="card-header">
                        <p className="lead text-center">Show client computer information from API</p>
                        
                    </div>
                    
                   
                    
                </div>
                <ClientSearch />
            </div>
        )
    }

}

export default ShowClient;