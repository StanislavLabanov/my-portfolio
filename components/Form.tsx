import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import LeftBlock from '../model/LeftBlockAnimat';
import { ChangeEvent, FormEvent, useState } from 'react';

const Form: NextPage = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [texterea, setTexterea] = useState('')
   const [nameDirty, setNameDirty] = useState(false)
   const [emailDirty, setEmailDirty] = useState(false)
   const [nameError, setNameError] = useState('Некорректное имя')
   const [emailError, setEmailError] = useState('Некорректный Email')

   const [subName, setSubName] = useState(false)
   const [subEmail, setSubEmail] = useState(false)

   const [trueFetch, setTrueFetch] = useState(false)


   const submitHendler = (e: FormEvent) => {
      e.preventDefault()
      setName('')
      setEmail('')
      setTexterea('')
      setSubName(false)
      setSubEmail(false)
      setTrueFetch(true)
   }

   const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)

      if (e.target.value.length < 2) {
         setNameDirty(true)
         setSubName(false)
         setTrueFetch(false)
      } else {
         setNameDirty(false)
         setSubName(true)
         setTrueFetch(false)
      }

   }

   const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)

      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!re.test(String(e.target.value).toLowerCase())) {
         setEmailDirty(true)
         setSubEmail(false)
         setTrueFetch(false)
      } else {
         setEmailDirty(false)
         setSubEmail(true)
         setTrueFetch(false)
      }
   }

   return (
      <>
         <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={LeftBlock}
            onSubmit={(e) => submitHendler(e)}
         >
            <div className='name_input'>
               <input type="name" placeholder='Введите ваше имя' value={name} onChange={(e) => nameChangeHandler(e)} />
               {
                  nameDirty && <div className='error_name'>{nameError}</div>
               }
            </div>
            <div className='email_input'>
               <input type="email" placeholder='Введите ваш email' value={email} onChange={(e) => emailChangeHandler(e)} />
               {
                  emailDirty && <div className='error_email'>{emailError}</div>
               }
            </div>
            <textarea placeholder='Введите текст' value={texterea} onChange={e => setTexterea(e.target.value)} />
            <div className='submit_input'>
               <input type="submit" value={subName && subEmail ? 'Отправить' : 'Чтобы отправить форму заполните поля'} disabled={subName && subEmail ? false : true} />
               {
                  trueFetch && <div className='fetch_true'>Ваше сообщение успешно отправлено</div>
               }
            </div>
         </motion.form>
      </>
   )
}

export default Form