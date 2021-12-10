import Head from 'next/head'
import Footer from './footer'
import Header from './header'
import Main from './main'

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
