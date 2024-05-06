import React from 'react'
import Sidebar from '../../components/UI/Sidebar/Sidebar'
import GeneralPage from '../GeneralPage/GeneralPage'
import { Chat } from '../../components/Common/Chat/Chat'
import Flex from '../../components/Common/Flex/Flex'

const Dashbord = () => {
  return (
    <Flex alignItems={'flex-start'}>
      <Sidebar />
      <GeneralPage />
      <Chat />
    </Flex>
  )
}

export default Dashbord
