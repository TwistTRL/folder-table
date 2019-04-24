import React, { PureComponent } from "react";
import "./Table.css"

// data = [{time: int, measurement1: int, measurement2: int...}]
// key = [time, measurement1, meansurement2...]
class Table extends PureComponent {
    constructor(props) {
        super(props);

        this.tableKeys = this.props.data.keys
        this.tableData = this.props.data.data
    }
    
    measurementOnClick = (e) => {
        let measurementData = []
        this.tableData.map(data => {
            measurementData.push([data["time"], data[e.target.className]])
        })

        this.props.updateTableState(e.target.className)
        alert(e.target.className + " " + measurementData)
    }

    colOnClick = (e) => {
        let classNames = e.target.className.split(" ")
        let selectedCol1 = classNames[1]
        let selectedColIndex = parseInt(classNames[2])

        if (this.tableData.length === 1) {
            selectedColIndex = 0
        } else if (selectedColIndex === this.tableData.length - 1) {
            selectedColIndex -= 1
        } else {
            selectedColIndex += 1
        }

        this.props.updateTableState({
            selectedCol1: selectedCol1,
            selectedCol2: this.tableData[selectedColIndex].time
        })
    }

    render() {
        if (!this.props.data) {
            return null;
        }

        this.tableKeys = this.props.data.keys
        this.tableData = this.props.data.data

        const TableBody = ({ measurements }) => {
            {
                return (
                    measurements.map((m, i) => {
                        return (
                            <TableRow key={m} m={m} i={i} />
                        )
                    })
                )
            }
        }

        const TableRow = ({ m, i }) => (
            <tr
                key={m + 1}
                style={{
                    background: i % 2 === 0 ? "#EEEEEE" : "white"
                }}>
                {   // first cell in the row is measurement label
                    m === "time" ?
                        <td className={m} key={m}></td> :
                        <td className={`${m} ${"firsttd"}`}
                            key={m}
                            onClick={this.measurementOnClick}
                        >
                            {m}
                        </td>
                }
                {this.tableData.map((data, index) => {
                    let curTime = this.tableData[index].time
                    return (
                        <td
                            className={`${m} ${curTime} ${index + "td"}`}
                            key={index}
                            onClick={this.colOnClick}
                            style=
                            // double ternary statements needed because the first row's 
                            // initial background is different than the rest
                            {this.props.selectedCol1 === curTime ||
                                this.props.selectedCol2 === curTime ?
                                { background: "rgba(247, 173, 229, 0.3)" } : {}}
                        >
                            {data[m]}
                        </td>
                    )
                })}
            </tr>
        )

        return (
            <div className="folder-table-container">
                <div
                    className="folder-table"
                    style={{ overflowX: "auto" }}
                >
                    <table key="folder-table">
                        <tbody key="folder-table-body">
                            <TableBody measurements={this.tableKeys} />
                        </tbody>
                    </table>
                    <br style={{ clear: "both" }} />
                </div>
            </div>
        );

    }
}

export default Table;
