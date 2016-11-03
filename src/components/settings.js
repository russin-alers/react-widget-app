import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { changeName, changeCount, changeColor, setActiveWidget } from '../actions/actions';

export default class Settings extends React.Component {


  componentWillUpdate(newProps) {
    if (newProps.store.activeWidget){
      var name = newProps.store.activeWidget.name;
      var count = newProps.store.activeWidget.count;
      var color = newProps.store.activeWidget.color;
      var activeWidget = newProps.store.activeWidget;
      this._fill(name,count,color, activeWidget);
    }
  };

  onAdd(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var count = parseInt(this.refs.count.value);
    var color = this.refs.color.value;
    if (name && count && color && this._validate(color)) {
      this.props.store.dispatch(changeName(this.refs.name.value));
      this.props.store.dispatch(changeCount(count));
      this.props.store.dispatch(changeColor(color));
      var newWidget = {
        name: name,
        count: count,
        color: color
      }
      if (this.props.addWidget(e, newWidget)) {
        this._fill();
      };
    }
  };

  onSave(e) {
    e.preventDefault();
    if (this._validate(this.refs.color.value)){
      const oldWidget = this.props.store.activeWidget;
      const newWidget = {
        name: this.refs.name.value,
        count: this.refs.count.value,
        color: this.refs.color.value
      }
      if (this.props.saveWidget(oldWidget, newWidget)){
        this._fill();
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

  _fill(name='',count=null,color=null, activeWidget=null) {
    this.refs.name.value = name;
    this.refs.count.value = count;
    this.refs.color.value = color;
    this.props.store.dispatch(changeName(name));
    this.props.store.dispatch(changeCount(count));
    this.props.store.dispatch(changeColor(color));
    this.props.store.dispatch(setActiveWidget(activeWidget));
  }

  render() {
    var saveButton = 'btn btn-primary '
    var saveButtonClass = this.props.store.activeWidget ? saveButton+'btn-block' : saveButton+'btn-block disabled';
    return (
      <div>
          <div className='form-group'>
            <label>Name</label>
            <input
              className='form-control'
              name= 'name'
              type= 'text'
              ref = 'name'
            />
          </div>
          <div className='form-group'>
            <label>Count</label>
            <input
              className='form-control'
              name= 'count'
              type= 'number'
              ref= 'count'
            />
          </div>
          <div className='form-group'>
            <label>Color (r,g,b)</label>
            <input
              className='form-control'
              name='color'
              ref = 'color'
              placeholder='r,g,b'
            />
          </div>
          <button className='btn btn-primary btn-block' onClick={this.onAdd.bind(this)}>Add</button>
          <button disabled={!this.props.store.activeWidget} className={saveButtonClass} onClick={this.onSave.bind(this)}>Save</button>
      </div>
    );
  }

};
