import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import TextAnimations from '../model/textAnimat';
import LeftBlock from '../model/LeftBlockAnimat';

const MyProgects: NextPage = () => {

   const myworks = [
      {
         id: 1,
         url: 'https://github.com/StanislavLabanov/test-task-for-scandiweb',
         photo: '/screenshot-localhost-3000-2022-08-08-01-20-22-991.png',
         text: 'Тестовое задание для компании ScandiWeb на React'
      },
      {
         id: 2,
         url: 'https://github.com/StanislavLabanov/test-site-with-authorization',
         photo: '/screenshot-localhost-3000-2022-08-08-01-15-54-113.png',
         text: 'Небольшое приложение с авторизацией на React/Typescript'
      },
      {
         id: 3,
         url: 'https://github.com/StanislavLabanov/my-progect-calendar',
         photo: '/screenshot-localhost-3000-2022-08-08-01-31-45-615.png',
         text: 'Календать с аворизацией и возможность добавлять заметки на React/Redux'
      }
   ]

   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.1 }}
         className='progects' id='progects'>
         <motion.h1 variants={TextAnimations}>Мои работы</motion.h1>
         {
            myworks.map(el =>
               <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={LeftBlock} className='progects_progect_block' key={el.id} style={{ backgroundImage: `url(${el.photo})`, backgroundSize: 'cover' }}>
                  <a href={el.url} target="_black"><div className='progects_progect_block_text'>{el.text}</div></a>
               </motion.div>
            )
         }
      </motion.div>
   )
}

export default MyProgects