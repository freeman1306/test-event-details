import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import iconClose from '../../icons/close.png';
import iconBack from '../../icons/return.svg';
import style from './style.module.scss';

const ShadowLayer = ({ children, isOpen, popupRef }) => {
  return (
    (isOpen && (
      <div className={style.shadowLayer} id="shadowLayer">
        <Button iconClose={iconClose} type="btnClose" />
        <Button iconBack={iconBack} type="btnBack" text="Back to Memorial" />
        <div className={style.wrapper} ref={popupRef}>
          {children}
        </div>
      </div>
    )) ||
    ''
  );
};

ShadowLayer.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  popupRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default ShadowLayer;
