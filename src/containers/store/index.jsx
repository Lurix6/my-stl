import React, { Fragment } from 'react';
import HeroContainer from '../../components/heroContainer/'
import './style.scss'

const StorePage = () => {
  const title = 'The way to buy 3D models';
  const subTitle = 'High-quality 3D models for VFX, game development, VR/AR, architecture, and animation.'

  return (
    <>
      <HeroContainer title={ title } subTitle={ subTitle } />
      <div className='store-navbar' >
        <div className="store-navbar__menu">
          <ul>
            <li><span>Багети</span></li>
            <li><span>Балясини</span></li>
            <li><span>Двері</span></li>
            <li><span>Декор</span></li>
            <li><span>Декор угловий</span></li>
            <li><span>Ікони</span></li>
            <li><span>Капітель</span></li>
            <li><span>Кронштейни</span></li>
            <li><span>Мебель</span></li>
            <li><span>Рамки</span></li>
            <li><span>Розетки</span></li>
            <li><span>Фасади</span></li>
          </ul>
        </div>  
      </div>
      <div className="store-categories-models">
        <div className="store-categories-item">
          <div className="store-categories-item__header" >
            Багети
          </div>
          <div className="store-categories-item__content" >
            <div className="store-categories-item__cart">
              <div className="cart-content__image">
                <img src="https://lh3.googleusercontent.com/proxy/KcFN0uG1bE_b6bJBUy6SfeN89LTFj91kJiKFCycTsgg91P5FetnTcFnGEEMAv-8ysR6cqdTwuGad_v3BHV5-LxT4UEykt-fMPdbg7lXzsPxAam055EK0HykOKWkPfJXguhVzF0O6TyqKkG7FEY3tCIceSVo" />
              </div>
              <div className="cart-content__text">
                <div className="cart-content__description">
                  Багет 1
                </div>
                <div className="cart-content__price">
                 10 ?
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="store-categories-item">
          <div className="store-categories-item__header" >
          Балясини
          </div>
          <div className="store-categories-item__content" >
            <div className="store-categories-item__cart">
              <img src="https://lh3.googleusercontent.com/proxy/KcFN0uG1bE_b6bJBUy6SfeN89LTFj91kJiKFCycTsgg91P5FetnTcFnGEEMAv-8ysR6cqdTwuGad_v3BHV5-LxT4UEykt-fMPdbg7lXzsPxAam055EK0HykOKWkPfJXguhVzF0O6TyqKkG7FEY3tCIceSVo" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StorePage;