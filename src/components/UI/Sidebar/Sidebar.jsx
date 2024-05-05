import styled from 'styled-components'
import { Avatar } from 'antd'
import SvgIcon from '../../Common/SvgIcon/SvgIcon'
import BurgerBtn from './components/BurgerBtn/BurgerBtn'

import animoji from '../../../assets/jpg/animoji.jpeg'

const SidebarWrapper = styled.div`
  width: 90px;
  height: 100vh;
  background: rgba(49, 50, 52, 0.25);
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
      <SidebarNav>
        <SidebarList>
          <SidebarListItem style={{ marginTop: 20 }}>
            <BurgerBtn />
          </SidebarListItem>
          <SidebarFooter>
            <SidebarListItem>
              <a href="#">
                <SvgIcon name={'bell'} />
              </a>
            </SidebarListItem>
            <SidebarListItem>
              <a href="#">
                <SvgIcon name={'settings'} />
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
