import React, { PureComponent } from "react";
import Table from "./Table";

class TableBundle extends PureComponent {
  render() {
    const {
      data,
      dtWindow,
      updateTableState,
      selectedMeasurement,
      selectedCol1,
      selectedCol2
    } = this.props;

    let filteredData = data.filter(d => {
      return d["time"] >= dtWindow[0] && d["time"] <= dtWindow[1];
    });

    return (
      <Table
        data={filteredData}
        keys={keys}
        updateTableState={updateTableState}
        selectedMeasurement={selectedMeasurement}
        selectedCol1={selectedCol1}
        selectedCol2={selectedCol2}
      />
    );
  }
}

export default TableBundle;
