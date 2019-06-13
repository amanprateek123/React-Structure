import React from 'react';
 import './Cockpit.css';
const Cockpit = (props) => {
   
    const classes = [];
   if(props.persons.length<=2){
     classes.push('red');
   }
   if(props.persons.length<=1) {
     classes.push('bold');
   }
    return(
        <div>
            <h1>Hi, I am React App!</h1>
            <p className={classes.join(' ')}>It is working!!</p>
            <button style={props.style} onClick={props.toggle}>Toggle Person</button>
        </div>
    )
}
export default Cockpit;