import { Products } from "@/utils/mockup";
import Card from "@/components/ui/Card";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Quantity from "@/components/Quantity";
import AddToCart from "@/components/ui/AddToCart";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};
const sizes=["xs","sm","md","lg","xl"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className="flex  mt-16 py-10 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          <div>
            <Image src={product.image} alt={product.name} />
          </div>

          <div>
            <div>
              <h1 className="text-2xl ">{product.name}</h1>
              <h2 className="text-base text-gray-400 font-semibold">
                {product.tagline}
              </h2>
            </div>

            <div>
              <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
               {/* Sizes */}
              <div className="flex gap-x-3">
              {sizes.map((item)=>{
                  return(
                    
                    <div className="h-6 w-6 duration-300 rounded-full hover:shadow-xl border mt-2 flex justify-center items-center">
                    <span className="text-[10px] font-semibold text-center text-gray-600 ">{item}</span>
   
                 </div>
                  )
                })
              }
              </div>
              {/* Quantity */}
              <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[10px] font-semibold">Quantity</h3>
                <Quantity/>
              </div>
            
              {/* Add To Cart */}
              <div className="mt-5 flex items-center gap-x-3">
              <AddToCart/>
              <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
