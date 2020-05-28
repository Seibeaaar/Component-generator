import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './previewComponents/Input';
import Radio from './previewComponents/Radio';
import Checkbox from './previewComponents/Checkbox';
import Range from './previewComponents/Range';

const Preview = ({ components }) => {
  return (
    <div className="app__component">
      <h2>Components preview</h2>
      <div className="component__wrapper">
        <div className="component__block">
          {components.map(component => {
            switch (component.type) {
              case 'radio':
                return <Radio type={component.type} label={component.label} additional={component.additional} />
              case 'checkbox':
                return <Checkbox type={component.type} label={component.label} additional={component.additional} />
              case 'range':
                return <Range type={component.type} label={component.label} additional={component.additional} />
              default:
                return <Input type={component.type} label={component.label} />
            }
          })}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    components: state.components
  }
}

Preview.propTypes = {
  components: PropTypes.array.isRequired
}

export default connect(mapStateToProps, null)(Preview);