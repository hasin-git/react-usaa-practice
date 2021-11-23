import React from 'react';
import './App.css';

class StatefulApp extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 
                [
                    {
                        "id": 1,
                        "name": "Fido",
                        "petType": "Dog"
                    },
                    {
                        "id": 2,
                        "name": "Fluffy",
                        "petType": "Cat"
                    },
                    {
                        "id": 3,
                        "name": "Spike",
                        "petType": "Dog"
                    }
                ]
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((pet, i) => <TableRow key = {i} data = {pet} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
        <div>
            <h1>Header</h1>
        </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.petType}</td>
            </tr>
        );
    }
}

export default StatefulApp;