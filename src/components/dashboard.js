import React from 'react';
import Widget from './widget';

export default class Dashboard extends React.Component {

  render() {

    var widgets = this.props.widgets.map((widget) => {
      var { name, count, color, index } = widget
      return (
        <Widget
          key={index}
          index={index}
          name={name}
          count={count}
          color={color}
          onClick= {this.props.handleClick.bind(this, index)}
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
