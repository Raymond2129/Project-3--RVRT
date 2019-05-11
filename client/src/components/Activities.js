import React from "react";
import { Card, CardMedia,  CardTitle, CardText } from "react-toolbox/lib/card";
import './css/index.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Iframe from "react-iframe";
// import { Dropdown, DropdownButton} from 'react-bootstrap';
import adven from "./images/act.jpg";
import ghost from "./images/002-ghost.png";
import camp from "./images/camp.jpg";
import tent from "./images/camping-tent3.png";
import tools from "./images/tools.jpg";
import tool from "./images/004-settings.png";
import diy from "./images/diy.jpg";
import toolset from "./images/toolbox1.png";
// import sink from './images/sink-cover.jpg';
const DIYText =
  "Most RV sinks have covers that slide over top while you’re driving down the road. These covers are great because they not only create a covered in-sink storage area, but they also serve as extra counter space. But what if we took that concept one step farther? What if, in addition to a storage lid and extra space, the sink covers also doubled as cutting boards? Brilliant right! This simple DIY requires nothing more than a simple cutting board and a hack saw to cut it to size. For more instructions take a look at this article on rvtravel.com.";
const toolText = "";
const dummyText =
  "On a forest service road that climbs high above Telluride is a collection of crumbling buildings that were once the great mining town of Alta Lakes. Constructed around the turn of the 20th century and active until the 1930s, the Gold King Mine at Alta Lakes, elevation 11,000 feet, was the first mine in the world to receive AC power. This high-altitude, scenic ghost town is accessible by four-wheel drive and still retains many of the original structures.";

const campText =
  "Amphitheater Campground is located near the town of Ouray, Colo., at an elevation of 8,400 feet. Visitors enjoy the area for its beautiful scenery and great hiking and off-road trail opportunities...";
const Activities = () => (

<Container>
     <Row >
      <Col xs={3}>
      <Card style={{ width: "250px"}}>
          <CardTitle avatar={camp}/>
          <CardMedia >
            <CardTitle avatar={tent} title="Amphitheater Campground" />
            <CardText>{dummyText}</CardText>
          </CardMedia>
        </Card>
      </Col>
      <Col md={{ span:2, offset:2}}>
      <Card style={{ width: "300px" }}>
        <Iframe
          url="https://www.google.com/maps/d/embed?mid=1p6mQhsS5flYu4HUIPTOdcY2oX2MjOOga&z=13"
          width="650px"
          height="775px"
          id="myId"
          className="myClassname"
          display="initial"
          allowFullScreen
        />
        </Card>
      </Col>
      <Col></Col>
      <Col></Col>


    </Row>



    <Row className="justify-content-md-center">
      <Col >
        <Card style={{ width: "350px" }}>
          <CardTitle avatar={tools} />
          <CardMedia>
            <CardTitle avatar={tool} title="The RV Doctor" />
            <CardText>{toolText}</CardText>
          </CardMedia>
        </Card>
      </Col>
      <Col >
      <Card style={{ width: "250px" }}>
        <CardTitle avatar={adven} />
          <CardMedia >
            <CardTitle avatar={ghost} title="Alta (Ghost Town)"> </CardTitle>
            <CardText>{campText}</CardText>
          </CardMedia>
        </Card>

      </Col>

      <Col >
        <Card style={{ width: "350px" }}>
          <CardTitle avatar={diy} />
          <CardTitle avatar={toolset} title="Usefull Tips" />
          <CardMedia>
            <CardText> {DIYText}</CardText>
          </CardMedia>
        </Card>
      </Col>
    </Row>

    </Container>
);

export default Activities;
/* <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.Item as="button">Ouray</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton> */
