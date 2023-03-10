'use client'

import { useState } from "react"
import swell from "../lib/swell"

export default function AddToCart({ product }: { product: swell.Product }) {
    const [quantity, setQuantity] = useState(1)

    function decrement() {
        if(quantity !== 1) {
            setQuantity(quantity - 1)
        }
    }

    function increment() {
        setQuantity(quantity + 1)
    }

    function add() {

    }

    return (
        <div className="flex flex-col gap-5 mb-16 sm:flex-row lg:mb-0">
            <div className="w-full h-10 text-sm bg-light py-2 flex items-center justify-between rounded-lg font-bold relatives sm:w-80">
                <button className='w-8 bg-sativa-purple' onClick={ decrement }>-</button>
                <span className=''>{ quantity }</span>
                <button className='w-8 bg-sativa-purple' onClick={ increment }>+</button>
            </div>
            <button className="w-full h-10 bg-orange py-2 flex items-center justify-center gap-4 text-xs rounded-lg font-bold text-light shadow-md shadow-orange hover:brightness-125 transition select-none">
                [cart]
                Add to cart
            </button>
        </div>
    )

}
