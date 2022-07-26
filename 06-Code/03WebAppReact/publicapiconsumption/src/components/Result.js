import React, { Component } from 'react';
import Publication from './Publication';

class Result extends Component {
    //Testear
    showPublications = () => {

        const publications = this.props.publications;
        //Validación para que no aparezca vació
        if (publications.length === 0) return null;

        console.log(publications);
        //EJEMPLO TABLA VA DENTRO DE RETURN REACT FRAGMENT



        return (
            <React.Fragment>

                <table className="table table-hover">
                    <thead>
                        <tr className="text-center">
                            <th scope="col" >id</th>
                            <th scope="col">journal</th>
                            <th scope="col">eissn</th>
                            <th scope="col">publication  date</th>
                            <th scope="col">article_type</th>
                            <th scope="col">author_display</th>
                            <th scope="col">title_display</th>
                            <th scope="col">score</th>

                        </tr>
                    </thead>
                    <tbody >
                                {publications.map(publication => (
                                    <Publication
                                        key={publication.id} //Accedemos al id para que tenga un codigo unico
                                        publication={publication}
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

export default Result;