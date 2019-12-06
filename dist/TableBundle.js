"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Table = require("./Table");

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBundle = function (_PureComponent) {
  _inherits(TableBundle, _PureComponent);

  function TableBundle() {
    _classCallCheck(this, TableBundle);

    return _possibleConstructorReturn(this, (TableBundle.__proto__ || Object.getPrototypeOf(TableBundle)).apply(this, arguments));
  }

  _createClass(TableBundle, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          data = _props.data,
          dtWindow = _props.dtWindow,
          updateTableState = _props.updateTableState,
          selectedMeasurement = _props.selectedMeasurement,
          selectedCol1 = _props.selectedCol1,
          selectedCol2 = _props.selectedCol2;


      var filteredData = data.filter(function (d) {
        return d["time"] >= dtWindow[0] && d["time"] <= dtWindow[1];
      });

      return _react2.default.createElement(_Table2.default, {
        data: filteredData,
        updateTableState: updateTableState,
        selectedMeasurement: selectedMeasurement,
        selectedCol1: selectedCol1,
        selectedCol2: selectedCol2
      });
    }
  }]);

  return TableBundle;
}(_react.PureComponent);

exports.default = TableBundle;