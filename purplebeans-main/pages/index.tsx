import Head from "next/head";
import { Poppins } from "next/font/google";
import { ChartSwap, Ecosystem, Hero, Roadmap, Tokenomics } from "@/containers";
import { Navbar, Footer } from "@/components";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>PurpleBeans Ecosystem</title>
        <meta
          name="description"
          content=" Stake ,Earn & Play With one stop defi Solution.Trade your favourite Tokens &
          stake to Earn APY.Mint and Mine NFT's and more..🔥"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link />
      </Head>
      <main className={poppins.className}>
        <Navbar />
        <Hero />
        <Tokenomics />
        <Roadmap />
        <Ecosystem />
        <ChartSwap />
        <Footer />
      </main>
    </>
  );
}
