import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import StorePage from '../store/';

const routes = [
  {
    path: 'store',
    component: StorePage 
  },
  {
    path: 'prepareModel',
    component: () => <div> Підготувати модель </div> 
  },
  {
    path: 'sell',
    component: () => <div>Продати модуль</div> 
  }
];

export default function AppRouter(props) {
  const { url, style, claims } = props;

  return (
    <div className="scrollBox" >
      <Switch>
        {
          routes.map(singleRoute => {
            const { path, exact, component: Component, ...otherProps } = singleRoute;
            return (
              <Route
               {...otherProps}
              exact={exact}
              key={singleRoute.path}
              path={ `/${path}` }
              render={ props => <Component { ...props } /> }
            />
            )
          })
        }
      </Switch>
    </div>
  )
}