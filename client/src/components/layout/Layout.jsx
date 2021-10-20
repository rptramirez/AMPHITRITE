import React, { useEffect } from 'react';

import './layout.css';

import Sidebar from '../sidebar/Sidebar';
import TopNav from '../topnav/TopNav';
import Routes from '../Routes';

import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from '../../redux/actions/ThemeAction';
import { CloudinaryContext, Image } from 'cloudinary-react';
import config from '../../config/config';

const Layout = (props) => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const { cloud_name, upload_preset } = config;
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <CloudinaryContext cloudName={cloud_name} uploadPreset={upload_preset}>
      <BrowserRouter>
        <Route
          render={(props) => (
            <div
              className={`layout ${themeReducer.mode} ${themeReducer.color}`}
            >
              <Sidebar {...props} />
              <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                  <Routes />
                </div>
              </div>
            </div>
          )}
        />
      </BrowserRouter>
    </CloudinaryContext>
  );
};

export default Layout;
