import swell from '../lib/swell'
import Image from 'next/image'
import Link from 'next/link'

export default async function Product() {
    const products = await swell.products.list()

    return (
        <>
            <h2>something</h2>
        </>
    )

}
