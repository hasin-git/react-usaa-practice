import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class ValidatePropsApp extends React.Component {
    render() {
        return (
            <div>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>     
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>   
                <h3>Array: {this.props.propArray}</h3>
                <h3>Func: {this.props.propFunc(4)}</h3>
                <h3>Object: {this.props.propObject.object1}</h3>
                <h3>Object: {this.props.propObject.object2}</h3>      
            </div>
        );
    }
}

ValidatePropsApp.propTypes = {
    propBool: PropTypes.bool.isRequired,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propFunc: PropTypes.func,
    propObject: PropTypes.object
}

ValidatePropsApp.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString: "String value...",
    propObject: {
        object1:"This is object 1 value",
        object2:"This is object 2 value"
    }
}
export default ValidatePropsApp;