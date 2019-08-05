import { createContext } from 'react'
import { Sticky } from './Sticky'

export const StickyContext = createContext<Sticky>(new Sticky())
export const { Provider, Consumer } = StickyContext
