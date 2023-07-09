import React from "react";
import event1 from "/public/event1.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import event2 from "/public/event2.webp";
import event3 from "/public/event3.webp";


const Promotions = () => {
  return (
    <div className="mt-16">
      <h1 className="text-sm text-center font-semibold text-blue-600">
        PROMOTIONS
      </h1>
      <h2 className="text-3xl font-bold text-black text-center mt-6">
        Our Promotions Events
      </h2>

      <div className="flex">

        <div className="h-fit">
 
        <div className="bg-gray-200  w-4/5 h-1/3  mt-6  ">
        
            
        <h2 className="text-2xl font-bold mx-10   ">GET UP TO 60%</h2>
        <p className="text-sm font-medium mx-10 ">For the summer season</p>
          <Image className="mx-80" height={145} src={event1} alt="event-1" />
          </div>
          

           <div className="bg-black   w-4/5 h-1/3  mt-6">
      
       <div className="py-10">     
        <h2 className="text-3xl font-bold text-white text-center    ">GET 30% Off</h2>
        <p className="text-sm font-medium text-white text-center mt-3 ">USE PROMO CODE</p>
       
        <Button className="bg-gray-700 h-16 mt-1 px-8   mx-60 text-bold text-white">DINEWEEKEND SALE</Button>
        </div>
        </div>
        </div>
        {/* VERTICAL MODEL PIC 1 */}

        <div className="flex ">
     
        <div className="bg-amber-100  w-72 h-fit px-6 py-6 mt-6 mx-4  resize-y">
       
            
        <h2 className="text-xl    ">Flex Sweatshirt</h2>
        <div className="flex">
        <p className="text-sm font-medium  line-through ">$100.00 </p>
        <p className="text-lg  mx-4 font-bold  ">$75.00 </p>
          </div>
          <Image className="mt-6 justify-center " src={event2}  alt="event-2" />
           </div>
          
         {/* VERTICAL MODEL PIC 2 */}

         <div className="bg-gray-200  w-72 h-fit px-6 py-6 mt-6 mx-4  resize-y">
       
            
       <h2 className="text-xl     ">Flex Push Button Bomber</h2>
       <div className="flex">
       <p className="text-sm font-medium  line-through ">$225.00 </p>
       <p className="text-lg mx-4 font-bold  ">$190.00 </p>
         </div>
         <Image className="mt-6 justify-center " src={event3}  alt="event-3" />
          </div>
          </div>
          </div>

    </div>
  );
};

export default Promotions;

