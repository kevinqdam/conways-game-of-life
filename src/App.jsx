import React from 'react';
import { Layout } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import Grid from './components/Grid';

import 'antd/dist/antd.css';
import styles from './App.module.scss';

const { Footer, Content } = Layout;

const App = () => (
  <Layout>
    <Content>
      <Grid />
    </Content>
    <Footer>
      <div className={styles['footer-items']}>
        <p>Conway&apos;s Game of Life © 2021 Created by Kevin Dam</p>
        <a
          className={styles['anchor-color']}
          href="#"
        >
          <GithubFilled className={styles.icon} />
        </a>
      </div>
    </Footer>
  </Layout>
);

export default App;
