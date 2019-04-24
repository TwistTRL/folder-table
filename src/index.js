import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from "./lib";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: [{ time: 14324324, m1: 54, m2: 443 }, { time: 14394324, m1: 45, m2: 403 }],
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
        this.setState({
            data: json
        })
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
        return (
            <>
                <div>Pass in data in the form: {'{data: [{time: "156565656", m1: "54", m2:"443" }, {time: "165465466546", m1: "54", m2:"443" }], keys: ["time", "m1", "m2"]} '}</div>
                <form onSubmit={this.handleSubmit}>
                    <input style={{
                        height: "50px",
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



