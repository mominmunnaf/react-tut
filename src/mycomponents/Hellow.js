import React from 'react';

function Hello(props){

    function Do(){
        alert("Button is clicked");
    }
    
    return (
        
        <div>
            <button onClick={Do}>Click Here</button>
            <h1>Name: {props.name}, Age: {props.age} </h1>

        </div>
        

    );

}
export default Hello;