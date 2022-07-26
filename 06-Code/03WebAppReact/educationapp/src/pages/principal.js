import React, { Component, useEffect, useState } from 'react'
import MenuApp from '../components/menu'
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default class principal extends Component {
  componentDidMount() {
    if (!cookies.get("id")) {
      window.location.href = "./";
    }
  }
  render() {
    return (
      <div>
        <MenuApp />
      </div>
    )
  }
}
