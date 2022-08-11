import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Link } from "react-scroll"

const Header: NextPage = () => {

   const [fixed, setFixed] = useState(false)

   useEffect(() => {
      document.addEventListener('scroll', scrollHendler)

      return function () {
         document.removeEventListener('scroll', scrollHendler)
      }
   }, []);

   const scrollHendler = () => {
      const minHeigth = (window.pageYOffset / 100)

      if (window.pageYOffset + minHeigth > document.documentElement.clientHeight) {
         setFixed(true)
      } else setFixed(false)
   }

   return (
      <>
         {
            fixed && <div className='zamena_header'></div>
         }
         <header className={fixed ? 'header fixed' : 'header'}>
            <div className='header_container'>
               <nav>
                  <ul>
                     <Link to='main' spy={true}><li>Главная</li></Link>
                     <Link to='about' spy={true}><li>Обо мне</li></Link>
                     <Link to='progects' spy={true}><li>Портфолио</li></Link>
                     <Link to='contacts' spy={true}><li>Контакты</li></Link>
                  </ul >
               </nav >
            </div >
         </header >
      </>
   )
}

export default Header