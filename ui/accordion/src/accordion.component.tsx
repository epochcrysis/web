import React              from 'react'
import { FC }             from 'react'
import { useAnimation }   from 'framer-motion'
import { motion }         from 'framer-motion'

import { AccordionProps } from './accordion.interface'

const Accordion: FC<AccordionProps> = ({ children, active }) => {
  const controls = useAnimation()

  if (active) {
    controls.start({ height: 'min-content' })
  }

  if (!active) {
    controls.start({ height: 220, overflow: 'hidden' })
  }

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, rgba(35, 35, 38, 0) 0%, #232326 100%)',
      }}
    >
      {children}
    </motion.div>
  )
}

export { Accordion }
