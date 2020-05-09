import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import iconSuccess from '../../icons/successIcon.svg';
import iconDots from '../../icons/dots.svg';
import style from './style.module.scss';

const Button = ({ type, className, onClick, children, desabled, round, width, buttonStyle, text, ...attrs }) => {
  const classes = classNames(style.button, className, {
    [style.buttonPrimary]: buttonStyle === 'primary',
    [style.buttonSecondary]: buttonStyle === 'secondary',
    [style.buttonDots]: buttonStyle === 'dots',
    [style.buttonRound]: attrs.rounded,
    [style.buttonCircle]: attrs.circle,
    [style.buttonClose]: type === 'btnClose',
    [style.buttonSuccess]: type === 'btnSuccess',
    [style.buttonBack]: type === 'btnBack',
  });

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag onClick={onClick} className={classes}>
      {buttonStyle === 'primary' && type === 'btnSuccess' && (
        <img className={style.iconSuccess} src={iconSuccess} alt={text} />
      )}

      {buttonStyle === 'dots' && <img className={style.iconDots} src={iconDots} alt="popup menu" />}
      {type === 'btnClose' && <img className={style.iconClose} src={attrs.iconClose} alt="close modal" />}

      {type === 'btnBack' && <img className={style.iconBack} src={attrs.iconBack} alt={text} />}

      <span> {text}</span>
    </Tag>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  desabled: PropTypes.bool,
  round: PropTypes.bool,
  width: PropTypes.number,
  buttonStyle: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: 'button',
  onClick: () => {},
  desabled: false,
  round: false,
  width: '',
  buttonStyle: '',
  text: '',
};

export default Button;
