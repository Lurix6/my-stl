import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import classNames from 'classnames';
import MobileNavigator from '../../components/mobileNavigator/';
import AppRouter from './AppRouter'
import './app.scss';

const SignIn = (props) => {

  const [visible, setVisisble] = useState(false);
  const changeVisible = () => setVisisble(!visible);

  useEffect(() => {
    window.addEventListener('resize', resizeHendle);

    return () => {
      window.removeEventListener('resize', resizeHendle);
    };
}, []);

const resizeHendle = (e) => {
  if (e.target.innerWidth > 770) {
    setVisisble(false)
  }
}

  return (
    <div className="appContainer"> 
      <div className={ classNames("navigation", { navigationOpen: visible })}>
        <MobileNavigator />
      </div>
      <div className={ classNames('container', {containerWithOpenNavigator: visible }) }>
        <Header changeVisible={changeVisible} />
        <div style={{paddingTop: '60px'}}>
          <AppRouter />
        </div>
      </div>
    </div>
  )
}

export default  SignIn;