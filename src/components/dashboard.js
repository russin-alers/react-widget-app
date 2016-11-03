import React from 'react';
import Widget from './widget';

export default class Dashboard extends React.Component {

  render() {

    var widgets = this.props.widgets.map((widget, index) => {
      return (
        <Widget
          key={index+1}
          name={widget.name}
          count={widget.count}
          color={widget.color}
          onClick= {this.props.handleClick.bind(this, widget)}
        />
      )
    });
    return (
      <div>
        {widgets.reverse()}
      </div>
    );
  }

}
