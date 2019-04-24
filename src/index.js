import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from "./lib";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: [{ time: "11:00pm", m1: "54", m2: "443" }],
                keys: ["time", "m1", "m2"]
            }
        }
    }

    handleSubmit = (e) => {
        if (e) e.preventDefault();
        const data = this.data.value;
        var jsonStr = data.replace(/(\w+:)|(\w+ :)/g, function (s) {
            return '"' + s.substring(0, s.length - 1) + '":';
        });

        let json = JSON.parse(jsonStr)
        console.log(json)
        this.setState({
            data: json
        })
        console.log(this.state)
    }

    updateAbgTableState() {
        alert("update state")
    }

    selectedMeasurement() {

    }

    selectedCol1() {

    }

    selectedCol2() {

    }

    render() {
        console.log(this.state)
        return (
            <>
                <div>Pass in data in the form: {'{data: [{time: "1pm", m1: "54", m2:"443" }], keys: ["time", "m1", "m2"]} '}</div>
                <form onSubmit={this.handleSubmit}>
                    <input style={{
                        height: "30px",
                        width: "50%",
                        fontSize: "14pt"
                    }} placeholder="data" type="text" ref={(element) => { this.data = element }} />
                    <button>UPDATE TABLE</button>
                </form>
                <Table
                    data={this.state.data}
                    updateTableState={this.updateAbgTableState}
                    selectedMeasurement={this.selectedMeasurement}
                    selectedCol1={this.selectedCol1}
                    selectedCol2={this.selectedCol2}
                />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



