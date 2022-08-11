import type { NextPage } from 'next'
import { Link } from "react-scroll"

const MainScreen: NextPage = () => {

   return (
      <div className='main_img'>
         <div className='main_img_img' id='main'>
            <div className='main_img_text'>
               <h1>Здравствуйте, меня зовут<br />
                  <span>Лабанов Станислав.</span><br />
                  Я Frontend разработчик
               </h1>
               <div className='main_img_text_btn'><Link to='about' spy={true}><span>Кликните</span></Link> чтобы узнать больше обо мне</div>
            </div>
         </div>
      </div>
   )
}

export default MainScreen