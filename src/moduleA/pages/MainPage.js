import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainLayout from '../../layouts/MainLayout/MainLayout';

import Button from '../../components/Button/Button';
import Popup from '../../components/Popup/Popup';
import mobileImage from '../../images/modalBgs/modalBg.png';
import desktopImage from '../../images/modalBgs/modalBg@x2.png';
import ShadowLayer from '../../components/ShadowLayer/ShadowLayer';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  const useOutside = (ref) => {
    useEffect(() => {
      const togglePopupHandler = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', togglePopupHandler);

      return () => {
        document.removeEventListener('mousedown', togglePopupHandler);
      };
    }, [ref]);
  };

  const popupRef = useRef(null);
  useOutside(popupRef);

  return (
    <MainLayout>
      <Button buttonStyle="primary" text="click me!" onClick={openPopup} />

      <ShadowLayer isOpen={isOpen} popupRef={popupRef}>
        <Popup
          title="Celebration of life"
          subtitle="About"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla ipsum aliquid debitis facere, sapiente culpa autem qui atque voluptatem aspernatur id ut dignissimos ab doloribus non quos corrupti! Culpa."
          imageUrl={imageUrl}
          type="datePopup"
        />
      </ShadowLayer>
    </MainLayout>
  );
};
export default MainPage;
