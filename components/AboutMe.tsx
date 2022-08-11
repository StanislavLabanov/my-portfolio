import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import TextAnimations from '../model/textAnimat';
import LeftBlock from '../model/LeftBlockAnimat';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutMe: NextPage = () => {
   const [scroll, setScroll] = useState(false)
   const mySkillsMass = [
      { id: 1, name: 'HTML', progress: '90%' },
      { id: 2, name: 'CSS', progress: '90%' },
      { id: 3, name: 'SASS/SCSS', progress: '90%' },
      { id: 4, name: 'JavaScript', progress: '85%' },
      { id: 5, name: 'React', progress: '80%' },
      { id: 6, name: 'TypeScript', progress: '75%' },
      { id: 7, name: 'Redux Toolkit', progress: '75%' },
      { id: 8, name: 'NextJS', progress: '80%' },
      { id: 9, name: 'Tailwind CSS', progress: '85%' },
   ]

   useEffect(() => {
      document.addEventListener('scroll', heightScroll)
      return function () {
         document.removeEventListener('scroll', heightScroll)
      }
   }, [])

   const heightScroll = () => {
      if (window.pageYOffset > (document.documentElement.scrollHeight * 8) / 100) {
         setScroll(true)
      }
   }

   return (
      <>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className='about' id='about'>
            <motion.h1 variants={TextAnimations}>Обо мне</motion.h1>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.1 }}
               className='about_flex_block'>
               <motion.div variants={LeftBlock} className='about_flex_block_about_me'>
                  <div className='about_flex_block_about_me_photo'></div>
                  <div className='about_flex_block_about_me_text'>
                     <span>Целеустремленный и ответственный frontend разработчик</span>, в
                     свободное время я люблю совершенствовать
                     свои знания и <span>разрабатывать различного вида приложения и сайты. </span>
                     Моя цель - стать <span>Senior
                        разработчиком</span> и применить свои навыки в
                     создания интересных и полезных для
                     человечества проектов. <span>Я командный игрок</span>, легко нахожу
                     общий язык с новыми людьми. Я <span>спокойно
                        реагирую на проблемы</span>, возникающие в процессе
                     разработки, и быстро решаю их. Мой <span>опыт
                        создания небольших приложений с нуля</span> и мое
                     умение выполнять задачи, на мой взгляд, будут
                     очень полезны для удовлетворения технических
                     требований компании.
                  </div>
               </motion.div>
               <motion.div variants={LeftBlock} className='about_flex_block_progress_bar'>
                  <ul>
                     {
                        mySkillsMass.map(el =>
                           <li key={el.id}>
                              <div className='progress_name'>{el.name}</div>
                              <div className={scroll ? 'progress_bar' : 'progress'} style={{ width: el.progress }}></div>
                              <div className='progress_bar_text'>{el.progress}</div>
                           </li>
                        )
                     }
                  </ul>
                  <div className='used_technology'>
                     <div className='used_technology_title'>В разработке так же использую</div>
                     <div className='used_technology_elements'>
                        <div className='used_technology_elements_circle_technology'>
                           <Image src='/github.png' alt='github' />
                        </div>
                        <div className='used_technology_elements_technology_block'>
                           <Image src='/webpack.png' alt='webpack' />
                        </div>
                        <div className='used_technology_elements_circle_technology'>
                           <Image src='/bootstrap.png' alt='bootstrap' />
                        </div>
                        <div className='used_technology_elements_technology_block'>
                           <Image src='/graphql.png' alt='graphql' />
                        </div>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         </motion.div>
      </>
   )
}

export default AboutMe