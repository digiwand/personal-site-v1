import React, { createRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Used to detect clicks outside the "children" element(s) in its DOM tree. This will not work for
 * children rendered in a React Portal because they will lie outside of the DOM heirachy.
 */
export default class OutsideClickHandler extends React.Component {
  wrapperRef = createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.props.onOutsideClick();
    }
  };

  render() {
    const { children } = this.props;

    return <div ref={this.wrapperRef}>{children}</div>;
  }
}

OutsideClickHandler.propTypes = {
  name: PropTypes.function
};
