import React from 'react'
import ProductPage from './Item'
import type { Metadata, ResolvingMetadata } from 'next'
import { Products } from '@/lib/MerchData'
import { Footer1 } from '@/components/sections/Footer'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = (await params).id
   
    // fetch data
    const product =  Products.find((product) => product.id === Number(id))
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: `${product?.name} | Parkour Maroc` || 'Product',
      openGraph: {
        images: product?.images[0] ? [product.images[0], ...previousImages] : previousImages,
      },
    }
  }


export default function page() {
  return (<div>
    <ProductPage />
    <Footer1 />
  </div>
  )
}
