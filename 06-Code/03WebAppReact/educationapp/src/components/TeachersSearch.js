import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
const TeachersSearch = () => {
  const [client, setClient] = useState();
  const url = ApiUrl + "profesores";
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setClient(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  },);

  return (
    <div>
      <div class="card-body">
        <br />
        <br />
        <h3 className="text-center">GET TEACHERS INFORMATION FROM API</h3>
        <br />
        <h5>This shows teachers information from API: {url}</h5>
        <br />
        <br />
      </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">lastname</th>
            <th scope="col">user</th>
            <th scope="col">password</th>
            <th scope="col">type user</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {!client
            ? "Loading"
            : client.map((client, index) => {
                return (
                  <tr className="table-info">
                    <td className="text-center">{client.idCedula}</td>
                    <td className="text-center">{client.name}</td>
                    <td className="text-center">{client.lastName}</td>
                    <td className="text-center">{client.user}</td>
                    <td className="text-center">{client.password}</td>
                    <td className="text-center">{client.type_user}</td>
                    <td className="text-center">{client.status}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersSearch;
