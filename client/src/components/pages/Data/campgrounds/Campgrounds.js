import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
// import Button from 'react-toolbox/lib/button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import camp from './images/camp.jpg';


const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const Campgrounds = () => (
  <Card style={{width: '350px'}}>

    <CardTitle
      avatar={camp}
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
      {/* <Button label="Action 1" />
      <Button label="Action 2" /> */}
    </CardActions>

  </Card>
);

// return <Campgrounds />;

export default Campgrounds;
