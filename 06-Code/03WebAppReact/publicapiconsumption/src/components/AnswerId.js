import React, { Component } from 'react';
import PublicationId from './PublicationId';


class AnswerId extends Component {
    //Testear
    showPublications = () => {

        const publicationsId = this.props.publicationsId;
        //Validación para que no aparezca vació
        if (publicationsId.length === 0) return null;

        console.log(publicationsId);
        //EJEMPLO TABLA VA DENTRO DE RETURN REACT FRAGMENT



        return (
            <React.Fragment>

                <table className="justify-all-center">
                    <thead>
                        <tr >

                            <th class="text-center" scope="col">ID and URL</th>
               
                        </tr>

                    </thead>
                    <tbody>
                        {publicationsId.map(publicationId => (
                            <PublicationId
                                key={publicationId.id} //Accedemos al id para que tenga un codigo unico
                                publicationId={publicationId}
                            />
                        ))}
                    </tbody>

                </table>



            </React.Fragment>
        )

    }

    render() {
        return (
            <React.Fragment>
                {this.showPublications()}
            </React.Fragment>
        );

    }
}

export default AnswerId;