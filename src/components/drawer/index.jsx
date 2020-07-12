import React from 'react';
import { Drawer } from 'antd';

const DrawerL = (props) => {
  const { placement } = props;

  return  (
    <Drawer { ...props } closable={true} placement={ placement }  />
  )
}

DrawerL.defaultProps= {
  placement: 'left',
}
export default  DrawerL;