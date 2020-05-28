const initialState = {
  components: []
}

const rootReducer = (state = initialState, action) => {
  let components = [...state.components];
  switch(action.type) {
    case 'ADD_COMPONENT':
      return {...state, components: components.concat(action.payload)};
    case 'CHANGE_LABEL':
      components[action.payload.id].label = action.payload.label;
      return {...state, components};
    case 'CHANGE_TYPE':
      components[action.payload.id].type = action.payload.type;
      return {...state, components};
    case 'TOGGLE_OPTIONS':
      if(components[action.payload.id].additional.hasOwnProperty('options')) {
        return {...state, components};
      }
      components[action.payload.id].additional = action.payload.condition ? { options: [] } : {};
      return {...state, components};
    case 'TOGGLE_RANGE':
      components[action.payload.id].additional = action.payload.condition ? { range: { min: '', max: '', value: '', step: '' } } : {};
      return {...state, components};
    case 'GET_RANGE':
      components[action.payload.id].additional.range = action.payload.config;
      return {...state, components};
    case 'GET_OPTIONS':
      components[action.payload.id].additional.options = action.payload.config;
      return {...state, components};
    default:
      return state;
  }
}

export default rootReducer;