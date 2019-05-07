import React, { Component } from 'react';
import { Card, CardMedia, CardTitle,  CardActions }  from 'react-toolbox/lib/card';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import van from '../layout/images/van.png';

class MiniFormik extends React.Component{
    state = {
        values:this.props.initialValues || {},
        touched:{},
        errors: {}
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        event.persist();

        this.setState(prevState => ({
            values: {...prevState.values,
            [name]:value,
            },
        }));
    };

    render() {
        return this.props.children({
            ...this.state,
            handleChange:this.handleChange,
        })
    }
}
class Reservation extends React.Component {
    render(){
        return (
            <MiniFormik initialValues = {{
                isGoing:true,
                numberOfGuests: 2,
            }}>
                {({values,handleChange})=> (
                    <form>
                        <li
                        name="isGoing"
                        type="checkbox"
                        className={values.isGoing}
                        onChange={handleChange}
                        />


                    <br />

                        <li
                        name="numberOfGuests"
                        type="number"
                        className={values.numberOfGuests}
                        onChange={handleChange}
                        ></li>
                    </form>
                )}
            </MiniFormik>
        )
    }
}



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
        <label>Town
            <input type = "submit" value = "Save" className= "btn btn-primary"/>
        </label>
        <input className="form-control"
            value={this.state.town}
            onChange={this.onChangeDataTown}
                />
    </div>
    <div className="form-group">
        <label>Activity
            <input type = "submit" value = "Save" className= "btn btn-primary"/>
        </label>
        <input className="form-control"
            value={this.state.searchType}
            onChange={this.onChangeDataSearchType}
                />
    </div>
    <div className="form-group">
        <label>Name
            <input type = "submit" value = "Save" className= "btn btn-primary"/>
        </label>
        <input className="form-control"
            value={this.state.name}
            onChange={this.onChangeDataName}
                />
    </div>
    <div className="form-group">
        <label>Link
            <input type = "submit" value = "Save" className= "btn btn-primary"/>
        </label>
        <input className="form-control"
            value={this.state.link}
            onChange={this.onChangeDataLink}
                />
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
