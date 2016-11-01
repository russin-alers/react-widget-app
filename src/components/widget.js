import React from 'react';

const Widget = ({name, count,color, onClick, key}) => {

  var colors = color.split(',');
  var widgetStyle = {
    backgroundColor: `rgb(${colors[0]},${colors[1]},${colors[2]})`
  };
  // console.log(widgetStyle);

  return (
    <div className='panel panel-default' key={key} style={widgetStyle} onClick={onClick}>
      <div className='panel-heading'>
        <h3 className='panel-title'>{name}</h3>
      </div>
      <div className='panel-body'>
        {count}
      </div>
    </div>);
};



Widget.propTypes = {
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  color: React.PropTypes.string.isRequired
};

export default Widget;
