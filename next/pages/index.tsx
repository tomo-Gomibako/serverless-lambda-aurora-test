import Head from 'next/head'

import Default from '@/layouts/dafault'

// import styles from '@/styles/pages/Home.module.css'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <Default>
        <div>
          Hello, World!
        </div>
      </Default>
    </div>
  )
}

export default HomePage
