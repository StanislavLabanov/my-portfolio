import type { NextPage } from 'next'
import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { TbChevronsUp } from "react-icons/tb";
import { Link } from "react-scroll"
import { motion } from 'framer-motion';
import LeftBlock from '../model/LeftBlockAnimat';

const Footer: NextPage = () => {
   return (
      <motion.footer
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
      >
         <div className='footer_container'>
            <div className='messenges'>
               <IconContext.Provider value={{ className: "icons" }}>
                  <a href='https://www.instagram.com/_labanov_stasik/' target="_blank" rel="noopener noreferrer"><div className='cont_messenge'><FaInstagram /></div></a>
                  <a href='https://rabota.by/resume/5a05b94cff09ca34d10039ed1f38774f4f3871' target="_blank" rel="noopener noreferrer"><div className='cont_messenge'><FaEnvelope /></div></a>
                  <a href='https://vk.com/id147815273' target="_blank" rel="noopener noreferrer"><div className='cont_messenge'><FaVk /></div></a>
                  <a href='https://t.me/StasLabanov' target="_blank" rel="noopener noreferrer"><div className='cont_messenge'><FaTelegram /></div></a>
               </IconContext.Provider>
            </div>
            <div className='footer_container_text'>©Автор сайта frontend developer Лабанов Станислав </div>
         </div >
         <motion.div className='footer_up_click'
            variants={LeftBlock}
         >
            <Link to='main' spy={true}>
               <IconContext.Provider value={{ className: "btn_up" }}>
                  <TbChevronsUp />
               </IconContext.Provider>
            </Link>
         </motion.div>
      </motion.footer >
   )
}

export default Footer