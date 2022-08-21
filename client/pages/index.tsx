import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
import react from 'react'


const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-gradient-to-r from-gray-900 via-purple-900 to-stone-900 text-white select-none flex flex-col justify-between`,

}



const Home: NextPage = () => {
  return (
    <div className={style.wrapper} >
      
      <Header />
      <Main />
      <TransactionHistory />

    </div>
  )
}

export default Home