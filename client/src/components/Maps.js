import React from 'react';
// import { Card, CardTitle, CardText, CardMedia, CardActions } from 'react-toolbox/lib/card';
// import {Dropdown, DropdownButton} from 'react-bootstrap';
import Iframe from 'react-iframe'

const MAPS = () => (

      <Iframe
      url="https://www.google.com/maps/d/embed?mid=1p6mQhsS5flYu4HUIPTOdcY2oX2MjOOga"
      width="450px"
      height="450px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
      allowFullScreen
    />



    //   <DropdownButton id="dropdown-item-button" title="Dropdown button">
    //   <Dropdown.Item as="button">Ouray</Dropdown.Item>
    //   <Dropdown.Item as="button">Another action</Dropdown.Item>
    //   <Dropdown.Item as="button">Something else</Dropdown.Item>
    // </DropdownButton>


);

// return <DIY />;

export default MAPS;
