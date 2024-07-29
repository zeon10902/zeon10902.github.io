import Layout from './components/structural/Layout'
import './App.css'
import { useState } from 'react'
import ThemeContext from './components/contexts/ThemeContext'
import ReactSwitch from 'react-switch'

function App() {

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
      <div className='App' id={theme}>
        <Layout />
        { /*
        <div className='switch'>
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
        */}
      </div>
        
    </ThemeContext.Provider>
  </>
}

export default App
