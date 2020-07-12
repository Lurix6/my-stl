import React, { useState } from 'react';
import Header from '../../components/header';
import Drawer from '../../components/drawer/';
import { Layout } from 'antd';
import { ArrowUpOutlined, ShoppingCartOutlined, SearchOutlined, CodeSandboxOutlined }  from '@ant-design/icons';
import './app.scss';

const SignIn = (props) => {

  const [visible, setVisisble] = useState(false);
  const changeVisible = (open) => setVisisble(open); 

  return (
    <div>
      <Layout>
        <Drawer 
          visible={visible}
          onClose={() => setVisisble(false)} />
      </Layout> 
      <Layout>
        <Header changeVisible={changeVisible} />
        <div className="hero">
          app
        </div>
      </Layout>
    </div>
  )
}

export default  SignIn;