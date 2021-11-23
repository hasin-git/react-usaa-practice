import React from 'react';
import './App.css';

class StatePropApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from prop",
            content: "Content from prop",
            footer: "Footer from prop"
        }
    }

    render() {
        return (
            <div>
                <Header headerProp = {this.state.header}/>
                <Content contentProp = {this.state.content}/>
                <Footer footerProp = {this.state.footer}/>              
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
        <div>
            <h1>{this.props.headerProp}</h1>
        </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.contentProp}</h2>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.footerProp}</h1>
            </div>
        );
    }
}

export default StatePropApp;