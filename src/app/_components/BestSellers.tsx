import MainHeading from '@/components/main-heading'
import Image from 'next/image'
import { formatCurrency } from '@/constants/formatters'
import Menu from '@/components/menu'
import { db } from "@/lib/prisma";


export default async function BestSellers() {
    const bestsellers = [
        {
            id: crypto.randomUUID(),
            title: 'pizza',
            image: '/assets/images/pizzeria-template-header-pizza-img.png',
            price: 25,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: crypto.randomUUID(),
            title: 'pasta',
            image: '/assets/images/patrona-supreme.webp',
            price: 15,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: crypto.randomUUID(),
            title: 'burger',
            image: '/assets/images/carneasadaWebp.webp',
            price: 35.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
    ]
    const sizes = await db.Size.create({
        data: {
            name: "SMALL",
            price: 0,
            productId: '1'
        },
    });
     console.log(sizes);
  return (
    <section>
       <div className='container'>
        <div className='text-center mb-4'>
            <MainHeading subTitle={"checkOut"}  title={'OurBestSeller'}/>
        </div>
         <Menu items={bestsellers}/>
       </div>
    </section>
  )
}
