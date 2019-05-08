// import React from 'react';
// // import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
// // import { Dropdown, DropdownButton} from 'react-bootstrap/';
// import Downshift from 'downshift';
// // import Iframe from 'react-iframe';

// export default class DownshiftThree extends Component {
//   constructor(props) {
//     super(props)
// // import Button from 'react-toolbox/lib/button';
// this.town = [
//         {name:"Ouray"},
//         {name:"Frisco"},
//         {name:"Pagosa Springs"},
//         {name:"Steamboat Springs"},
//         {name:"Salida"},
// ];
// this.state ={
//   selectedTown:''
// }

// this.onChange = this.onChange.bind(this)
// }
// onChange(selectedTown){
//   this.setState({selectedTown: selectedTown.name})
// }
// render(){
//   return(
//     <Downshift onChange={this.onChange} itemToString = {town => (town ? town.name :'')}>
//     {({getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, selectedItem, getLabelProps}) => (
//       <div>
//         <label style = {{ margin: '1rem', display:'block'}}{...getLabelProps()}>Where would you like to go?</label> <br />
//         <input {...getInputProps({ placeholder: "Select a Town" })} />
//         {isOpen ? (
//           <div className = "downshift-dropdown">
//           {
//             town.filter(item => !inputValue || item.name.toLowerCase().includes(inputValue.toLowerCase())).map((item,index)=>(
//               <div className='dropdown-item'{...getItemProps({key: item.name, index, item})} style ={{backgroundColor: highlightedIndex === index ? 'lightgray': 'gray', fontWeight: selectedItem === item ? 'bold': 'normal',
//             }}>
//             {item.name}
//             </div>
//             ))
//           }

//       </div>
//     ) : null}
//     </div>
//     )}
//     </Downshift>
//   )
// }

  // <Card style={{width: '600px'}}>
  //   <CardTitle
  //     title="Select Your Location"
  //   />
  //   <CardMedia>
  //     <DropdownButton id="dropdown-item-button" title="Dropdown button">
  //     <Dropdown.Item as="button"className = "frisco">Frisco</Dropdown.Item>
  //     <Dropdown.Item as="button"className = "ouray">Ouray</Dropdown.Item>
  //     <Dropdown.Item as="button"className = "pagosa">Pagosa Springs</Dropdown.Item>
  //     <Dropdown.Item as="button"className = "salida">Salida</Dropdown.Item>
  //     <Dropdown.Item as="button"className = "steamboat">Steamboat Springs</Dropdown.Item>
  //   </DropdownButton>
  //   </CardMedia>
  //   <Iframe src="https://www.google.com/maps/d/embed?mid=1p6mQhsS5flYu4HUIPTOdcY2oX2MjOOga" width="600" height="800"></Iframe>
  //   <CardText></CardText>
  //   <CardActions>
  //     {/* <Button label="Action 1" />
  //     <Button label="Action 2" /> */}
  //   </CardActions>
  // </Card>
