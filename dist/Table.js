"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./Table.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_PureComponent) {
    _inherits(Table, _PureComponent);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.measurementOnClick = function (e) {
            var measurementData = [];
            _this.tableData.map(function (data) {
                measurementData.push([data["time"], data[e.target.className]]);
            });

            _this.props.updateTableState(e.target.className);
            alert(e.target.className + " " + measurementData);
        };

        _this.colOnClick = function (e) {
            var classNames = e.target.className.split(" ");
            var selectedCol1 = classNames[1];
            var selectedColIndex = parseInt(classNames[2]);

            if (selectedColIndex == _this.tableData.length - 1) {
                selectedColIndex -= 1;
            } else {
                selectedColIndex += 1;
            }

            _this.props.updateTableState({
                selectedCol1: selectedCol1,
                selectedCol2: _this.tableData[selectedColIndex].time
            });
        };

        _this.tableKeys = _this.props.data.keys;
        _this.tableData = _this.props.data.data;
        return _this;
    }

    _createClass(Table, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            if (!this.props.data) {
                return null;
            }

            var TableBody = function TableBody(_ref) {
                var measurements = _ref.measurements;

                {
                    return measurements.map(function (m, i) {
                        return _react2.default.createElement(TableRow, { key: m, m: m, i: i });
                    });
                }
            };

            var TableRow = function TableRow(_ref2) {
                var m = _ref2.m,
                    i = _ref2.i;
                return _react2.default.createElement(
                    "tr",
                    {
                        key: m + 1,
                        style: {
                            background: i % 2 === 0 ? "#EEEEEE" : "white"
                        } },
                    // first cell in the row is measurement label
                    m === "time" ? _react2.default.createElement("td", { className: m, key: m }) : _react2.default.createElement(
                        "td",
                        { className: m + " " + "firsttd",
                            key: m,
                            onClick: _this2.measurementOnClick
                        },
                        m
                    ),
                    _this2.tableData.map(function (data, index) {
                        var curTime = _this2.tableData[index].time;
                        return _react2.default.createElement(
                            "td",
                            {
                                className: m + " " + curTime + " " + (index + "td"),
                                key: index,
                                onClick: _this2.colOnClick,
                                style: _this2.props.selectedCol1 === curTime || _this2.props.selectedCol2 === curTime ? { background: "rgba(247, 173, 229, 0.3)" } : {}
                            },
                            data[m]
                        );
                    })
                );
            };
            return _react2.default.createElement(
                "div",
                { className: "fluids-table-container" },
                _react2.default.createElement(
                    "div",
                    {
                        className: "fluids-table",
                        style: { overflowX: "auto" }
                    },
                    _react2.default.createElement(
                        "table",
                        { key: "fluids-table" },
                        _react2.default.createElement(
                            "tbody",
                            { key: "fluids-table-body" },
                            _react2.default.createElement(TableBody, { measurements: this.tableKeys })
                        )
                    ),
                    _react2.default.createElement("br", { style: { clear: "both" } })
                )
            );
        }
    }]);

    return Table;
}(_react.PureComponent);

exports.default = Table;