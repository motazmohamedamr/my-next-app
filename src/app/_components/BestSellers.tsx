import MainHeading from '@/components/main-heading'
import Image from 'next/image'
import { formatCurrency } from '@/constants/formatters'

export default function BestSellers() {
    const bestsellers = [
        {
            id: crypto.randomUUID(),
            title: 'pizza',
            image: '/assets/images/images.jpg',
            price: 25.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: crypto.randomUUID(),
            title: 'pasta',
            image: '/assets/images/images.jpg',
            price: 15.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: crypto.randomUUID(),
            title: 'burger',
            image: '/assets/images/images.jpg',
            price: 35.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
    ]
  return (
    <section>
       <div className='container'>
        <div className='text-center mb-4'>
            <MainHeading subTitle={"checkOut"}  title={'OurBestSeller'}/>
        </div>
        
       </div>
    </section>
  )
}
