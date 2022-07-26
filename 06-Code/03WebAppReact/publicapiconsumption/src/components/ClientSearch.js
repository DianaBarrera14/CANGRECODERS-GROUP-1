import React, { useEffect, useState } from 'react';


const ClientSearch = () => {
    const [client, setClient] = useState(null);
    const url="https://httpbin.org/get";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const clientData = {

                    Accept: data.headers.Accept,
                    Origin: data.headers.Origin,
                    agent: data.headers["Sec-Ch-Ua"],
                    acceptlang: data.headers["Accept-Language"],
                    originip: data.origin,
                    Host: data.headers.Host,
                    System: data.headers['Sec-Ch-Ua-Platform']

                };
                setClient(clientData);

            })
    }, []);



    return (
        <div>
            {client ? (<div className="card-header">
                <br />
                <p>This show the client information from API: {url}</p>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Information</th>
                            <th scope="col">Show from API</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-info">
                            <th scope="row">Files that are accepted</th>
                            <td>{client.Accept}</td>
                        </tr>
                        <tr className="table-info">
                            <th scope="row"> Language</th>
                            <td>{client.acceptlang}</td>
                        </tr>
                        <tr className="table-info">
                            <th scope="row">Remote host</th>
                            <td>{client.Host}</td>
                        </tr>
                        <tr className="table-info">
                            <th scope="row">IP that originated the request</th>
                            <td>{client.originip}</td>
                        </tr>
                        <tr className="table-info">
                            <th scope="row">Name of the browser</th>
                            <td>{client.agent}</td>
                        </tr>
                        <tr className="table-info">
                            <th scope="row">Operating System</th>
                            <td>{client.System}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

            ) : null}
        </div>
    )
}

export default ClientSearch;