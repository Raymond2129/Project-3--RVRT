import React from 'react';
import { Card, CardTitle, CardMedia,CardText } from 'react-toolbox/lib/card';
import { Button, Row, Col } from 'reactstrap';
// import { Dropdown, DropdownButton} from 'react-bootstrap';
import camp from './images/camp.jpg';
import tent from './images/camping-tent3.png';
const dummyText = 'Amphitheater Campground is located near the town of Ouray, Colo., at an elevation of 8,400 feet. Visitors enjoy the area for its beautiful scenery and great hiking and off-road trail opportunities...';

const Campgrounds = () => (
  <Col md={4}>
  <Card style={{width: '350px'}}>
    <CardTitle
      avatar={camp}
    />
    <CardMedia>
      <CardTitle
      avatar = {tent}
      title = "Amphitheater Campground"
       />
    <CardText>{dummyText}
    </CardText>
    </CardMedia>
    </Card>
    </Col>
    );
export default Campgrounds;
      /* /* <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.Item as="button">Ouray</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton> */







