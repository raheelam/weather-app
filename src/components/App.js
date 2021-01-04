import React from 'react';
import Season from './Season';

class App extends React.Component{
    constructor(){
        super();
        this.state={lat: null, error: ''};
    }

    componentDidMount=()=>{
        navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat: position.coords.latitude }),
            (error)=>this.setState({error: error.message })
            )
    }

    render(){
        return(
            <Season error={this.state.error} lat={this.state.lat} />
        );
    }
}
export default App;