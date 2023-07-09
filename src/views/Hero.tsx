import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import heroImg from "/public/hero.webp"
import Featured1 from "/public/Featured1.webp"
import Featured2 from "/public/Featured2.webp"
import Featured3 from "/public/Featured3.webp"
import Featured4 from "/public/Featured4.webp"

const Hero = () => {
  return (
   <section className="flex flex-col lg:flex-row gap-y-10 py-6">
<div className="flex-1">
<Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 font-bold text-lg " >Sale 70%</Badge>
<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
An Industrial Take on Streetwear

      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
<Button className="bg-black h-12 px-8 mt-4">Start Shopping</Button>

<div className="mt-48 flex justify-evenly -mx-20 ">
  <Image src={Featured1} alt="Feature 1"/>
  <Image src={Featured2} alt="Feature 2"/>
  <Image src={Featured3} alt="Feature 3"/>
  <Image src={Featured4} alt="Feature 4"/>
  

</div>

</div>



<div className="flex-1">
    <Image src={heroImg} height={575} alt="hero img"/>

</div>

   </section>
  )
}

export default Hero