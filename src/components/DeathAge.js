import React from 'react';

function DeathAge(props){

    // State being passed down as a prop from the parent component.
    if(props.yearsLeft && !props.isLucky){
        return (
            <h1>
                You're going to die within {props.yearsLeft} years
            </h1>
        );
    } else if(props.yearsLeft && props.isLucky){
        return (
            <div>
                <h1> You're one of the lucky ones. </h1>
                <h1> You'll live past the average age. </h1>
            </div>
        );
    }


    return(
        <h1>
            You're going to die within ...
        </h1>
    );
}


export default DeathAge;