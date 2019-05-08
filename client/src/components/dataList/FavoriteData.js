import React, { Component } from 'react';
import { Card, CardMedia, CardTitle,  CardActions }  from 'react-toolbox/lib/card';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import van from '../layout/images/van.png';

export default class FavoriteData extends Component {
    constructor(props) {
        super(props);

        this.onChangeDataTown = this.onChangeDataTown.bind(this);
        this.onChangeDataSearchType = this.onChangeDataSearchType.bind(this);
        this.onChangeDataName = this.onChangeDataName.bind(this);
        this.onChangeDataAbout = this.onChangeDataAbout.bind(this);
        this.onChangeDataLink = this.onChangeDataLink.bind(this);
        this.onChangeDataFavorite = this.onChangeDataFavorite.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            town: '',
            searchType: '',
            name: '',
            about: '',
            link: '',
            favorite:false
        }
    }
    onChangeDataTown(e){
        this.setState({
            town:e.target.value
        })
    }
    onChangeDataSearchType(e){
        this.setState({
            searchType:e.target.value
    })
}
    onChangeDataName(e){
        this.setState({
            name:e.target.value
    })
    }
    onChangeDataAbout(e){
        this.setState({
            about:e.target.value
    })
}
    onChangeDataLink(e){
        this.setState({
            link:e.target.value
    })
    }
    onChangeDataFavorite(e){
        this.setState({
            link:e.target.value
    })
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Data Town: ${this.state.town}`);
        console.log(`Data Type: ${this.state.searchType}`);
        console.log(`Data Name: ${this.state.name}`);
        console.log(`Data Link: ${this.state.link}`);
        console.log(`Data Favorite: ${this.state.favorite}`);

        this.setState({
            town: '',
            searchType: '',
            name: '',
            about: '',
            link: '',
            favorite: 'true'
        })
    }
    render() {
        return (
    <Card style={{width: '350px'}}>
    <CardTitle
        avatar = {van}
        title="This is User's Saved Data"
    />
    <form onSubmit = {this.onSubmit}>
    <CardMedia>
      <DropdownButton id="dropdown-item-button" title="Change Town">
      <Dropdown.Item as="button">Ouray</Dropdown.Item>
      <Dropdown.Item as="button">Frisco</Dropdown.Item>
      <Dropdown.Item as="button">Steamboat Springs</Dropdown.Item>
      <Dropdown.Item as="button">Pagosa Springs</Dropdown.Item>
      <Dropdown.Item as="button">Salida</Dropdown.Item>
    </DropdownButton>
    </CardMedia>
    <CardActions>
    <div className="form-group">
        <label>Town</label>
            <li className="form-control"
            value={this.state.town}
            onChange={this.onChangeDataTown}><input type = "submit" value = "Save" className= "btn btn-primary"/></li>
    </div>
    <div className="form-group">
        <label>Activity</label>
        <li className="form-control"
            value={this.state.searchType}
            onChange={this.onChangeDataSearchType}><input type = "submit" value = "Save" className= "btn btn-primary"/></li>
    </div>
    <div className="form-group">
        <label>Name </label>
        <li className="form-control"
            value={this.state.name}
            onChange={this.onChangeDataName}><input type = "submit" value = "Save" className= "btn btn-primary"/></li>
    </div>
    <div className="form-group">
        <label>Link</label>
        <li className="form-control"
            value={this.state.link}
            onChange={this.onChangeDataLink}></li><input type = "submit" value = "Save" className= "btn btn-primary"/>
    </div>
    <div className="form-group">
        <input type="submit" value="Create Favorites" className="btn btn-primary" />
    </div>
    </CardActions>
    </form>
  </Card>
        )
    }
}
