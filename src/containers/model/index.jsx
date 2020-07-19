import React from 'react';
import './style.scss';
import { MailOutlined, FieldTimeOutlined, LockOutlined, StarFilled } from '@ant-design/icons';
import Button from '../../components/button/';
import { Link } from 'react-router-dom';
import EyeIcon from '../../assets/img/eye.svg'

export default function() {

  return(
    <section className="model-page">
      <div className="model-page__content">
        <div className="model-page__left">
          <div className="model-page__view">
            <img src="http://art-master3d.com/image/cache/data/Category/Baget/baget-dlya-chpu-075-1079x606.jpg" />
          </div>
          <div className="model-page__left__main">
            <div className="modal-page__left__viewer-additional"> 
              <h1 className="model-name">
                <span className="model-name__label">Багет 1</span>
                <span className="model-name__type">3D MODEL</span>
              </h1>
              <div className="model-owner__wrapper">
                <div className="model-owner">
                  <Link to='/user/:id'>
                    <img className="model-owner__avatar" src="https://avatarfiles.alphacoders.com/849/thumb-84917.jpg" />
                  </Link>
                  <div className="model-owner__who-i-am">
                    <Link>zOOOOro</Link>
                    <Button>Follow</Button>
                  </div>
                </div>
                <div className="modal-status">
                  <div className="view-helper">
                    <EyeIcon />
                    <p>1.2k</p>
                  </div>
                  <div className="add-helper">
                     <StarFilled />
                    <p>100</p>
                  </div>
                </div>

                <div className="modal-actions">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="model-page__right">
          <div className="model-page__right__price_inf">
            <div className="model-page__right__price">
              <span>$24.99</span>
            </div>
            <ul className="model-page__right__header-inf">
              <li><LockOutlined /><span>Secure payment</span></li>
              <li><MailOutlined /><span>Support from sellers</span></li>
              <li><FieldTimeOutlined /><span>Access to future versions</span></li>
            </ul>
            <Button>ADD TO CART</Button>
            <div className="payment-solution">
              <div className="payment-solution-visa" ></div>
              <div className="payment-solution-master" ></div>
              <div className="payment-solution-paypal" ></div>
            </div>
          </div>
          <div className="model-page__detail-inf">
          </div>
        </div>
      </div>
    </section>
  )
}