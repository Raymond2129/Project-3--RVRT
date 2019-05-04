import React from 'react';
import { Card, CardTitle, CardMedia,CardText, CardActions } from 'react-toolbox/lib/card';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import camp from './images/camp.jpg';


const Campgrounds = () => (
  <Card style={{width: '350px'}}>

    <CardTitle
      avatar={camp}
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia>
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.Item as="button">Ouray</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    </CardMedia>
    <CardText></CardText>
    <CardActions>
      {/* <Button label="Action 1" />
      <Button label="Action 2" /> */}
    </CardActions>

  </Card>
);

// return <Campgrounds />;

export default Campgrounds;
