import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const Subscribe = () => {
  return (
    <div className='mt-40' >
        <h1 className='text-4xl font-bold text-center'>Subscribe Our Newsletter</h1>
        <p className='mt-6 text-center text-lg'>Get the latest information and promo offers directly</p>
        <div className='mx-96 px-32'>
           <div className="flex w-full max-w-sm items-center space-x-2 py-8">
      <Input type="email" placeholder="Input email address" />
      <Button className='w-48' type="submit">Get Started</Button>
    </div>
    </div>


    </div>
  )
}

export default Subscribe