import React from 'react';
import './header';
import Button from '../button/';
import { Link } from "react-router-dom";
import Field from '../field/';
import Popover from '../popover/';
import { ArrowUpOutlined, ShoppingCartOutlined, SearchOutlined, CodeSandboxOutlined, MenuOutlined }  from '@ant-design/icons';

function Header({ changeVisible }) {

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-mobile-menu" onClick={ changeVisible } >
          <MenuOutlined />
        </div>
        <div className="logo-container">
          <CodeSandboxOutlined width={35} height={35} />
          <div className="logo-container">
            <span className="logo-text">
              MY STL
            </span>
          </div>
        </div>
        <ul className="navigator">
          <li>
            <Link to="/prepareModel">Готова модель</Link>
          </li>
          <li>
            <Link to="/store">Купити модель</Link>
          </li>
          <li>
            <Link to="/sell">Продати модель</Link>
          </li>
        </ul>
        <div className="search-container">
            <Field placeholder="Search 3D models" icon={<SearchOutlined width={20} height={20} />} fullWidth />
          </div>
        <div className="right-container">
          <div className="icon-container search-icon">
            <SearchOutlined width={20} height={20} />
          </div>
          <div className="icon-container">
            <ShoppingCartOutlined width={20} height={20}  />
          </div>
          <Button id="header--login-btn" ghost>
            LOGIN
          </Button>
          <Button id="header--sign-up-btn" upperCase >
            Sign Up
          </Button>
          <Button id="header--upload-btn" upperCase icon={<ArrowUpOutlined />} type='secondary' >
            Upload
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header;