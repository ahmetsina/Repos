Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/ahmetsina/Documents/github/ReactProjects/Repos/index.ios.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _nativeBase = require('native-base');

var Repos = function (_Component) {
  babelHelpers.inherits(Repos, _Component);

  function Repos() {
    babelHelpers.classCallCheck(this, Repos);
    return babelHelpers.possibleConstructorReturn(this, (Repos.__proto__ || Object.getPrototypeOf(Repos)).apply(this, arguments));
  }

  babelHelpers.createClass(Repos, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        _react2.default.createElement(
          _nativeBase.Header,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { transparent: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              })
            )
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            _react2.default.createElement(
              _nativeBase.Title,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              'Header'
            )
          ),
          _react2.default.createElement(_nativeBase.Right, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          })
        ),
        _react2.default.createElement(_nativeBase.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }),
        _react2.default.createElement(
          _nativeBase.Footer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          _react2.default.createElement(
            _nativeBase.FooterTab,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { full: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              _react2.default.createElement(
                _reactNative.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                },
                'Footer'
              )
            )
          )
        )
      );
    }
  }]);
  return Repos;
}(_react.Component);

exports.default = Repos;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

_reactNative.AppRegistry.registerComponent('Repos', function () {
  return Repos;
});