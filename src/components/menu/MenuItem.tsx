/*eslint-disable @typescript-eslint/no-explicit-any */ 
import Image from 'next/image'
import { formatCurrency } from '@/constants/formatters'

export default function MenuItem({item}: {item: any} ) {
  return (
    <li>
    <div className='relative w-48  h-48 mx-auto'>
       <Image src={item.image} className='object-cover' alt={item.title} fill />
     </div>
          <div className='flex items-center justify-between mb-4'>
              <h4 className='font-semibold text-xl my-3' >{item.title}</h4>
               <strong className='text-accent'>
               {formatCurrency(item.price)}   
              </strong>
          </div>
          <p className='text-gray-500 text-sm line-clamp-3 '>
              {item.description}
           </p>
    </li>
  )
}
