import React, { Component } from 'react';
import Dashboard from './dashboard';
import Settings from './settings';
import _ from 'underscore';
import { connect } from 'react-redux';
import { changeName, changeCount, changeColor, addWidget, setActiveWidget, saveWidget} from '../actions/actions';

class App extends Component {

  addWidget(e, widget) {
    e.preventDefault();
    var widgets = this.props.widgets;
    if (widget) {
      widgets.push(widget);
      this.props.dispatch(addWidget(widgets));
      return true;
    };
  };

  _saveWidget (oldWidget, newWidget) {
    var foundWidget = _.find(this.props.widgets, widget => widget.name === oldWidget.name);
    foundWidget.name = newWidget.name;
    foundWidget.count = parseInt(newWidget.count);
    foundWidget.color = newWidget.color;
    this.props.dispatch(saveWidget(this.props.widgets));
    this.props.dispatch(setActiveWidget(null))
    return true;
  }

  handleClick(widget,e) {
    this.props.dispatch(setActiveWidget(widget));
    return true
  };

  render() {
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-3'>
          <Dashboard
            widgets={this.props.widgets}
            handleClick={this.handleClick.bind(this)}
          />
        </div>
        <div className='col-md-2 col-md-offset-2'>
          <Settings
          store={this.props}
          saveWidget={this._saveWidget.bind(this)}
          addWidget={this.addWidget.bind(this)}
          />
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
