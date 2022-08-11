import React, { Component, useEffect, useState } from "react";
import AddTeacher from "../components/addTeacher";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import TeachersSearch from "../components/TeachersSearch";
import MenuApp from "../components/menu";

const cookies = new Cookies();

export default class profesores extends Component {
  componentWillMount() {
    if (!cookies.get("id")) {
      window.location.href = "./";
    }
  }

  render() {
    return (
      <div>
        <MenuApp />
        <TeachersSearch />
<<<<<<< HEAD
        <Addteacher />
=======
        <AddTeacher />
>>>>>>> c7680995a22ffa9631df547cd168d4ee40fc5ea3
       
      </div>
    );
  }
}