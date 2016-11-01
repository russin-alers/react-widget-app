import React, { Component } from 'react';
import Dashboard from './dashboard';
import Settings from './settings';
import _ from 'underscore';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      widgets: [],
      activeWidget: null
    };
  };

  addWidget(e, widget) {
    e.preventDefault();
    var widgets = this.state.widgets;
    if (widget) {
      widgets.push(widget);
      this.setState({...this.state, widgets:widgets, activeWidget:null});

      return true;;
    };
  };

  saveWidget (oldWidget, newWidget) {
    var foundWidget = _.find(this.state.widgets, widget => widget.name === oldWidget.name);
    foundWidget.name = newWidget.name;
    foundWidget.count = parseInt(newWidget.count);
    foundWidget.color = newWidget.color;
    this.setState({
      widgets:this.state.widgets,
      activeWidget:null
    });
    return true;

  }

  handleClick(widget,e) {
    this.setState({...this.state, activeWidget: widget});
  };

  render() {
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-3'>
          <Dashboard
            widgets={this.state.widgets}
            handleClick={this.handleClick.bind(this)}
          />
        </div>
        <div className='col-md-2 col-md-offset-2'>
          <Settings
          activeWidget={this.state.activeWidget}
          saveWidget={this.saveWidget.bind(this)}
          addWidget={this.addWidget.bind(this)}
          />
        </div>
      </div>
    );
  }
}
