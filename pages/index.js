import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Create Next App</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main>
        <Sidebar />
      </main>
      <div>{/*player*/}</div>
    </div>
  )
}
