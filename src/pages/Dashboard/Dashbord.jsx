import React from 'react'
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import GeneralPage from '../GeneralPage/GeneralPage';
import Chat from "../../components/UI/Chat/Chat";


const Dashbord = () => {
  return (
    <div>Dashbord
      <div>
        <Sidebar/>
        <GeneralPage/>
        <Chat/>
      </div>
    </div>
  )
}

export default Dashbord