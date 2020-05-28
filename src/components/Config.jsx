import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComponent } from '../redux/actions';
import InputTemplate from './configComponents/InputTemplate';
import '../styles/Config.scss';

const Config = ({ components, addComponent }) => {
  return (
    <div className="app__component">
      <h2>Components config</h2>
      <div className="component__wrapper">
        { components.map((component, index) => <InputTemplate key={index} id={index} />)}
        <button className="config__add" onClick={() => addComponent({ type: '', label: '', additional: {} })}>
          Add component
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    components: state.components
  }
}

Config.propTypes = {
  components: PropTypes.array.isRequired,
  addComponent: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { addComponent })(Config);