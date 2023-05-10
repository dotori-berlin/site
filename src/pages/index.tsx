import Layout from "@/components/layout"
import MainBox from "@/components/main"
import Navbar from "@/components/navbar"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Dotori Berlin</title>
        <meta name="Dotori Berlin" content="Dotori Berlin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <MainBox />
      </Layout>
    </>
  )
}
