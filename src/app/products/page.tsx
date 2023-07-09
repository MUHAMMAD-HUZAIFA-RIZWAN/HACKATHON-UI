import { Products } from "@/utils/mockup";
import Card from "@/components/ui/Card";
import { StaticImageData } from "next/image";


const AllProducts = () => {
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
    {Products.map((product) => (
      <Card 
        key={product.id}
        title={product.name}
        price={product.price}
        img={product.image as StaticImageData}
        category={product.category}
        id={product.id}
      />
    ))}
  </div>
);
  
}

export default AllProducts;