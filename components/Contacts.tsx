import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import TextAnimations from '../model/textAnimat';
import Form from './Form';

const Contacts: NextPage = () => {

   return (
      <div className='contacts' id='contacts'>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={TextAnimations}
            className='contacts_container'>
            <motion.h1>Контакты</motion.h1>
            <motion.div className='contacts_container_text'>У вас есть вопрос или вы хотите работать вместе?</motion.div>
            <Form />
         </motion.div>
      </div>
   )
}

export default Contacts