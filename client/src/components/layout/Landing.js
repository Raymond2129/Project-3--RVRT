/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Iframe from 'react-iframe';
// import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">

              <Iframe src="https://www.google.com/maps/d/embed?mid=1p6mQhsS5flYu4HUIPTOdcY2oX2MjOOga" width="800" height="800"></Iframe>

           </div>
          </div>
        </div>


    );
  }
}

export default Landing;
