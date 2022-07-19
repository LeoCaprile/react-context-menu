import React, { useEffect } from 'react'

function useClickOutSide(ref:React.RefObject<any>,setter:React.SetStateAction<any>) {
  useEffect(() => {
 
    function handleOutsideClick(this: HTMLElement, event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
          setter(false)
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref])}

export default useClickOutSide;