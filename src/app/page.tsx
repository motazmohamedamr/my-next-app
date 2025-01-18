import { Button } from "@/components/ui/button";
import Hero from "./_components/hero";
import BestSellers from "./_components/BestSellers";
import { db } from "@/lib/prisma";

export default async function Home() {
  console.log('hello ya motaz')
  const products = await db.product.findMany();
  console.log(products)
  return (
    <main>
       
       {/* <Button> hello </Button> */}
       <Hero/>
        <BestSellers/>
    
    </main>
  );
}
