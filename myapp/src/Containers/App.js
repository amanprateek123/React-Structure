import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Radium from 'radium';

class App extends Component {
 state = {
   persons: [
     {id:1, name:"Aman", age:19},
     {id:2, name:"Vatan",age:18},
     {id:3, name:"Chotu",age:16}
   ],
   showPerson:false
 }
 
 deleteHandler = (personIndex) => {
 let persons = this.state.persons.slice();
 persons.splice(personIndex,1);
 this.setState({persons: persons});
 }

 changeHandler = (event,id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id===id;
}) 
const person = {
  ...this.state.persons[personIndex]
}
person.name= event.target.value;
const persons = [...this.state.persons]
persons[personIndex]=person;
  this.setState({
    persons: persons
  })
 }

 toggleHandler = () => {
   const doesShow = this.state.showPerson;
   this.setState({showPerson: !doesShow});
 }
  render() {
    const style = {
      padding: '8px',
      backgroundColor: '',
      color:'',
      border: '1px solid blue',
      cursor: 'pointer',
      }


  let persons = null;
  if(this.state.showPerson===true)
  {
    persons=( <div>
        <Persons 
        persons={this.state.persons}
        clicked={this.deleteHandler}      
        changed={this.changeHandler}  
        />
    </div> )
    style.backgroundColor='red';
    style[':hover']={
      backgroundColor:'light-red'
    }
  }
   
    return (
      <div className="App">
       <Cockpit 
       persons={this.state.persons}
       toggle={this.toggleHandler}   
       style={style}    
       />
        {persons}
      </div>
    );
  }
}

export default Radium(App);
