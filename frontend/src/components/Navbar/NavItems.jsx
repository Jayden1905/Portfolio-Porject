import React from 'react'
import { motion } from 'framer-motion'
import { popUpParent, popUp } from '../../animation'
import { useGlobalContext } from '../Context/ContextProvider'

export default function NavItems({ open, setOpen, setCloseDelay }) {
  const { mouseChangeBackground, mouseDefault } = useGlobalContext()
  const items = [
    { name: 'Home', hash: '#Home' },
    { name: 'About me', hash: '#About' },
    { name: 'Projects', hash: '#Works' },
    { name: 'Skills', hash: '#Skills' },
    { name: 'Contact me', hash: '#Contact' },
  ]

  const closeNavHandler = () => {
    setOpen((prev) => !prev)
    open ? setCloseDelay(true) : setCloseDelay(false)
  }

  return (
    <motion.ul
      className={`nav-menu ${
        open ? ' ' : 'pointer-events-none'
      } absolute top-[120%] sm:left-20 left-10 z-10 flex flex-col gap-4 lg:top-[150%] lg:left-[26rem] lg:gap-10`}
      variants={popUpParent}
      initial='close'
      animate={open ? 'open' : 'close'}
      onMouseEnter={mouseChangeBackground}
      onMouseLeave={mouseDefault}
    >
      {items.map((item, index) => {
        return (
          <motion.div
            key={index}
            onClick={closeNavHandler}
            className='h-full w-[20rem] cursor-pointer overflow-hidden transition-all duration-500 hover:pl-6'
          >
            <motion.li className='transition-all duration-500' variants={popUp}>
              <motion.p
                className={`font-saira text-3xl tracking-wider lg:text-4xl ${item.id}`}
              >
                <a href={item.hash}>{item.name}</a>
              </motion.p>
            </motion.li>
          </motion.div>
        )
      })}
    </motion.ul>
  )
}
