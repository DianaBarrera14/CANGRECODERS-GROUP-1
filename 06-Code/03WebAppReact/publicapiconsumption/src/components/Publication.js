//Creamos un archivo para mandar distinta informacion de cada imagen que nos da
import React from 'react';

const Publication = (props) => {
    //Creamos constante del prop.imagen para optimziar y en const los valores a pasar
    const { id, journal, eissn, publication_date, article_type, author_display, title_display, score } = props.publication;
    const urlb = `https://api.plos.org/search?q=id:${id}&fl=abstract`;
    return (
        //En los props tomamos la informacion y tomamos que valor queremos imprimir, por ejemplo imagen im
        /*<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className='card-body'>
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>

                    <a href={largeImageURL} target="_blank" className='btn btn-primary btn-block'>Ver Imagen</a>
                </div>

            </div>
        </div>*/
        /*EJEMPLO TABLITA MAS O MENOS
        {props.imagen.previewURL} //Toma el prop la imagen y su valor*/

       
                <tr className="table-primary">
                    <td>{id}</td>
                    <td>{journal}</td>
                    <td>{eissn}</td>
                    <td>{publication_date}</td>
                    <td>{article_type}</td>
                    <td>{author_display}</td>
                    <td><a href={urlb}target="_blank" rel="noopener noreferrer">{title_display}</a></td>
                    <td>{score}</td>
                </tr>

    )
}


export default Publication;