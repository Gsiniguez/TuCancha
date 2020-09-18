import Head from 'next/head'
import Header from '../Header'

export default function Container(props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-1 flex flex-col justify-center items-center w-full h-full max-w-6xl px-4 mx-auto md:px-8 md:py-16 relative">
        {props.children}
      </main>

      <footer className="bg-gray-300">
        <div className="flex mx-auto border-t justify-center items-center w-full h-full max-w-6xl p-8">
        <a
          href="https://inibotnea.negocio.site/?m=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          Powered by INIBOT
        </a>

        </div>
      </footer>
    </div>
  )
}
