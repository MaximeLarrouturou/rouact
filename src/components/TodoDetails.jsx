import React from 'react';

const TodoDetails = ({ match }) => {
    // console.Log(match.params);
    return ( 
        <h2>Détails de l'id {match.params.id} </h2>  
     );
     
}

export default TodoDetails;