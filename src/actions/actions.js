import { CHANGE_NAME, CHANGE_COUNT, CHANGE_COLOR, ADD_WIDGET, SET_ACTIVE_WIDGET, SAVE_WIDGET} from './actionsType';

export function changeName (name){
  return {
    type: CHANGE_NAME,
    name: name
  };
};

export function changeCount (count){
  return {
    type: CHANGE_COUNT,
    count: count
  };
};

export function changeColor (color){
  return {
    type: CHANGE_COLOR,
    color: color
  };
};

export function addWidget (widgets){
  return {
    type: ADD_WIDGET,
    widgets: widgets
  };
};

export function setActiveWidget (widget){
  return {
    type: SET_ACTIVE_WIDGET,
    activeWidget: widget
  };
};

export function saveWidget (widgets){
  return {
    type: SAVE_WIDGET,
    widgets: widgets
  };
};
