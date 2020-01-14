import React, { PureComponent } from "react";
import { format } from "date-fns";
import "./Table.css";

// data = [{time: int, measurement1: int, measurement2: int...}]
// key = [time, measurement1, meansurement2...]
class Table extends PureComponent {
  constructor(props) {
    super(props);
  }

  rowLabelOnClick = e => {
    if (!this.props.handleRowLabelClick) {
      return;
    }

    let rowData = [];

    // update the store
    this.tableData.map(data => {
      rowData.push({
        time: data["time"],
        value: data[e.target.dataset.rowlabel]
      });
    });

    this.props.handleRowLabelClick(e.target.dataset.rowlabel);
  };

  colOnClick = e => {
    let classNames = e.target.className.split(" ");
    let selectedCol1 = Number(classNames[1]);
    let selectedColIndex = parseInt(classNames[2]);
    let neighborColIndex;

    if (!this.props.handleColClick || isNaN(selectedCol1)) {
      return;
    }

    if (this.tableData.length === 1) {
      neighborColIndex = 0;
    } else if (selectedColIndex === this.tableData.length - 1) {
      neighborColIndex = selectedColIndex - 1;
    } else {
      neighborColIndex = selectedColIndex + 1;
    }

    this.props.handleColClick({
      selectedCol1: selectedCol1,
      selectedCol2: this.tableData[neighborColIndex].time,
      e: e
    });
  };

  render() {
    if (this.props.data.length < 1) {
      return null;
    }

    let { selectedCol1, selectedCol2 } = this.props;
    this.tableKeys = this.props.keys;
    this.tableData = this.props.data;

    const TableBody = ({ rowLabels }) => {
      {
        return rowLabels.map((m, i) => {
          return <TableRow key={m} m={m} rowIndex={i} />;
        });
      }
    };

    // creates the table row by row
    const TableRow = ({ m, rowIndex }) => (
      <tr
        key={m + 1}
        style={{
          background: rowIndex % 2 === 0 ? "#EEEEEE" : "white"
        }}
      >
        {// first cell in the row is measurement label
        m === "time" ? (
          <td className={"folder-table-" + m} key={m}>
            {" "}
            Time{" "}
          </td>
        ) : (
          <td
            className={`${"folder-table-" + m} ${"firsttd"}`}
            data-rowlabel={m}
            key={m}
            onClick={this.rowLabelOnClick}
          >
            {m}
          </td>
        )}
        {this.tableData.map((data, colIndex) => {
          if (data !== undefined) {
            let curTime = this.tableData[colIndex].time;
            let cellText;

            if (rowIndex === 0) {
              let date = new Date(curTime * 1000);

              cellText = (
                <div style={{ fontSize: "9" }}>
                  {" "}
                  {date.getMonth() +
                    1 +
                    "/" +
                    date.getDate() +
                    "/" +
                    date
                      .getFullYear()
                      .toString()
                      .substr(-2)}{" "}
                  <br></br> {format(date, "h:mma")}{" "}
                </div>
              );
            } else {
              cellText = data[m];
            }

            return (
              <td
                className={`${"folder-table-" + m} ${curTime} ${colIndex +
                  "td"}`}
                data-unixtime={curTime}
                key={colIndex}
                onClick={this.colOnClick}
                style={
                  // initial background is different than the rest // double ternary statements needed because the first row's
                  selectedCol1 === curTime || selectedCol2 === curTime
                    ? { background: "rgba(247, 173, 229, 0.3)" }
                    : {}
                }
              >
                {cellText}
              </td>
            );
          }
        })}
      </tr>
    );

    return (
      <div className="folder-table-container">
        <div className="folder-table" style={{ overflowX: "auto" }}>
          <table key="folder-table">
            <tbody key="folder-table-body">
              <TableBody rowLabels={this.tableKeys} />
            </tbody>
          </table>
          <br style={{ clear: "both" }} />
        </div>
      </div>
    );
  }
}

export default Table;
