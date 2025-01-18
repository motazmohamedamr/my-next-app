'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@radix-ui/react-label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { formatCurrency } from '@/constants/formatters'
import { Checkbox } from '../ui/checkbox'


 
const sizes = [
    {id:crypto.randomUUID(),name:'Small', price: 0},
    {id:crypto.randomUUID(),name:'Medium', price: 4},
    {id:crypto.randomUUID(),name:'Large', price: 8},
]
const extras = [
    {id:crypto.randomUUID(),name:'Chess', price: 0},
    {id:crypto.randomUUID(),name:'Onion', price: 4},
    {id:crypto.randomUUID(),name:'Tomato', price: 8},
]
export default function AddToCartButton({item}: {item: any}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  type='button' size={'lg'} className='mt-4 text-white rounded-full !px-8'>Add To Card</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className='flex items-center'>
          <Image src={item.image} alt={item.title} width={200} height={200} />
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription className='text-center'>
            {item.description}
          </DialogDescription>
        </DialogHeader>
         <div className='space-y-10'>
            <div className='space-y-4 text-center'>
                <Label htmlFor='pick-size'>Pick Your Size</Label>
                <PickSize  sizes={sizes} item={item}/>
            </div>
            <div className='space-y-4 text-center'>
            <Label htmlFor='add-extra'>Any Extra?</Label>
                
                <Extras extras={extras}  />
            </div>
         </div>
        <DialogFooter>
          <Button type="submit"  className='w-full h-10'>Add To Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}





 function PickSize({sizes , item}:{sizes:any , item:any}) {
  return (
    <RadioGroup defaultValue="comfortable">
        {sizes.map(size =>(
              <div key={size.id} className="flex items-center space-x-2 border border-gray-100 rounded-md p-4">
              <RadioGroupItem value="default" id={size.id} />
              <Label htmlFor={size.id}>{size.name} {formatCurrency(size.price + item.price)}</Label>
             
            </div>
        ))}
      
      
    </RadioGroup>
  )
}
function Extras({extras , item}:{extras:any , item:any}) {
    return (
           extras.map(extra =>(
            <div key={extra.id} className="flex items-center space-x-2 border border-gray-100 rounded-md p-4">
            <  Checkbox id={extra.id} />
            <Label
              htmlFor={extra.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {extra.name} {formatCurrency(extra.price)}
            </Label>
          </div>
           ))
        
    )
  }

