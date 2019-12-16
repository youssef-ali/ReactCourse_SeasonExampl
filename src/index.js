import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    // constructor(props) {
    //     super(props);
        
    // }
    state = { lat: null, errorMessage: '' };
    
componentDidMount(){
    // console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => this.setState({errorMessage: err.message})
    );
}

// componentDidUpdate(){
//     console.log('My component was just updated - it rerendered!');
// }

    render() {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(this.state.lat && !this.state.errorMessage)
        {
            return <SeasonDisplay lat={this.state.lat}/>;
            //<div>Latitude: {this.state.lat}</div>
        } 
        
        return <div>Loading...</div>;
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);