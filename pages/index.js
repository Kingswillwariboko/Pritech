import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'

import style from "../styles/home.module.scss"

const Home = () => {
  return (
    <div className='style.home'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Hero />
        <Services />
      </div>

    </div>
  )
}

export default Home
