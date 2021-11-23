import React from 'react';
import {IndexLink} from 'react-router';

export default createClass({
    render() {
        return (
            <div>
                <h3>Page1</h3>
                <IndexLink to="/">Back to Home</IndexLink>
            </div>
        );
    }
});