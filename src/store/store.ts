import create from "zustand";

interface Set {
    click: string
    setClick: (payload:string) => void
}
  

export const useStore = create<Set>((set)=>({
    click: '',
    setClick: (payload:string) => set(state => ({...state, click: payload}))
}))