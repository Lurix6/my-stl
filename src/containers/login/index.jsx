import React from 'react';
import './style.scss';
import Field from '../../components/field/';
import { CodeSandboxOutlined }  from '@ant-design/icons';
import Button from '../../components/button/';

export default function() {

  return(
    <div className="login-page">
      <header className="login-page__header">
        <div className="login-page__header__content">        
          <CodeSandboxOutlined />
          <span className="logo-text">
            MY STL
          </span>
        </div>
      </header>
      <div className="login-page__wrapper">
        <div className="login-page__content">
          <header className="login-page__content__title">
            Login
          </header>
          <header className="login-page__login-form">
            <Field fullWidth type="email" />
            <Field fullWidth />
            <Button fullWidth upperCase>log in</Button>
            <span>Or log in with</span>
          </header>
        </div>
      </div>
    </div>
  )
}