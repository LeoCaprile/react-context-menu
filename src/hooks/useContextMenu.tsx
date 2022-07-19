import { FC, useRef, useState } from "react"
import useClickOutside from './useClickOutside'

interface IContextMenu {
  setHideMenu: Function
  mousePos:{x:number, y:number}
  hideMenu:boolean
  menuData:IMenuItem[]
}

interface IMenuItem {
  handleOnClick:(e: React.MouseEvent<HTMLButtonElement>) => void
  name: string
}

const ContextMenu = ({ setHideMenu, mousePos, hideMenu, menuData }:IContextMenu) => {

  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(menuRef, setHideMenu);

  const handleMenuClicked = (e: React.MouseEvent<HTMLButtonElement>) =>{
    console.log(e.currentTarget.name)
  }

  return (
  <div ref={menuRef} className='grid grid-flow-row bg-slate-600 absolute' style={{top: mousePos.y, left:mousePos.x, display:`${hideMenu?'':'none'}`}}>
      
      {menuData.map((menuItem)=><button onClick={menuItem.handleOnClick} name={menuItem.name} className='text-2xl text-left bg-slate-600 border-b px-5 py-2 hover:bg-slate-500 hover:cursor-default'>
      {menuItem.name}
      </button>)}
      
  </div>
  )

}

export default function useContextMenu() {

  const [mousePos, setMousePos] = useState({x:0,y:0});
  const [hideMenu, setHideMenu] = useState<boolean>(false)

  const handleMousePosition = (e: React.MouseEvent<any>) => {
    e.preventDefault()
    const mousePosY:number = e.clientY
    const mousePosX:number = e.clientX
    console.log(mousePosY, mousePosX)
    setMousePos({x:mousePosX, y:mousePosY});
    setHideMenu(true)
  }

 const ContextMenuComponent = (props:any) => (<ContextMenu menuData={props.menuData} setHideMenu={setHideMenu} mousePos={mousePos} hideMenu={hideMenu}/>)

  return {ContextMenuComponent, handleMousePosition}
}

