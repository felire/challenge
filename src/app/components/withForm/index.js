import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, getIn } from 'formik';

const withForm = WrappedComponent => {
  class WithFormComponent extends Component {
    componentDidMount() {
      this.props.formik.registerField(this.props.name, this);
    }

    componentDidUpdate(prevProps) {
      const { formik, name, validate } = this.props;
      if (name !== prevProps.name) {
        formik.unregisterField(prevProps.name);
        formik.registerField(name, this);
      }

      if (validate !== prevProps.validate) {
        formik.registerField(name, this);
      }
    }

    componentWillUnmount() {
      this.props.formik.unregisterField(this.props.name);
    }

    handleChange = value => {
      this.props.formik.handleChange(this.props.name)(value);
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    };

    render() {
      const { formik, name, ...inputProps } = this.props;
      const error = getIn(formik.errors, name);
      const touch = getIn(formik.touched, name);

      return (
        <WrappedComponent
          onBlur={formik.handleBlur(name)}
          value={getIn(formik.values, name)}
          error={touch && error ? error : null}
          {...inputProps}
          onChange={this.handleChange}
        />
      );
    }
  }

  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithFormComponent.displayName = `WithForm(${displayName})`;

  WithFormComponent.propTypes = {
    name: PropTypes.string.isRequired,
    formik: PropTypes.shape({
      handleBlur: PropTypes.func.isRequired,
      handleChange: PropTypes.func.isRequired,
      registerField: PropTypes.func.isRequired,
      unregisterField: PropTypes.func.isRequired,
      values: PropTypes.any
    }),
    validate: PropTypes.func,
    onChange: PropTypes.func
  };

  return connect(WithFormComponent);
};

export default withForm;