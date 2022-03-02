import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14'>
      <div className='col-span-12 bg-white rounded-2xl flex flex-col'>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
