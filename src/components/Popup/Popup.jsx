import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';
import calendarIcon from '../../icons/calendar.svg';
import locationIcon from '../../icons/location.svg';

import Button from '../../components/Button/Button';

const Popup = ({ imageUrl, title, subtitle, type, text }) => {
  const fakeData = {
    eventDate: {
      date: 'Friday, October 20, 2019',
      time: '9:00 AM - 2:00 PM',
    },
    eventLocation: {
      street: 'St. Marry Church',
      adress: '2475 Ericsson Str., IL 60169',
    },
  };

  return (
    <div className={style.popupWrapper} style={{ backgroundImage: 'url(' + imageUrl + ')' }}>
      <Button buttonStyle="dots" />
      <div className={style.contentBlock}>
        {title && <h2 className={classNames(style.title, type === 'datePopup' && 'txtL')}>{title} </h2>}

        {subtitle && type !== 'datePopup' && <h4 className={classNames(style.subtitle)}>{subtitle}</h4>}

        {type === 'datePopup' ? (
          <>
            <div className={'row'} style={{ marginBottom: '40px' }}>
              <div className={style.requisitesBlock}>
                <div className={classNames(style.date, 'row')}>
                  <img className={style.icon} src={calendarIcon} alt="an event date" />

                  <div className={style.dateInfo}>
                    {fakeData.eventDate.date} <br />
                    {fakeData.eventDate.time} <br />
                    <NavLink className="link" to="/">
                      Add to Calendar
                    </NavLink>
                  </div>
                </div>
                <div className={classNames(style.location, 'row')}>
                  <img className={style.icon} src={locationIcon} alt="an event location" />

                  <div className={style.placeInfo}>
                    {fakeData.eventLocation.street} <br />
                    {fakeData.eventLocation.adress} <br />
                    <NavLink className="link" to="/">
                      Show on map
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className={style.aboutEventBlock}>
                {subtitle && <h4 className={classNames(style.subtitle, type === 'datePopup' && 'txtL')}>{subtitle}</h4>}
                <p className={style.textBlock}>{text}</p>
              </div>
            </div>

            <Button buttonStyle="primary" type="btnSuccess" text="Attending" />
          </>
        ) : (
          <div className={style.textBlock}>{text}</div>
        )}
      </div>
    </div>
  );
};

Popup.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Popup;
