export const addComponent = component => {
  return {
    type: 'ADD_COMPONENT',
    payload: component
  }
}

export const changeType = (id, type) => {
  return {
    type: 'CHANGE_TYPE',
    payload: {
      id,
      type
    }
  }
}

export const changeLabel = (id, label) => {
  return {
    type: 'CHANGE_LABEL',
    payload: {
      id, 
      label
    }
  }
}

export const toggleOptions = (id, condition) => {
  return {
    type: 'TOGGLE_OPTIONS',
    payload: {
      id,
      condition
    }
  }
}

export const toggleRange = (id, condition) => {
  return {
    type: 'TOGGLE_RANGE',
    payload: {
      id,
      condition
    }
  }
}

export const getRange = (id, config) => {
  return {
    type: 'GET_RANGE',
    payload: {
      id,
      config
    }
  }
}

export const getOptions = (id, config) => {
  return {
    type: 'GET_OPTIONS',
    payload: {
      id,
      config
    }
  }
}