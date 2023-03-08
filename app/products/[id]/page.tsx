'use client'

import { useState, useEffect } from 'react'
import swell from '../../../lib/swell'

function ProductDescription({ description }: { description: any }) {
    return <span dangerouslySetInnerHTML={{ __html: description }} />
}

async function getProduct(id: string) {
    return await swell.products.get(id, {})
}

export default function Item({ params }: { params: { id: string }}) {
    const [product, setProduct] = useState<swell.Product>()

    useEffect(() => {
        getProduct(params.id)
            .then((product) => { setProduct(product) })
    }, [])

    if(!product) {
        return <div>LOADING...</div>
    }

    return (
        <>
            <main className="w-full flex flex-col lg:flex-row">
                <section className="h-fit flex-col gap-8 mt-16 sm:flex sm:flex-row sm:gap-4 sm:h-full sm:mt-24 sm:mx-2 md:gap-8 md:mx-4 lg:flex-col lg:mx-0 lg:mt-36">
                    <picture className="relative flex items-center bg-orange sm:bg-transparent">
                        <button className="bg-sativa-purple w-10 h-10 flex items-center justify-center pr-1 rounded-full absolute left-6 z-10 sm:hidden" id="previous-mobile">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        { product?.images && (
                            <img
                                src={ product.images[0].file?.url }
                                alt={ product.name }
                                className="block sm:rounded-xl xl:w-[70%] xl:rounded-xl m-auto pointer-events-none transition duration-300 lg:w-3/4 lg:pointer-events-auto lg:cursor-pointer lg:hover:shadow-xl"
                                id="hero"
                            />
                        )}
                        <button className="bg-sativa-purple w-10 h-10 flex items-center justify-center pl-1 rounded-full absolute right-6 z-10 sm:hidden" id="next-mobile">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </picture>
                    <div className="thumbnails hidden justify-between gap-4 m-auto sm:flex sm:flex-col sm:justify-start sm:items-center sm:h-fit md:gap-5 lg:flex-row">
                        <div id="1" className="w-1/5 cursor-pointer rounded-xl sm:w-28 md:w-32 lg:w-[72px] xl:w-[78px] ring-active">
                            <img
                                src="./images/image-product-1.jpg"
                                alt="thumbnail"
                                className="rounded-xl hover:opacity-50 transition active"
                                id="thumb-1"
                            />
                        </div>
                        <div id="2" className="w-1/5 cursor-pointer rounded-xl sm:w-28 md:w-32 lg:w-[72px] xl:w-[78px]">
                            <img
                                src="./images/image-product-2.jpg"
                                alt="thumbnail"
                                className="rounded-xl hover:opacity-50 transition"
                                id="thumb-2"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full p-6 lg:mt-36 lg:pr-20 lg:py-10 2xl:pr-40 2xl:mt-40">
                    <h4 className="font-bold text-sativa-purple mb-2 uppercase text-xs tracking-widest">
                        [category will display here]
                    </h4>
                    <h2 className="uppercase mb-4 font-bold text-3xl lg:text-4xl">
                        { product.name }
                    </h2>
                    <p className="mb-6 text-base sm:text-lg">
                        <ProductDescription description={ product.description } />
                    </p>
                    <div className="flex items-center justify-between mb-6 sm:flex-col sm:items-start">
                        <div className="flex items-center gap-4">
                            <h3 className="text-very-dark font-bold text-3xl inline-block">
                                ${ product.price }
                            </h3>
                            <span className="inline-block h-fit py-0.5 px-2 font-bold bg-pale-orange text-orange rounded-lg text-sm">50%</span>
                        </div>
                        <p className="text-dark-grayish w-fit line-through decoration-dark-grayish decoration-1 my-auto">
                            $250.00
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 mb-16 sm:flex-row lg:mb-0">
                        <div className="w-full h-10 text-sm bg-light py-2 flex items-center justify-between rounded-lg font-bold relatives sm:w-80">
                            <div id="minus" className="plus-minus">
                                <div className="w-3 h-1 bg-orange absolute" id="minus"></div>
                                -
                           </div>
                            <span id="amount" className="select-none">0</span>
                            <div id="plus" className="plus-minus">
                                +
                            </div>
                        </div>
                        <button
                            className="w-full h-10 bg-orange py-2 flex items-center justify-center gap-4 text-xs rounded-lg font-bold text-light shadow-md shadow-orange hover:brightness-125 transition select-none"
                            id="add-cart"
                        >
                           [cart]
                           Add to cart
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}
