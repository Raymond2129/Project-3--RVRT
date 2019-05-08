import React from 'react';

class Activities extends React.Component{

    render(){
        return <div><h1>Here are some Things to do on your trip</h1>
                <li>{this.props.name}</li>
                </div>;
    }
}
