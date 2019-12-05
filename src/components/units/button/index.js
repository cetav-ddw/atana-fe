import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

function Button({ children, button, type, action, customStyle }) {
  const mainClassNames = classNames(`btn btn--primary ${customStyle}`);
  const secondaryClassNames = classNames(`btn btn--secondary ${customStyle}`);
  const btnStyle = button === 'primary' ? mainClassNames : secondaryClassNames;

  return (
    <button className={btnStyle} type={type} onClick={action}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  customStyle: '',
  button: 'primary',
  type: 'button',
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
  customStyle: PropTypes.string,
  button: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
