import { CHANGE_NAME, CHANGE_COUNT, CHANGE_COLOR, ADD_WIDGET, SET_ACTIVE_WIDGET, SAVE_WIDGET} from '../actions/actionsType';

var initialState = {
  widgets: [],
  name: '',
  count: null,
  color: null,
  activeWidget: null
};

export default function mainReducer(state = initialState, action){
  switch (action.type) {

    case CHANGE_NAME:
      return {...state, name:action.name}

    case CHANGE_COUNT:
      return {...state, count:action.count}

    case CHANGE_COLOR:
      return {...state, color:action.color}

    case ADD_WIDGET:
      return {...state, widgets: action.widgets}

    case SET_ACTIVE_WIDGET:
      return {...state, activeWidget: action.activeWidget}

    case CHANGE_NAME:
      return {...state, widgets: action.widgets}

    default:
      return state
  };
};
