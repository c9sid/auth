"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <main className="p-4 md:p-10">
      <div className="flex-row md:flex justify-center items-center space-y-5">
        <div className="text w-full md:w-1/2 flex flex-col gap-7">
          <div className="heading">
            <h1 className="text-4xl font-semibold text-primary">Heading</h1>
          </div>
          <div className="para text-primary/90">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti natus consequatur modi recusandae itaque incidunt cumque eius eaque quo officia quod deleniti, quisquam officiis iste dolorum. Ullam doloribus voluptates saepe laudantium numquam recusandae repudiandae quaerat vitae, perspiciatis aperiam quia enim repellendus eveniet, sit earum debitis perferendis nisi sunt. Perspiciatis.</p>
          </div>
          <div className="btn flex gap-4">
            <Button variant={"default"}>Click Me!</Button>
            <Button variant={"outline"}>Visit more!</Button>
          </div>
        </div>
        <div className="carusel flex items-center justify-center md:w-1/2">
        {/* <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        loop: true,
      }}
      >
        <CarouselContent>
          <CarouselItem> <Image src={'/slider/image1.png'} alt="slider1" width={1000} height={500} className="w-full rounded-lg" /> </CarouselItem>
          <CarouselItem> <Image src={'/slider/image2.png'} alt="slider1" width={1000} height={500} className="w-full rounded-lg" /> </CarouselItem>
          <CarouselItem> <Image src={'/slider/image3.png'} alt="slider1" width={1000} height={500} className="w-full rounded-lg" /> </CarouselItem>
        </CarouselContent>
      </Carousel> */}
      <Image src={'/slider/chicken.png'} alt="main" width={400} height={400} />
        </div>
      </div>
    </main>
  )
}

export default Home