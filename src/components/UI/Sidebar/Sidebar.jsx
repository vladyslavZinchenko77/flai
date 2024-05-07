import styled from 'styled-components'
import { Avatar } from 'antd'
import { SettingFilled, BellFilled } from '@ant-design/icons'
import ColapseBtn from './components/BurgerBtn/ColapseBtn'
import BurgerBtn from './components/BurgerBtn/BurgerBtn'

import animoji from '../../../assets/jpg/animoji.jpeg'

const SidebarWrapper = styled.div`
  position: fixed;
  width: 90px;
  height: 100vh;
  background: linear-gradient(0deg, #212122 0%, #000000 100%);
  backdrop-filter: blur(100px);
`
const SidebarNav = styled.nav``
const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
`
const SidebarListItem = styled.li`
  margin-bottom: 10px;
  .sidebar-link-icon {
    font-size: 26px;
    color: #8d9095;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      color: #ffffff;
    }
  }
`
const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;
`

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <ColapseBtn />
      <SidebarNav>
        <SidebarList>
          <SidebarListItem style={{ marginTop: 20 }}>
            <BurgerBtn />
          </SidebarListItem>
          <SidebarFooter>
            <SidebarListItem>
              <a href="#" className="sidebar-link-icon">
                <BellFilled />
              </a>
            </SidebarListItem>
            <SidebarListItem>
              <a href="#" className="sidebar-link-icon">
                <SettingFilled />
              </a>
            </SidebarListItem>
            <SidebarListItem>
              <a href="#">
                <Avatar src={animoji} style={{ width: 50, height: 50 }} />
              </a>
            </SidebarListItem>
          </SidebarFooter>
        </SidebarList>
      </SidebarNav>
    </SidebarWrapper>
  )
}

export default Sidebar
