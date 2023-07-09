"use client"
import { useSelector} from "react-redux";
import { RootState } from "@/store/store";
import logo from "/public/logo.webp"
import Image from "next/image"
import Link from "next/link"
import {ShoppingCart} from "lucide-react"
const Header = () => {
  const cartValue = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Link href={"/"}>
     <Image src={logo} alt="logo" className="w-40" />
     </Link>

     <ul className="flex gap-x-10">
        <li className="text-lg">
           <Link href={"/category/Female"}>
            Female
            </Link> 
            </li>
        <li className="text-lg">
            <Link href={"/category/Male"}>
            Male
            </Link>
            </li>
        <li className="text-lg">
            <Link href={"/category/Kids"}>
            Kids
            </Link>
            </li>
            
        <li className="text-lg">
            <Link href={"/products"}>
            All Products
            </Link>
            </li>
     </ul>
     <input className="border-black border-solid border-4" type="input" placeholder="search product" />
     <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative"> 
     <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-xs text-center">{cartValue}</span>

     <ShoppingCart className="h-7 w-7" />
     </div>
     
    </div>
  )
}

export default Header