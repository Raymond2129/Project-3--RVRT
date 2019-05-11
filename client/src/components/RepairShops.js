import React from 'react';
import { Card, CardMedia, CardTitle, CardText}  from 'react-toolbox/lib/card';
import { Button, Row, Col } from 'reactstrap';
// import { Dropdown, DropdownButton} from 'react-bootstrap';
import tools from './images/tools.jpg';
import tool from './images/004-settings.png';
const dummyText = "";

const RepairShops = () => (
  <Col md={4}>
  <Card style={{width: '350px'}}>
    <CardTitle
      avatar={tools}

    />
    <CardMedia>
      <CardTitle
      avatar = {tool}
       title = "The RV Doctor"
       />
    <CardText>{dummyText}
    </CardText>
    </CardMedia>
  </Card>
  </Col>
  );
export default RepairShops;
      /* <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.Item as="button">Ouray</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton> */

