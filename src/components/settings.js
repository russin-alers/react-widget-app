import React from 'react';
import ReactDOM from 'react-dom';

class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      count:null,
      color:null,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activeWidget){
      this.setState({
        name:newProps.activeWidget.name,
        count:newProps.activeWidget.count,
        color:newProps.activeWidget.color,
      });
      this.refs.name.value = newProps.activeWidget.name;
      this.refs.count.value = newProps.activeWidget.count;
      this.refs.color.value = newProps.activeWidget.color;
    };
  };

  handleChange(e) {
    e.preventDefault();
    var stateChange = {};
    stateChange[e.target.name] = e.target.value;
    this.setState(stateChange);
  };

  onAdd(e){
    e.preventDefault();
    var name = this.state.name;
    var count = parseInt(this.state.count);
    var color = this.state.color;
    if (name && count && color && this._validate(color)) {
      var newWidget = {
        name: name,
        count: count,
        color: color
      }
      if (this.props.addWidget(e, newWidget)) {
        this._empty();
      };
    }
  };

  onSave(e) {
    e.preventDefault();
    if (this._validate(this.state.color)){
      const oldWidget = this.props.activeWidget;
      const newWidget = {...this.state}
      if (this.props.saveWidget(oldWidget, newWidget)){
        this._empty();
      };
    };
  };

  _validate(color){
    var colors = color.split(',').filter(this._validColor);
    return colors.length == 3;
  }

  _validColor (color) {
    if (color >= 0 && color <=255) {
      return true;
    };
  };

  _empty() {
    this.refs.name.value = '';
    this.refs.count.value = null;
    this.refs.color.value = null;
    this.setState({...this.state, name:'', count:null, color:null });
  }

  render() {
    var saveButton = 'btn btn-primary '
    var saveButtonClass = this.props.activeWidget ? saveButton+'btn-block' : saveButton+'disabled btn-block'
    return (
      <div>
          <div className='form-group'>
            <label>Name</label>
            <input
              className='form-control'
              name= 'name'
              type= 'text'
              ref = 'name'
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className='form-group'>
            <label>Count</label>
            <input
              className='form-control'
              name= 'count'
              type= 'number'
              ref= 'count'
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className='form-group'>
            <label>Color (r,g,b)</label>
            <input
              className='form-control'
              name='color'
              ref = 'color'
              placeholder='r,g,b'
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <button className='btn btn-primary btn-block' onClick={this.onAdd.bind(this)}>Add</button>
          <button disabled={!this.props.activeWidget} className={saveButtonClass} onClick={this.onSave.bind(this)}>Save</button>
      </div>
    );
  }

}

export default Settings;
