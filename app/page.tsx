"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <main className="p-4 md:p-10">
      <div className="flex-row md:flex justify-center items-center space-y-5">
        <div className="text w-full md:w-1/2 flex flex-col gap-7">
          <div className="heading">
            <h1 className="text-4xl font-semibold text-primary">Learning.</h1>
          </div>
          <div className="para text-primary/90">
            <p>This is a Next.js practice site showcasing features like Clerk login, dark mode, and more. Explore seamless authentication and modern web functionalities designed to enhance user experience and developer skills. This website is like a normal site for a normal user but for developers... ❤️</p>
          </div>
          <div className="btn flex gap-4">
            <Button variant={"default"}>Dummy Button</Button>
            <Link href={'https://www.instagram.com/siddharthkumar____/'}><Button variant={"outline"}>Know me!</Button></Link>
          </div>
        </div>
        <div className="carusel flex items-center justify-center md:w-1/2">
      <Image src={'/slider/chicken.png'} alt="main" width={400} height={400} />
        </div>
      </div>
    </main>
  )
}

export default Home