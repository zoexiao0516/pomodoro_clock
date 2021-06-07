import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import './Setting.css';


var colorHex = {

}

class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'orange',
            hexCode: "#ff8f69"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.setState(() => {
            return {
                hexCode: this.getHexCode[this.state.value]
            }
        })
        alert('You selected color: ' + this.state.value + " and hexcode: " + this.getHexCode[this.state.value]);
        event.preventDefault();
    }

    getHexCode = {
        "violet": "#7852A9",
        "yellow": "#FCF3A6",
        "orange": "#ff8f69",
        "magenta": "#FF5CFF"
    }

    render() {
        return (
            <main>
                <h2>Settings</h2>

                <h4>Adjust the color theme</h4>

                <div className="home-link"><Link to='/'>Go home</Link></div>

                <form onSubmit={this.handleSubmit}>

                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="violet">Violet</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="magenta">Magenta</option>
                    </select>

                    <input type="submit" value="Select" />
                </form>

            </main>
        );
    }
}

export default Setting;
