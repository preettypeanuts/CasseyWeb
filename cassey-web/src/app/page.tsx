import { Banner } from "@/components/Banner"
import { CardHome } from "@/components/CardHome"
import { InfoEcommerce } from "@/components/InfoEcommerce"
import { Navbar } from "@/components/Navbar"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></Script>
      <Navbar>
        <Banner />
        <InfoEcommerce />
        <CardHome/>
      </Navbar>
    </>
  )
}
