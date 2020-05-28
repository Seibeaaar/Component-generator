import React from 'react';
import { connect } from 'react-redux';
import Input from './previewComponents/Input';
import Radio from './previewComponents/Radio';
import Checkbox from './previewComponents/Checkbox';

const Preview = ({ components }) => {
  return (
    <div className="app__component">
      <h2>Components preview</h2>
      <div className="component__wrapper">
        {components.map(component => {
          switch (component.type) {
            case 'radio':
              return <Radio type={component.type} label={component.label} options={component.additional.options} />
            case 'checkbox':
              return <Checkbox type={component.type} label={component.label} options={component.additional.options} />
            default:
              return <Input type={component.type} label={component.label} />
          }
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    components: state.components
  }
}

export default connect(mapStateToProps, null)(Preview);