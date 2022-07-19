import React from 'react'
import './App.css'
import useContextMenu from './hooks/useContextMenu'
import { useStore } from './store/store'

function App() {

  const {ContextMenuComponent, handleMousePosition} = useContextMenu()

  const {click, setClick} = useStore()

  const handleOnClick = (e:React.MouseEvent<any>) => {
    setClick(e.currentTarget.name)
  }

  const menuContext = [
    {
      handleOnClick: handleOnClick,
      name: 'Square'
    },
    {
      handleOnClick: handleOnClick,
      name: 'Triangle'
    },
    {
      handleOnClick: handleOnClick,
      name: 'Circle'
    },
    {
      handleOnClick: handleOnClick,
      name: 'Hexagon'
    },
  ]

  return (
    <div onContextMenu={handleMousePosition} className="App grid place-content-center">
      <h1 className='border'>{click}</h1>
      <ContextMenuComponent menuData={menuContext}></ContextMenuComponent>
    </div>
  )
}

export default App
