//Creamos un archivo para mandar distinta informacion de cada imagen que nos da
import React from 'react';

const PublicationId = (props) => {
    //Creamos constante del prop.imagen para optimziar y en const los valores a pasar
    const { id} = props.publicationId;
    const urlb =
    `https://journals.plos.org/plosone/article?id=${id}`;
    return (
 
       
                <tr className="table-secondary">

                    <td><br /><a href={urlb}target="_blank" rel="noopener noreferrer">{id}</a><br /></td>
                   
                </tr>

    )
}


export default PublicationId;