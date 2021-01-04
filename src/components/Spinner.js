import React from 'react';

export const centerContents = { 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'black', 
    height: '100vh'
}

const Spinner = (props) => {
    return(
        <div style={centerContents}>
            <h1>{props.message}</h1>
            <i className="spinner loading massive icon"></i>
        </div>
    );
}

export default Spinner;