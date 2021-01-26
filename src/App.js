import './App.css'
import React, { useState } from 'react'
import Github from './components/Github'
import { Layout, Menu } from 'antd'

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import FormComponent from './components/FormComponent'

const { Header, Content, Footer, Sider } = Layout

function App() {
  const [info, setInfo] = useState({
    data: [],
    remote: false,
    fulltime: false,
    query: `https://jobs.github.com/positions.json?`,
    description: 'developer',
    location: 'remote',
  })

  return (
    <div className='app'>
      <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
            <Menu.Item key='1' icon={<UserOutlined />}>
              All
            </Menu.Item>
            <Menu.Item key='2' icon={<VideoCameraOutlined />}>
              Github
            </Menu.Item>
            <Menu.Item key='3' icon={<UploadOutlined />}>
              Github Developer
            </Menu.Item>
            <Menu.Item key='4' icon={<UserOutlined />}>
              Github Designer/User
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* ************************** */}

          <Header
            className='site-layout-sub-header-background'
            style={{ padding: 0 }}
          >
            <h1>Header :: Develper Jobs</h1>
          </Header>

          {/* *********************** */}
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              <FormComponent info={info} setInfo={setInfo} />
              <Github info={info} setInfo={setInfo}></Github>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <span>
              Designed and developed:
              <a href='https://github.com/LimoVincent'>Vincent Limo</a>
            </span>
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
