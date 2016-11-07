import React, { Component } from 'react';
import Dashboard from './dashboard';
import Settings from './settings';

import _ from 'underscore';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class App extends Component {

  addWidget(e, widget) {
    e.preventDefault();
    var widgets = this.props.widgets;
    if (widget) {
      widgets.push(widget);
      this.props.addWidget(widgets);
      return true;
    };
  };

  _saveWidget (oldWidget, newWidget) {
    var foundWidget = _.find(this.props.widgets, widget => widget.index === oldWidget.index);
    console.log(foundWidget);
    foundWidget.name = newWidget.name;
    foundWidget.count = parseInt(newWidget.count);
    foundWidget.color = newWidget.color;
    this.props.saveWidget(this.props.widgets);
    this.props.setActiveWidget(null);
    return true;
  }

  handleClick(i,e) {
    this.props.setActiveWidget(this.props.widgets[i]);
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
          {...this.props}
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

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
