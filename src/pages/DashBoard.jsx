import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSideBar , SmallSideBar , NavBar } from '../components'

const DashboardContext = createContext();


const DashBoard = ({ isDarkThemeEnable } ) => {

  const user = {
    name: "Ankit"
  }

  const [showSidebar , setSidebar] = useState(false);
  const [isDarkTheme , setIsDarkTheme] = useState(isDarkThemeEnable);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme' , newDarkTheme);
    localStorage.setItem('darkTheme' , newDarkTheme);
  }

  const toggleSidebar = () => {
    setSidebar(!showSidebar);
  }

  const logoutUser = async() => {
    console.log();
  }

  return (
    <DashboardContext.Provider
    value={{user , showSidebar , isDarkTheme , toggleDarkTheme , toggleSidebar , logoutUser}}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSideBar/>
          <BigSideBar/>
          <div>
            <NavBar/>
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
     </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashBoard
