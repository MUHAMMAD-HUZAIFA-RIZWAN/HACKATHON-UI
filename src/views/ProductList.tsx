import Card from "@/components/ui/Card"
import P1 from "/public/P1.png"
import P2 from "/public/P2.webp"
import P3 from "/public/P3.png"
import { Products } from "@/utils/mockup"
import { StaticImageData } from "next/image";
import { Product } from "@/utils/types"


const ProductList = () => {
  const productChecks=Products.slice(0,3);
 
  
  return (
    <div className="mt-16">

<h1 className="text-sm text-center font-semibold text-blue-600">
PRODUCTS
      </h1>
      <h2 className="text-3xl font-bold text-black text-center mt-6">
      Check What We Have
      </h2>
    <div className="flex justify-evenly mt-16 py-10">
      
      {productChecks.map((product) => (
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
    <div className="text-4xl font-bold text-center mt-20">
     <h1>Unique and Authentic  </h1>
     <h2>Vintage Designer</h2>
     <h3>Jewellery</h3>
    </div>
    </div>
  );
};

export default ProductList;



 {/* <Card title="SweatShirt" price={150} img={P1}/>
        <Card title="Tie Dress" price={300} img={P2}/>
        <Card title="Jacket" price={500} img={P3}/> */}
