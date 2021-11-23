import React from 'react';
import {Link} from 'react-router';

export default createClass({
    render() {
        return (
            <div>
                <h3>Home Page</h3>
                <Link to="/page1">Go to Page1</Link>
            </div>
        );
    }
});