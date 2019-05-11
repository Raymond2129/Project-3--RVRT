import React from 'react';
import { Card, CardTitle, CardText, CardMedia} from 'react-toolbox/lib/card';
import { Button, Row, Col } from 'reactstrap';
// import {Dropdown, DropdownButton} from 'react-bootstrap';
import diy from './images/diy.jpg';
import toolset from './images/toolbox1.png';
import sink from './images/sink-cover.jpg';
const DIYText = "Most RV sinks have covers that slide over top while you’re driving down the road. These covers are great because they not only create a covered in-sink storage area, but they also serve as extra counter space. But what if we took that concept one step farther? What if, in addition to a storage lid and extra space, the sink covers also doubled as cutting boards? Brilliant right! This simple DIY requires nothing more than a simple cutting board and a hack saw to cut it to size. For more instructions take a look at this article on rvtravel.com.";
const DIYs = () => (
  <Col md={4} >
  <Card style={{width: '350px'}}>
    <CardTitle
      avatar={diy}
    />
     <CardTitle
      avatar = {toolset} title = "Usefull Tips"
      />
    <CardMedia>
    <CardText> {DIYText}</CardText>
    </CardMedia>
    </Card>
  </Col>
  );

export default DIYs;

      /* <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.Item as="button">Ouray</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton> */



