import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainScreen from '../components/MainScreen'
import MyProgect from '../components/MyProgects'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Лабанов Станислав" />
        <meta name="description" content="Сайт портфолио frontend разработчика, здесь находится: информация обо мне,
        а так же мои контакты" />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        <title>Портфолио frontend разработчика | Лабанов Станислав</title>
      </Head>
      <div className='wrapper'>
        <MainScreen />
        <Header />
        <div className='container'>
          <AboutMe />
          <MyProgect />
        </div>
        <Contacts />
        <Footer />
      </div>

    </>
  )
}

export default Home
