import React from 'react'
import Image from 'next/image'
import feature from "/public/feature.webp"
import { Button } from "@/components/ui/button"

const Materialinfo = () => {
  return (
    <div className='flex mt-10'>
        {/* Left Side div */}
        <div className='flex'>

        <div className='mt-16'>
            <h1 className='text-xl font-bold'>Using Good Quality </h1>
            <h2 className='text-xl font-bold'>Materials</h2>
            <p className='mt-4'>Lorem ipsum dolor sit </p>
            <p>amt, consectetur </p>
            <p>adipiscing elit.</p>

            <h1 className='text-xl font-bold mt-12'>Modern Fashion </h1>
            <h2 className='text-xl font-bold'>Design</h2>
            <p className='mt-4'>Lorem ipsum dolor sit </p>
            <p>amt, consectetur </p>
            <p>adipiscing elit.</p>
        </div>

        <div className='mt-16'>
            <div className='px-12'>
            <h1 className='text-xl font-bold'>100% Handmade </h1>
            <h2 className='text-xl font-bold'>Products</h2>
            <p className='mt-4'>Lorem ipsum dolor sit </p>
            <p>amt, consectetur </p>
            <p>adipiscing elit.</p>
            </div>

            <div className='px-12'>

            <h1 className='text-xl font-bold mt-12'>Discount for Bulk Orders </h1>
            <h2 className='text-xl font-bold'>Design</h2>
            <p className='mt-4'>Lorem ipsum dolor sit </p>
            <p>amt, consectetur </p>
            <p>adipiscing elit.</p>
        </div>
        </div>
        </div>
        {/* Right Side Div */}
        <div className='flex'>
        <div className='mt-6'>
            <Image src={feature} alt='feature ' />
            
        </div>
        <div className='mt-6 text px-10'>
            <p>This piece is ethically crafted in our  </p>
            <p>small family-owned workshop in</p>
            <p>Peru with unmatched attention to</p>
            <p>detail and care. The Natural color is</p>
            <p>the actual natural color of the fiber,</p>
            <p>undyed and 100% traceable.</p>
            <Button className="bg-black h-12 px-8 mt-8">See All Product</Button>
        </div>
        </div>
       


    </div>
  )
}

export default Materialinfo