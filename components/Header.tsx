'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../public/images/sativa_logo.jpg'
import { HomeIcon } from '@heroicons/react/24/outline'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [active, setActive] = useState<boolean>()
    const path = usePathname()

    return(
        <header className='w-full flex justify-between'>
            <Link href='/' className='block pl-5'><Image src={ logo } alt='Sativa Scents' priority /></Link>
            <nav className='hidden pt-[28px] pr-5 sm:block'>
                <ul className='flex items-center'>
                    <li className='pr-6'>
                        <Link href='products' className={`relative inline-flex items-center hover:text-sativa-green ${path === '/products' ? 'text-sativa-green' : ''}`}>
                            <BuildingStorefrontIcon className='h-8 w-8 pr-2' />
                            Shop
                        </Link>
                    </li> 
                    <li className='pr-6'>
                        <Link href='cart' className={`relative inline-flex items-center hover:text-sativa-green ${path === '/cart' ? 'text-sativa-green' : ''}`}>
                           <ShoppingCartIcon className='h-8 w-8 pr-2' />
                           Cart
                        </Link>
                    </li> 
                    <li className='pr-6'>
                        <Link href='login' className='relative inline-flex items-center hover:text-sativa-green'>
                            <ArrowRightOnRectangleIcon className='h-8 w-8 pr-2' />
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href='register' className='relative inline-flex items-center bg-sativa-purple text-sativa-white ml-5 py-3 px-3 rounded-full transition-colors hover:bg-sativa-white hover:text-sativa-blue'>
                            Register
                        </Link>
                    </li>
                 </ul>
            </nav>
            <button className='p-4 sm:hidden' onClick={ () => { setActive(!active) }}>
                <Bars3Icon className='h-8 w-8 pr-2' />
            </button>

            {/* responsive sliding menu */}
            <div className={`block fixed z-10 top-0 bottom-0 pl-2 h-full w-56 transition-all bg-sativa-blue sm:hidden ${active ? 'left-0' : '-left-56'}`}>
                <ul>
                    <li>
                        <Link href='/' className='flex items-center p-3 transition-colors hover:text-sativa-green'>
                           <HomeIcon className='h-8 w-8 pr-2' />
                           Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/products' className='flex items-center p-3 transition-colors hover:text-sativa-green'>
                           <BuildingStorefrontIcon className='h-8 w-8 pr-2' />
                           Shop
                        </Link>
                    </li>
                    <li>
                        <Link href='/cart' className='flex items-center p-3 transition-colors hover:text-sativa-green'>
                           <ShoppingCartIcon className='h-8 w-8 pr-2' />
                           Cart
                        </Link>
                    </li>
                    <li>
                        <Link href='/login' className='flex items-center p-3 transition-colors hover:text-sativa-green'>
                           <ArrowRightOnRectangleIcon className='h-8 w-8 pr-2' />
                           Login
                        </Link>
                    </li>
                    <li>
                        <Link href='/register' className='block text-center text-sativa-blue bg-sativa-white ml-5 py-3 px-3 rounded-full transition-colors hover:bg-sativa-white hover:text-sativa-blue'>
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
            {/* end responsive menu */}
        </header>
    )
}
